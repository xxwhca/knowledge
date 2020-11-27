/*
 * @Descripttion: 
 * @version: 
 * @Author: jxzuo
 * @Date: 2020-11-27 17:37:25
 * @LastEditors: jxzuo
 * @LastEditTime: 2020-11-27 17:37:35
 */
import Vue from 'vue';
import noNetwork from './no-network.vue';
const NoNetwork = Vue.extend(noNetwork); // 注册到Vue中，NoNetwork为无网络组件的构造器，
let instance; //无网络组件实例

export default {
    open({
        text = '当前网络不太好',
        refreshBtnText = '重新加载',
        global = true,
        target = null,
        refresh = null
    } = {}) {
        if (!instance) {
            // 创建noNetwork的实例即为一个vue组件， instance相当于我们在组件中使用的this
            instance = new NoNetwork({
                el: document.createElement('div')
            });
        }
        if (instance.visible) return;

        instance.text = text;
        instance.refreshBtnText = refreshBtnText;
        instance.global = global;
        instance.target = target;

        // noNetwork组件对应的dom附加到 body或者目标dom上
        if (!global && target) {
            target.appendChild(instance.$el);
        } else {
            document.body.appendChild(instance.$el);
        }
        refresh && instance.$on('refresh', refresh);
        Vue.nextTick(() => {
            instance.visible = true;
        });
        return this;
    },

    close() {
        if (instance) {
            instance.visible = false;
        }
    }
};