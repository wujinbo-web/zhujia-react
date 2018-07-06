import axios from 'axios';
import nprogress from 'nprogress';

axios.defaults.timeout = 15000;
axios.defaults.headers['Content-Type'] = 'application/json';

const handelResponse = res => {
    if (res.response) {
        if (res.response.status == 500) {
            showError('服务器返回异常');
        } else {
            showError(`请求失败：\n${res.message}`);
        }
    } else {
        showError('网络错误，请求失败');
    }
};

const showError = msg => {
    alert(msg);
};

const http = (apiMethods, url, data) => {
    return new Promise((resolve, reject) => {
        axios[apiMethods](url, data)
            .then(response => {
                nprogress.done();
                resolve(response.data);
            })
            .catch(response => {
                nprogress.done();
                handelResponse(response);
            })
    });
};

const request = {
    apiGet(url, data) {
        return http('get', url, data);
    },
    apiPost(url, data) {
        return http('post', url, data);
    },
    apiFile(url, data) {
        nprogress.start();
        return new Promise((resolve, reject) => {
            axios.post(url, data, {
                method: 'post',
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((response) => {
                nprogress.done();
                resolve(response.data);
            }).catch((response) => {
                nprogress.done();
                reject(response);
                handelResponse(response);
            })
        })
    }
};

export default request;