import http from 'axios';
let headers =  { 
    'Content-Type': 'application/x-www-form-urlencoded',
     'Authorization ': ''
 }
  function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
};
let server = http.create({
    baseURL: 'http://192.168.1.8:8080/shops/',
    //baseURL: 'http://localhost:7007/',
    timeout: 3000,
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return JSON.stringify(data);
    }],

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return JSON.parse(data);
    }],
    headers: headers,

})
server.defaults.headers.common['Authorization'] = getCookie('token')
export default server
