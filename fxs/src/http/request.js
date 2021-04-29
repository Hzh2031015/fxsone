import Axios from "axios";
//引入axios
import store from "../store";
//引入 vuex
import router from "../router";
//引入路由

var baseURL = `https://www.liulongbin.top:8888/api/private/v1/`;
//基本域名

const instance = Axios.create({
  baseURL,
  timeout: 5000, //超时时间
});
//创建axios实例

// 添加请求拦截器
// 在发送请求之前进行拦截
instance.interceptors.request.use(
  //
  function(config) {
    // 在发送请求之前做些什么

    if (store.state.token) {
      config.headers.Authorization = store.state.token;
      //在配置的头信息里添加授权字段=vuex里的token
    }
    //如果vuex中有token，证明已经登陆了，在发送请求的时候携带token
    // 在请求的头信息里 的Authorization字段携带token
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    // console.log(response);
    if (response.data.msg === "无效token") {
      router.push({
        path: "/login",
      });
    }
    return response;
    //如果后台返回的数据告诉我们 token是无效的 就跳转到登陆页面
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 封装http方法，如果请求成功就把请求到的数据return 如果响应失败就执行失败的catch函数
// data是post的传参  params是get的传参
export default function http(url, method, data = {}, params = {}) {
  return instance({
    url,
    data,
    method,
    params,
  })
    .then((res) => {
      console.log(res);
      if (res.status >= 200 && res.status < 300) {
        return res;
      } else {
        return Promise.reject(res.data.meta.msg);
        //失败的回调
      }
    })
    .catch((err) => {
      return Promise.reject(err);
      //走失败的回调
    });
}

// axios拦截器 就是对请求和响应进行拦截，拦截之后做一些事情，做完之后才继续放行
