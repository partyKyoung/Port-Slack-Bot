import utils from "../lib/utils";

export default function botTalk(message, rtm) {
  let num = utils.GetRandomNumber(10);

  const channel = message.channel;
  const text = message.text;
  const user = message.user;

  const place = ["우리 집", "회사", "오가닉미디어밸리"];
  const randomTalk = [
    "어렵게 생각하지 말고 아빠라고 생각해요 ㅎㅎ.",
    "팀 오브 팀스 꼭 읽어보세요.",
    "우리는 각자 일하지만 한방향을 보며 서로 돕는 관계입니다.",
    "피벗 테이블을 왜 안쓰는거야!"
  ];

  if (text.includes("?")) {
    if (text.includes("언제")) {
      if (num % 2 === 0) {
        rtm.sendMessage("오늘?", channel);
      } else {
        rtm.sendMessage("몰라요", channel);
      }
    } else if (text.includes("어디")) {
      num = utils.GetRandomNumber(place.length);
      rtm.sendMessage(place[num], channel);
    } else if (
      text.includes("무엇을") ||
      text.includes("뭘") ||
      text.includes("무얼") ||
      text.includes("뭐")
    ) {
      if (num % 2 === 0) {
        rtm.sendMessage("??", channel);
      } else {
        rtm.sendMessage("히익", channel);
      }
    } else if (text.includes("어떻게")) {
      if (num % 2 === 0) {
        rtm.sendMessage("잘 ㅎ", channel);
      } else {
        rtm.sendMessage("열심히 ㅎ;", channel);
      }
    } else if (text.includes("왜")) {
      if (num % 2 === 0) {
        rtm.sendMessage("그걸 왜 나한테 물어", channel);
      } else {
        rtm.sendMessage("나는 몰라", channel);
      }
    } else if (text.includes("어때")) {
      if (num % 2 === 0) {
        rtm.sendMessage("좋아요. 그걸로 진행해주세요 ㅎㅎ.", channel);
      } else {
        rtm.sendMessage("그게 최선이에요?", channel);
      }
    } else {
      if (num % 2 === 0) {
        rtm.sendMessage("네 ㅎㅎ.", channel);
      } else {
        rtm.sendMessage("ㄴ;", channel);
      }
    } // if
  } else {
    num = utils.GetRandomNumber(randomTalk.length);
    rtm.sendMessage(randomTalk[num], channel);
  } // if- else
}
