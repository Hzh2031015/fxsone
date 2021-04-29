import Axios from "axios";

var baseURL;

const instance = Axios.create({
  baseURL,
  //请求的基本路径
  timeout: 5000,
  //超时时间  超过这个时间就不再执行
});
//创建axios实例

// 封装http方法，如果请求成功就把请求到的数据return 如果响应失败就执行失败的catch函数
// data是post的传参  params是get的传参
export default function http(url, method, data = {}, params = {}) {
  return instance({
    url: url,
    method: method,
    data: data,
    params: params,
  })
    .then((res) => {
      // console.log(res);
      if (res.status >= 200 && res.status < 300) {
        return res;
      } else {
        return Promise.reject(res.data.meta.msg);
        //如果状态码不是200-300的之后就走失败的回调
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

// http.js就是封装的一个 axios请求的方法 后期还要添加一个请求拦截 一个响应拦截

// http.js 是封装的一个axios方法 比着直接用axios的好处是：可以设置baseurl和timeout

// 怎么使用：
// 注意 使用http同样要下载axios
// 在main.js写上
// import http from "./http/http.js";
// Vue.prototype.$http = http;
// 在请求axios 的时候
// this.$http("url","get/post").then().catch()
