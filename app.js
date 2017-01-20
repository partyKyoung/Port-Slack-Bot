import * as slack from '@slack/client';

import botFood from './src/bot/food';
import botWeather from './src/bot/weather';
import botTalk from './src/bot/talk';

const token = 'xoxb-130218032870-GBOHuHJZ1GUppjDK5BlSbQGZ';
var web = new slack.WebClient(token);
const rtm = new slack.RtmClient(token);
const CLIENT_EVENTS = slack.CLIENT_EVENTS;
const RTM_EVENTS = slack.RTM_EVENTS;

let talk = true;
let channels = [];

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  for (const c of rtmStartData.channels) {
	  if (c.is_member) {
      channels.push(c.id);
    }
  }
});

rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, () => {
  for (const channel of channels) {
	  rtm.sendMessage('저 출근했으니까 푸 빌려주세요', channel);
  }
});

rtm.on(RTM_EVENTS.MESSAGE, (message) => {
  const channel = message.channel;
  const text = message.text;
  const user = message.user;

  if (text) {
    if (text.includes('창명아') || text.includes('창명씨')) {
      if (text.includes('아침') || text.includes('점심') || text.includes('저녁') || text.includes('간식') || text.includes('야식')) {
        botFood(message, rtm);
      } else if (text.includes('날씨')) {
        botWeather(message, rtm);
      } else {
        botTalk(message, rtm);
      } // if - port - includes
    } // if -port
  } //if -text
});

rtm.on(RTM_EVENTS.REACTION_ADDED, (reaction) => {
  const sendUser = reaction.user;
  const channel = reaction.item.channel;

  let getUser = reaction.item_user;

  rtm.sendMessage("<@" + sendUser + '>님, ' + '<@' + getUser + '>님한테 리액션 달지말고 일 좀 해요', channel);
});

rtm.on(RTM_EVENTS.REACTION_REMOVED, (reaction) => {
  const sendUser = reaction.user;
  const channel = reaction.item.channel;

  let getUser = reaction.item_user;

  rtm.sendMessage("<@" + sendUser + '>님, ' + '<@' + getUser + '>님한테 왜 리액션 줬다 뺐어요; 양애취시네 완전;;', channel);
});

rtm.start();
