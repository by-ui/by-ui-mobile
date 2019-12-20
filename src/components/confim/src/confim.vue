/*
 * @Author: cai.qi 
 * @Date: 2019-12-20 13:34:51 
 * @Last Modified by: cai.qi
 * @Last Modified time: 2019-12-20 14:11:40
 ------------- confim 弹窗确定 ------------  
 ------------- props ------------ 
 
 ------------- out ------------ 
 
 */
<template>
    <div class="comfim"
         v-if="visible">
        <div class="mod"
             @click="clickCancel"></div>

        <transition enter-active-class="fadeIn animated">
            <div v-if="bodyvisible"
                 class="confim_body">
                <div v-if="title"
                     class="title">{{title}}</div>
                <div class="message"
                     v-html="message"></div>
                <div class="btns">
                    <div v-if="!noCancel"
                         @click="clickCancel"
                         class="cancel">{{cancelText||'取消'}}</div>
                    <div class="enter"
                         @click="clickEnter">{{enterText||'确定'}}</div>
                </div>
            </div>

        </transition>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";

    @Component({
        name: 'Message'
    })
    export default class Message extends Vue {
        private title: string = "";
        private message: string = ""
        private visible: boolean = false;
        private bodyvisible: boolean = false;
        private noCancel: boolean = false
        private cancelText: string = ""
        private enterText: string = ""
        private onCancel: any
        private onEnter: any

        mounted() {
            this.visible = true;
            setTimeout(() => {
                this.bodyvisible = true
            }, 0);
        }

        @Watch("closed")
        watchCloses(value: boolean) {
            if (value) {
                this.visible = false;
            }
        }

        clickCancel() {
            this.visible = false
            this.bodyvisible = false
            this.onCancel()
        }

        clickEnter() {
            this.visible = false
            this.bodyvisible = false
            this.onEnter()
        }

    }
</script>

<style lang='scss' scoped>
    $boder-color: rgba(221, 221, 221, 1);
    $act-color: rgba(252, 115, 1, 1);
    $def-color: rgba(0, 0, 0, 1);
    $mod-back: rgba(0, 0, 0, 0.4);
    .mod {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: 998;
        background-color: $mod-back;
    }
    .comfim {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        .confim_body {
            position: absolute;
            z-index: 1000;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 10px;
            padding-bottom: 40px;
            width: 70%;
            background-color: #fff;
            border-radius: 10px;
            text-align: center;
            .title {
                font-size: 16px;
                font-weight: bold;
            }
            .message {
                padding: 10px 0;
                font-size: 12px;
            }
            .btns {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 40px;
                line-height: 40px;
                display: flex;
                justify-content: space-between;
                border-top: 1px solid $boder-color;
                & > div {
                    flex: 1;
                }
                .cancel {
                    border-right: 1px solid $boder-color;
                }
                .enter {
                    color: $act-color;
                }
            }
        }
    }

    // ------------------------ 动画 ------------------------
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
    .animated {
        -webkit-animation-duration: 0.6s;
        animation-duration: 0.6s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    @-webkit-keyframes fadeIn {
        from {
            -webkit-transform: translate(-50%, -50%) scale(0.9);
            transform: translate(-50%, -50%) scale(0.9);
        }

        to {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes fadeIn {
        from {
            -webkit-transform: translate(-50%, -50%) scale(0.9);
            transform: translate(-50%, -50%) scale(0.9);
        }

        to {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
        }
    }

    .fadeIn {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
    }
</style>
