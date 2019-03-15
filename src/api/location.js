import request from "request";

import { kakaoRestApiKey } from "./src/lib/keys";

const api = "https://dapi.kakao.com";
const option = {
  url: "",
  headers: {
    Authorization: `KakaoAK ${kakaoRestApiKey}`
  }
};

function getQuery(location) {
  return `${api}/v2/local/search/address.json?query=${encodeURI(location)}`;
}

export default location => {
  option.url = getQuery(location);

  return new Promise((resolve, reject) => {
    request.get(option, (err, response, body) => {
      if (response.statusCode !== 200) {
        reject("error");
      }

      const data = JSON.parse(body);
      const { documents } = data;

      if (documents.length <= 0) {
        reject("error");
      }

      const { x, y } = documents[0];

      resolve({ x, y });
    });
  });
};
