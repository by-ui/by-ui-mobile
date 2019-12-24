<template>
    <div class="verif_code">
        <div class="item"
             v-for="(item,index) in maxvalue"
             :key="'item'+index">
            <div v-if="onBlur&&inputvalue.length==index"
                 class="cursor"></div>
            <div class="inp_value">{{inputvalue[index]}}</div>
        </div>
        <input class="over_input"
               type="tel"
               :maxlength="max"
               @focus="onBlur=true"
               @blur="onBlur=false"
               @keyup="inuptChange">
    </div>
</template>
<script lang='ts'>
    import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
    @Component
    export default class MyWallet extends Vue {
        @Prop({ default: 4 }) max!: number

        private maxvalue: number[] = []
        private inputvalue: number[] = []
        private onBlur: boolean = false

        created() {
            let _maxvalue = []
            for (let i = 0; i < this.max; i++) {
                _maxvalue.push(-1)
            }
            this.maxvalue = _maxvalue
            this.onBlur = 'autoblur' in this.$attrs
        }

        inuptChange(e) {
            this.inputvalue = e.target.value.split('')
            this.$emit('input', e.target.value)
        }
    }
</script>
<style lang='scss' scoped>
    input {
        background: none;
        outline: none;
        border: 1px solid #ccc;
    }
    input:focus {
        border: none;
    }

    .verif_code {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .item {
        position: relative;
        margin: 0 10px;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(143, 143, 143);
    }
    .over_input {
        position: absolute;
        transform: translateX(-10%);
        width: 150%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        margin: 0;
        padding: 0;
    }
    .inp_value {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 70%;
        text-align: center;
    }
    .cursor {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 1px;
        height: 70%;
        background-color: #000;
        animation: focus 0.8s infinite;
    }

    @keyframes focus {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>