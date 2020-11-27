/*
 * @Descripttion: 
 * @version: 
 * @Author: jxzuo
 * @Date: 2020-11-27 17:34:34
 * @LastEditors: jxzuo
 * @LastEditTime: 2020-11-27 17:35:14
 */
import axios from 'axios';
import qs from 'qs';
import {DINGJIA_URL} from '../utils/constants';
import {Indicator} from 'mint-ui';

// 加载动画计数器
let loading_count = 0;
// axios中提供的取消发起请求的构造方法
// let cancelToken = axios.CancelToken;
// 添加动画计数的定时器
let timer = null;
// 需要显示加载动画的最小时间
const need_loading_time = 200;

// 显示加载动画
const show_loading = () => {
    loading_count++;
    // 设定定时器的目的是为了防止请求时间比较短的情况下
    // 出现loading框一闪而过的情况,反而降低了用户体验
    if (!timer) {
        timer = setTimeout(() => {
            if (loading_count > 0) Indicator.open();
        }, need_loading_time);
    }
};

// 隐藏加载动画
const hide_loading = () => {
    loading_count--;
    if (loading_count === 0) {
        clearTimeout(timer);
        timer = null;
        Indicator.close();
    }
};

// 判断是否在线
const predicate_online = () => {
    try {
        return window.navigator.onLine;
    } catch (e) {
        //当前浏览器不支持online属性
        return "current browser don't has onLine property";
    }
};

// 对axios进行二次封装
// 设置默认URL
axios.defaults.baseURL = DINGJIA_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.timeout = 20000;

// 设置请求拦截器
axios.interceptors.request.use(
    config => {
        // 判断当前是否连接着互联网
        if (!predicate_online()) {
            return Promise.reject({network: 'offline'});
        } else if (config.loading === undefined || config.loading !== false) {
            show_loading();
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 设置相应拦截器
axios.interceptors.response.use(
    function(response) {
        if (!response.config.loading || response.config.loading !== false) {
            hide_loading();
        }
        let response_data = response.data || {};
        let success_code_list = ['0', 0, '1', 1, 2000, '2000'];

        if ('code' in response_data) {
            // 请求的数据没异常
            if (success_code_list.indexOf(response_data.code) > -1) {
                return response_data.data;
            } else {
                return Promise.reject(response_data.msg);
            }
        } else if ('status' in response_data) {
            if (response_data.status === true) {
                return response_data.data || response_data.message;
            } else {
                return Promise.reject(
                    response_data.msg || response_data.message || response_data.message.error
                );
            }
        } else {
            return response_data;
        }
    },
    error => {
        hide_loading();
        if (!predicate_online()) {
            return Promise.reject({network: 'offline'});
        }
        return Promise.reject(error);
    }
);
axios.jsonp = (url, {data, config = {}}) => {
    if (config.loading === undefined || config.loading !== false) {
        show_loading();
    }
    if (!url) throw new Error('url is necessary');
    const callback =
        'CALLBACK' +
        Math.random()
            .toString()
            .substr(9, 18);
    const JSONP = document.createElement('script');
    JSONP.setAttribute('type', 'text/javascript');

    const headEle = document.getElementsByTagName('head')[0];

    let ret = '';
    if (data) {
        if (typeof data === 'string') ret = '&' + data;
        else if (typeof data === 'object') {
            for (let key in data) ret += '&' + key + '=' + encodeURIComponent(data[key]);
        }
        ret += '&_time=' + Date.now();
    }
    JSONP.src = `${DINGJIA_URL}${url}?callback=${callback}${ret}`;
    return new Promise((resolve, reject) => {
        window[callback] = r => {
            if (config.loading === undefined || config.loading !== false) {
                hide_loading();
            }
            resolve(r);
            headEle.removeChild(JSONP);
            delete window[callback];
        };
        JSONP.onerror = function(err) {
            if (config.loading === undefined || config.loading !== false) {
                hide_loading();
            }
            if (!predicate_online()) {
                reject({network: 'offline'});
            } else {
                reject(err);
            }
        };
        headEle.appendChild(JSONP);
    });
};

// 封装Get与Post请求
const http_get = (url, params = {}, config = {}) => {
    return axios.get(url, {
        params,
        ...config
    });
};

const http_post = (url, data = {}, config = {}) => {
    return axios.post(url, qs.stringify(data), config);
};

const http_jsonP = (url, data = {}, config = {}) => {
    return axios.jsonp(url, {
        data,
        config
    });
};

export default axios;
export {http_get, http_post, http_jsonP};
