<template>
    <button class="s_button"
            :class="[disabled&&'disabled']"
            @click="actClick">
        <slot></slot>
    </button>
</template>
<script lang='ts'>
    import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
    import debounce from '@/utils/debounce'

    @Component
    export default class MyWallet extends Vue {
        disabled: boolean = false
        undebounce: boolean = false

        created() {
            if ('disabled' in this.$attrs) {
                this.disabled = true
            }
            if ('undebounce' in this.$attrs) {
                this.undebounce = true
            }
            //
        }

        actClick() {
            if (this.disabled) {
                return
            }
            if (!this.undebounce) {
                debounce(() => this.$emit('click'))
            } else {
                this.$emit('click')
            }
        }
    }
</script>
<style lang='scss' scoped>
    .s_button {
        padding: 0 10px;
        margin: 0;
        min-width: 70px;
        line-height: 28px;
        height: 28px;
        text-align: center;
        background: linear-gradient(
            104deg,
            rgba(254, 168, 92, 1) 0%,
            rgba(244, 114, 45, 1) 100%
        );
        color: #fff;
        font-size: 14px;
        border-radius: 30px;
        border: none;
        outline: none;
    }
    .disabled {
        background: linear-gradient(
            104deg,
            rgb(194, 194, 194) 0%,
            rgb(98, 98, 98) 100%
        );
    }
</style>