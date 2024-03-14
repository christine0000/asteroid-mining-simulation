import Taro from "@tarojs/taro";

const BASE_URL = "https://asteroids.dev.mediasia.cn";

class HTTP {
  /**
   * GET
   */
  getRequest(url, data) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, "GET");
    });
  }

  /**
   * DELETE
   */
  deleteRequest(url, data) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, "DELETE");
    });
  }

  /**
   * PUT
   */
  putRequest(url, data) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, "PUT");
    });
  }

  /**
   * POST
   */
  postRequest(url, data) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, "POST");
    });
  }

  /**
   * request methods
   * @param {*} url
   * @param {*} resolve
   * @param {*} reject
   * @param {*} data
   * @param {*} method
   */
  _request(url, resolve, reject, data = {}, method) {
    Taro.request({
      url: BASE_URL + url,
      method: method,
      data: data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        console.log("error: ", err);
        reject(err);
      },
    });
  }
}

export default HTTP;
