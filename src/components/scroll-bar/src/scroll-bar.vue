<template>
    <div class="scroll_bar"
         :style="{width:width+'%'}">
    </div>
</template>
<script lang='ts'>
    import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
    import throttle from '@/utils/throttle'
    @Component
    export default class MyWallet extends Vue {
        @Prop()
        parent?: any
        @Prop()
        element?: any
        private width: number = 0

        mounted() {
            setTimeout(() => {
                const _parent = this.parent || window
                const _element = this.element || document.documentElement
                const _this = this
                //------------------------------ 父类宽
                const _w = Number(_parent.innerWidth || _parent.offsetWidth)
                //------------------------------ 父类高
                const _h = Number(_parent.innerHeight || _parent.offsetHeight)
                //------------------------------ 子类滚动高
                const _sh = Number(_element.scrollHeight)
                const __w = 100 / _w
                //------------------------------ 比例换算 _t * (_w / (_sh - _h) * __w 
                if (this.parent) {
                    _parent.addEventListener('scroll', function () {
                        throttle(() => {
                            const _t = Number(_parent.scrollTop) || 1
                            _this.width = Number(_t * (_w / (_sh - _h) * __w))
                        }, 30)
                    });
                } else {
                    document.addEventListener('scroll', function (e) {
                        throttle(() => {
                            const _t = Number(_element.scrollTop) || 1
                            _this.width = Number(_t * (_w / (_sh - _h) * __w))
                        }, 30)
                    });
                }
            }, 100);
        }
    }
</script>
<style lang='scss' scoped>
    .scroll_bar {
        width: 5px;
        height: 2px;
        background-color: #6190e8;
    }
</style>