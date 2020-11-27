<!--
 * @Descripttion: 
 * @version: 
 * @Author: jxzuo
 * @Date: 2020-11-27 17:38:32
 * @LastEditors: jxzuo
 * @LastEditTime: 2020-11-27 17:38:59
-->
<template>
    <div
        class="bapp-no-network"
        :class="globle ? 'no-network-globle' : 'no-network-part'"
        v-show="visible"
    >
        <div class="no-network-container">
            <img class="no-network-img"/>
            <div class="no-network-text">{{ text }}</div>
            <div class="no-network-refresh-btn" @click="handleRefreshClick">
                {{ refreshBtnText }}
            </div>
        </div>
    </div>
</template>

<script>
/**
 loading
 */
export default {
    data() {
        return {
            visible: false,
            originPosition: '' // 目标dom的原始position
        };
    },
    props: {
        refreshBtnText: {
            // 刷新按钮的文本
            type: String,
            default: '重新加载'
        },
        text: {
            // 提示文本
            type: String,
            default: '当前网络不太好'
        },
        globle: {
            // 全局显示还是局部显示
            type: Boolean,
            default: true
        },
        target: {
            // 目标dom（无网络状态展示在目标dom下）
            default: null
        }
    },
    watch: {
        target: {
            handler: function(newVal, oldval) {
                if (!newVal) {
                    return;
                }
                this.originPosition = newVal.style.position;
            },
            immediate: true
        },
        visible(newVal, oldval) {
            if (!this.globle && this.target) {
                if (this.originPosition === 'absolute' || this.originPosition === 'fixed') {
                    return;
                }
                this.target.style.position = newVal ? 'relative' : this.originPosition;
            }
        }
    },
    methods: {
        handleRefreshClick() {
            this.$emit('refresh');
        }
    }
};
