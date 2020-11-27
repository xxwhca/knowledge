/*
 * @Descripttion: 
 * @version: 
 * @Author: jxzuo
 * @Date: 2020-11-27 17:35:51
 * @LastEditors: jxzuo
 * @LastEditTime: 2020-11-27 17:36:14
 */
import {Toast} from 'mint-ui';
import bappNoNetWork from '@/components/BappNoNetwork/index.js';
import cappNoNetWork from '@/components/CappNoNetwork/index.js';
// 使用样例
// 第一种情况，全部toast提示
// apiErrorHandler('错误的文本')
// 第二种情况，全局显示无网络，其他toast，默认重新加载页面
// apiErrorHandler({network: 'offline'},{showNetWork: true})
// 第三种情况，全局显示无网络，其他toast，传递刷新回调函数
// let noNetWork = apiErrorHandler({network: 'offline'},{
//     showNetWork: true,
//     refresh: ()=>{
//         console.log('第三种情况点击刷新')
//         noNetWork.close()
//     }
// })
// // 第四种情况，局部显示无网络，其他toast提示，传递刷新回调函数，
// // <div class="part-no-network-test" ref="partNoNetworkTest">xvnsijdgnisgfosgnoiawgn</div>
// let noNetWork = apiErrorHandler({network: 'offline'}, {
//     showNetWork: true,
//     netWorkglobal: false,
//     netWorkTarget: this.$refs.partNoNetworkTest,
//     refresh: ()=>{
//         console.log('第四种情况点击刷新');
//         noNetWork.close()
//     }
// })

// 判断是否在线
const isOnline = () => {
    try {
        return window.navigator.onLine;
    } catch (e) {
        //当前浏览器不支持online属性
        return false;
    }
};

/**
 *
 * @param {any} err 错误提示
 * @param {Object} config 配置参数
 * @param {string} config.appType 类型，目前有两个值 cApp,bApp; 默认为 bApp
 * @param {boolean} config.showNetWork 在无网络状态下是否展示无网络状态组件，默认false(即不展示无网络状态直接toast)
 * @param {fn} config.refresh 无网络状态下的刷新事件,默认为null,不传递代表直接刷新整个页面。ps.只有在config.showNetWork为true时有效
 * @param {boolean} config.netWorkglobal 展示的无网络状态是全局还是局部的，默认为全局的，如果为局部必须传递config.netWorkTarget参数。ps.只有在config.showNetWork为true时有效
 * @param {dom} config.netWorkTarget 无网络状态为局部时，需要传递的目标dom(即在目前dom中展示无网络状态)。ps.只有在config.showNetWork为true时有效
 */
function apiErrorHandler(appType) {
    return (
        err,
        {showNetWork = false, refresh = null, netWorkglobal = true, netWorkTarget = null} = {}
    ) => {
        let noNetWork = appType === 'bApp' ? bappNoNetWork : cappNoNetWork;
        if (typeof err === 'string') {
            Toast(err);
        } else if (err.network && err.network === 'offline') {
            if (!showNetWork) {
                Toast('网络已断开');
                return;
            }
            noNetWork.open({
                global: netWorkglobal,
                target: netWorkTarget,
                refresh: () => {
                    if (refresh) {
                        refresh();
                    } else {
                        if (!isOnline()) {
                            return;
                        }
                        location.reload();
                    }
                }
            });
        } else {
            Toast('系统异常请重试');
        }
        return noNetWork;
    };
}
export default apiErrorHandler;
