import axios from 'axios'

export const base_url = 'http://shebao.ueepub.cn';

export const ajaxPost = function(url,data,suc,err){
    axios({
        url:url,
        method:'post',
        data:data,
        timeout:100000,
        baseURL:base_url,
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(suc)
    .catch(err);
}