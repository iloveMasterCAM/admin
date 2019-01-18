import http from 'axios';


export default class server {
    constructor() {
        this.config = [
            'store/storeApplication.do'
        ]
    }
    load(url){
        this.headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'token': this.getCookie('token')
        }
        this.isSrt = false;
        if(this.config.indexOf(url) != -1){ // 图片上传
            this.headers['Content-Type'] = 'multipart/form-data'
            this.isSrt = true;
        }
        let that = this;
        return this.http = http.create({
            baseURL: 'http://192.168.1.8:8080/shops/',  // 贾
            // baseURL: 'http://192.168.1.2:8080/shops/',  // 徐
            // baseURL: 'http://localhost:7007/',
            //timeout: 3000,
            transformRequest: [function (data) {
            
                return that.isSrt?data:JSON.stringify(data);
            }],
            headers: this.headers,
        })
    }
    getCookie(c_name) {
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
    }
    post(url, data, callback) {
        this.load(url).post(url, data).then(function (r) {
            if(r.status == 200){
                callback && callback(r.data)
            }
        }).catch(function (err) {
            new error(url + "接口报错" + err)
        })
    }
    get(url, data,callback) {
        this.load(url).get(url, {
            params: data
        })
            .then(function (r) {
              //  console.log(r)
                if(r.status == 200){
                    callback && callback(r.data)
                }
               
            })
            .catch(function (error) {
                new error(url + "接口报错" + err)
            });
    }
}
