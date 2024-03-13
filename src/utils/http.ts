import Taro from "@tarojs/taro";

const BASE_URL = "https://asteroids.dev.mediasia.cn";

class HTTP {
  /**
   * GET类型的网络请求
   */
  getRequest(url, data) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, "GET");
    });
  }

  /**
   * DELETE类型的网络请求
   */
  deleteRequest(url, data) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, "DELETE");
    });
  }

  /**
   * PUT类型的网络请求
   */
  putRequest(url, data) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, "PUT");
    });
  }

  /**
   * POST类型的网络请求
   */
  postRequest(url, data) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, "POST");
    });
  }

  /**
   * request 包装函数
   * @param {*} url
   * @param {*} resolve
   * @param {*} reject
   * @param {*} data
   * @param {*} method
   */
  _request(url, resolve, reject, data = {}, method = "GET") {
    Taro.request({
      url: BASE_URL + url,
      method: method as any,
      data: data,
      success: (res) => {
        console.log("请求成功", res.data);
        resolve(res.data);
      },
      fail: (err) => {
        console.log("errorsss", err);
        reject(err);
      },
    });
  }
}

export default HTTP;
