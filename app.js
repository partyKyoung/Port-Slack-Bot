import { RTMClient } from "@slack/client";

import { slackBotKey } from "./src/lib/keys";
import findLocaation from "./src/api/location";

const token = slackBotKey;

const rtm = new RTMClient(token);

rtm.start();

rtm.on("message", async message => {
  const { text } = message;

  if (text.includes("날씨 명령어")) {
    rtm.sendMessage(
      `
      미세먼지 [지역]
      날씨 [지역]
    `,
      message.channel
    );
  }

  try {
    if (text.includes("서울")) {
      const response = await findLocaation("서울");

      console.log(123, response);
    }
  } catch (e) {
    console.log(e);
  }
});
