<template>
    <div class="scroll_bar"
         :style="{width:width+'%'}">
    </div>
</template>
<script lang='ts'>
    import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
    @Component
    export default class MyWallet extends Vue {
        private width: number = 0

        mounted() {
            const _this = this
            const _w = Number(window.innerWidth)
            const _h = Number(window.innerHeight)
            const _sh = Number(document.documentElement.scrollHeight)
            const __w = 100 / _w
            document.addEventListener('scroll', function (e) {
                const _t = Number(document.documentElement.scrollTop) || 1
                _this.width = Number(_t * (_w / (_sh - _h) * __w))
            });
        }


    }
</script>
<style lang='scss' scoped>
    .scroll_bar {
        height: 2px;
        background-color: red;
    }
</style>