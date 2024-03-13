import HTTP from "@/utils/http";

const URL_GET_MINERS_LIST = "/miners";

export default class Miners extends HTTP {
  getMinersList() {
    return this.getRequest(`${URL_GET_MINERS_LIST}`, null);
  }
}
