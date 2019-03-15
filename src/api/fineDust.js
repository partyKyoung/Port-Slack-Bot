import request from "request";

import getAddress from "./location";

class FineDust {
  constructor() {
    this.api =
      "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?sidoName=서울&ServiceKey=rmghUaxXnDVxsk6a5Oe6LYrQpMsubqmjg6gP%2BCx7lwiCh4Ove3W9IMIXfB6ze77fCS1Z6Ef9Wkf170bdW4GxWA%3D%3D";
  }

  getCurrentFineDustInfo(location) {
    getAddress(location);
  }
}

export default FineDust;
