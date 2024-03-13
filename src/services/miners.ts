import HTTP from "@/utils/http";

const URL_GET_MINERS_LIST = "/miners";
// const URL_GET_MINER = "/miners/";
const URL_GET_MINER_HISTORY = "/history";

export default class Miners extends HTTP {
  getMinersList() {
    return this.getRequest(`${URL_GET_MINERS_LIST}`, null);
  }
  getMinerHistory(minerId) {
    return this.getRequest(`${URL_GET_MINER_HISTORY}?minerId=${minerId}`, null);
  }
}
