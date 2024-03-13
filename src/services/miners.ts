import HTTP from "@/utils/http";

const URL_GET_MINERS_LIST = "/miners";
const URL_GET_MINER = "/miners/";

export default class Miners extends HTTP {
  getMinersList() {
    return this.getRequest(`${URL_GET_MINERS_LIST}`, null);
  }
  getMinerHistory(minerId) {
    return this.getRequest(`${URL_GET_MINER}${minerId}`, null);
  }
}
