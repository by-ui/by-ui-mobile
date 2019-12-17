/*
 * @Author: cai.qi 
 * @Date: 2019-11-15 10:24:04 
 * @Last Modified by: cai.qi
 * @Last Modified time: 2019-12-17 17:27:24
 ------------- props ------------ 
 :title —— 标题
 v-model —— 展示开关
 @confirm —— 完成
 @cancel —— 取消
 ------------- out ------------ 
 
 */

<template>
    <div class="picker_box"
         v-if="visible">
        <div class="mod"
             @click="clickCancel"></div>
        <transition enter-active-class="fadeInUpBig animated"
                    leave-active-class="fadeInUpBig animated">
            <div v-if="bodyvisible"
                 class="picker">
                <div class="title">
                    <span @click="clickCancel">取消</span>
                    <span v-if="title">{{title}}</span>
                    <span @click="clickConfirm">完成</span>
                </div>
                <div class='content'>
                    <slot />
                </div>
            </div>
        </transition>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
    @Component
    export default class PickerWrap extends Vue {
        @Prop()
        title!: string;
        @Prop()
        value!: string;

        private visible = false;
        private bodyvisible = false
        private scrollTop = 0

        mounted() {
            if (this.value) {
                this.visible = true;
                setTimeout(() => {
                    this.bodyvisible = true
                }, 0);
            }
        }

        @Watch("value")
        watchValue(val: boolean) {
            this.visible = val;
            setTimeout(() => {
                this.bodyvisible = val;
            }, 0);
            const body = window.document.body;
            if (val) {
                this.scrollTop =
                    document.body.scrollTop || document.documentElement.scrollTop;
                body.style.position = "fixed";
                body.style.width = "100%";
                body.style.top = -this.scrollTop + "px";
            } else {
                body.style.position = "relative";
                body.style.top = "0";
                document.body.scrollTop = Number(this.scrollTop);
                document.documentElement.scrollTop = Number(this.scrollTop);
            }
        }

        @Watch("visible")
        watchVisible(val) {
            this.$emit("input", val);
        }
        // ======================== 点击完成
        clickConfirm() {
            this.visible = false
            this.bodyvisible = false
            this.$emit('confirm')
        }
        // ======================== 点击取消
        clickCancel() {
            this.visible = false
            this.bodyvisible = false
            this.$emit('cancel')
        }
    }
</script>
<style lang="scss" scoped>
    @import "./picker.scss";
</style>
