/*
 * @Author: cai.qi 
 * @Date: 2019-11-15 10:24:04 
 * @Last Modified by: cai.qi
 * @Last Modified time: 2019-12-18 18:38:09
 ------------- props ------------ 
 v-model —— 当前index
 :list —— 显示列表
 :use —— 使用什么键作为判断值
 ------------- out ------------ 
 
 */

<template>
    <div class="tab_list"
         ref='tab_list'>
        <div v-for="(item,index) in list"
             :key="'tab_list_item'+index"
             class="tab_list_item"
             :ref="'tab_list_item'+index"
             @click="change(index)">{{item[use]}}</div>
        <div v-if="move"
             :style="{transform: `translateX(${move.left}px)`,width:`${move.width}px`}"
             class="line"></div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
    import { settings } from "cluster";
    @Component
    export default class Tab extends Vue {
        @Prop({
            default: []
        })
        list!: any[];

        @Prop({
            default: 0
        })
        value!: number
        @Prop({
            default: 'key'
        })
        use!: string

        // 当前下标
        private actIndex = -1;
        private timeout: any

        get move() {
            const elenemts: any = this.$refs['tab_list_item' + this.actIndex] || false
            if (!elenemts.length) {
                return false
            }
            const ele = elenemts[0]
            const el = ele.getBoundingClientRect()
            const EtabList: any = this.$refs.tab_list
            const scrol = ele.offsetLeft - window.innerWidth / 2 + el.width 

            const step = () => {
                cancelAnimationFrame(this.timeout)
                if (scrol > EtabList.scrollLeft && scrol - EtabList.scrollLeft > 20) {
                    EtabList.scrollLeft += 9
                    if (EtabList.scrollLeft + window.innerWidth === EtabList.scrollWidth) {
                        return cancelAnimationFrame(this.timeout)
                    }
                    this.timeout = requestAnimationFrame(step)
                }
                else if (EtabList.scrollLeft > scrol && EtabList.scrollLeft - scrol > 20) {
                    EtabList.scrollLeft -= 9
                    if (EtabList.scrollLeft === 0) {
                        return cancelAnimationFrame(this.timeout)
                    }
                    this.timeout = requestAnimationFrame(step);
                }
                else {
                    cancelAnimationFrame(this.timeout)
                    EtabList.scrollLeft = scrol
                }
            }
            window.requestAnimationFrame(step);
            return {
                left: ele.offsetLeft,
                width: el.width
            }
        }

        mounted() {
            setTimeout(() => {
                this.actIndex = this.value
            }, 20);
        }

        // ======================== tab切换
        change(index: number) {
            this.actIndex = index
            this.$emit('input', index)
        }
    }
</script>
<style lang="scss" scoped>
    @import "mobile-tabs.scss";
</style>
