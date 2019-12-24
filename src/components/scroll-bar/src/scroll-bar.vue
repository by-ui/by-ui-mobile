<template>
    <div class="scroll_bar"
         :style="{width:width+'%'}">
    </div>
</template>
<script lang='ts'>
    import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
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
                const _w = Number(_parent.innerWidth || _parent.offsetWidth)
                const _h = Number(_parent.innerHeight || _parent.offsetHeight)
                const _sh = Number(_element.scrollHeight)
                const __w = 100 / _w

                if (this.parent) {
                    _parent.addEventListener('scroll', function (e) {
                        console.log(1)
                        const _t = Number(_parent.scrollTop) || 1
                        _this.width = Number(_t * (_w / (_sh - _h) * __w))
                    });
                } else {
                    document.addEventListener('scroll', function (e) {
                        console.log(2)
                        const _t = Number(_element.scrollTop) || 1
                        _this.width = Number(_t * (_w / (_sh - _h) * __w))
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