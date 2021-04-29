import http from "./request.js";

async function getlist(url, params) {
  let { data } = await http(url, "get", {}, params);
  //   let {data}={data:[],status:200,config}
  return data;
}

//下拉刷新的请求方法

async function getnode(params) {
  let { data } = await http("/topics", "get", {}, params);
  //   let {data}={data:[],status:200,config}
  return data;
}

export { getnode, getlist };
