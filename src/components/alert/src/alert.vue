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
        <div class="mod"></div>
        <transition enter-active-class="fadeIn animated"
                    leave-active-class="fadeOut animated">
            <div v-if="bodyvisible"
                 class="confim_body">
                {{message}}
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";

    @Component({
        name: 'Alert'
    })
    export default class Alert extends Vue {
        private message: string = ""
        private visible: boolean = false;
        private bodyvisible: boolean = false;
        private onClose: any
        private closeTime: number = 1500

        mounted() {
            this.visible = true;
            setTimeout(() => {
                this.bodyvisible = true
            }, 0);
            if (this.closeTime > 0) {
                setTimeout(() => {
                    this.clickClose()
                }, this.closeTime);
            }
        }

        @Watch("closed")
        watchCloses(value: boolean) {
            if (value) {
                this.visible = false;
            }
        }

        clickClose() {
            this.bodyvisible = false
            setTimeout(() => {
                this.visible = false
            }, 400);
            this.onClose()
        }
    }
</script>

<style lang='scss' scoped>
    $boder-color: rgba(221, 221, 221, 1);
    $act-color: rgba(252, 115, 1, 1);
    $def-color: rgba(0, 0, 0, 1);
    $mod-back: rgba(0, 0, 0, 0.1);
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
            padding: 5px 10px;
            max-width: 70%;
            background-color: rgba(37, 37, 37, 0.9);
            color: #fff;
            border-radius: 5px;
            text-align: center;
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
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
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

    //------------------------------ fadeOut
    @-webkit-keyframes fadeOut {
        from {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
        }

        to {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
        }
    }

    @keyframes fadeOut {
        from {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
        }

        to {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
        }
    }

    .fadeOut {
        -webkit-animation-name: fadeOut;
        animation-name: fadeOut;
    }
</style>
