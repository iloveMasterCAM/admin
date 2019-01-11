import $ from 'jquery'

const ajax = {
    baseURL: 'http://192.168.1.8:8080/FH-WEB/shops/',
    post(url,data,callback){
       return $.ajax({
            type:'post',
            data:data,
            timeout:3000,
            url:this.baseURL+url,
            complete:function(r){
                console.log(r.status)
                if(r.status == 200){
                    r.done
                    callback && callback(r.responseJSON)
                }else{
                 console.error('请求错误');
                }
               
            }
        })
    },
    get(){
        $.ajax({
            type:'get',
            data:data,
            timeout:3000,
            url:this.baseURL+url,
            complete:function(r){
                console.log(r.status)
                if(r.status == 200){
                    r.done
                    callback && callback(r.responseJSON)
                }else{
                 console.error('请求错误');
                }
            }
        })
    }

}

export default ajax
