/*
 * @Author: cai.qi 
 * @Date: 2019-11-15 10:56:54 
 * @Last Modified by: cai.qi
 * @Last Modified time: 2019-12-18 17:57:29
 ------------- props ------------ 
 :title —— 标题
 :defaultTime —— 默认展示时间(string) def:1997-12-30
 :startTime —— 开始时间(string) def:1997-12-30
 :endTime —— 结束时间(string) def:1997-12-30
 v-model —— 展示开关
 @confirm —— 完成
 @cancel —— 取消
 ------------- out ------------ 
 
 */
<template>
    <picker class="picker_time"
            :title="title||'请选择时间'"
            v-model="visible"
            @confirm="clickConfirm"
            @cancel="clickCancel">
        <template>
            <smooth-picker class="smooth-picker"
                           :change="dataChange"
                           :data='PickerDefaultData'
                           ref="smoothPicker" />
        </template>

    </picker>

</template>
<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";
    import { setTimeout } from "timers";
    import picker from "./picker.vue";
    import 'vue-smooth-picker/dist/css/style.css'
    import { SmoothPicker } from 'vue-smooth-picker'

    let refs: any = null

    interface I_time {
        baseStart: number
        baseEnd: number
        start: number
        default: number
        end: number,
        array: number[]
    }

    @Component({ components: { picker, SmoothPicker } })
    export default class PickerTime extends Vue {
        @Prop()
        title!: string;
        @Prop()
        value!: string;
        @Prop({
            default: ''
        })
        defaultTime!: string;
        @Prop({
            default: ''
        })
        startTime!: string;
        @Prop({
            default: ''
        })
        endTime!: string;


        private Year: I_time = {
            baseStart: 1970,
            baseEnd: new Date().getFullYear(),
            start: 1970,
            default: 1970,
            end: new Date().getFullYear(),
            array: []
        }
        private Month: I_time = {
            baseStart: 1,
            baseEnd: 12,
            start: 1,
            default: 1,
            end: 12,
            array: []
        }
        private Day: I_time = {
            baseStart: 1,
            baseEnd: 30,
            start: 1,
            default: 1,
            end: 30,
            array: []
        }
        // 展示开关字段
        private visible = false;
        private PickerDefaultData: any[] = []

        created() {
            this.init()
            console.log(this.$props)
        }

        mounted() {
            if (this.value) {
                this.visible = true;
            }
        }

        @Watch("value")
        watchValue(val: boolean) {
            if (val === true) {
                this.init()
            }
            this.visible = val;
        }
        @Watch("visible")
        watchVisible(val: boolean) {
            this.$emit("input", val);
        }

        // -------------------------------- 初始化数据
        init() {
            const _starTime = this.startTime.split('-')
            const _defautlTime = this.defaultTime ? this.defaultTime.split('-') : this.startTime.split('-')
            const _endTime = this.endTime.split('-')
            this.Year = {
                ...this.Year,
                start: Number(_starTime[0]),
                default: Number(_defautlTime[0]),
                end: Number(_endTime[0]),
            }
            this.Month = {
                ...this.Month,
                start: Number(_starTime[1]),
                default: Number(_defautlTime[1]),
                end: Number(_endTime[1]),
            }
            this.Day = {
                ...this.Day,
                start: Number(_starTime[2]),
                default: Number(_defautlTime[2]),
                end: Number(_endTime[2]),
            }
            this.initDate()
        }
        // -------------------------------- 闰年
        isLeapYear(year: number) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }
        // -------------------------------- 设置年
        setYear() {
            const years: any[] = [];
            let S = this.Year.start ? this.Year.start : this.Year.baseStart
            let E = this.Year.end ? this.Year.end : this.Year.baseEnd
            for (let i = S; i <= E; i++) {
                years.push(i);
            }
            let D = years.indexOf(this.Year.default)

            this.Year.array = years
            return {
                currentIndex: D,
                flex: 3,
                list: years,
                textAlign: "center",
                className: "row-group"
            }
        }
        // -------------------------------- 设置月
        setMonth() {
            const month: any[] = []
            let S = this.Month.baseStart
            let E = this.Month.baseEnd
            if (this.Year.default && this.Year.array.indexOf(this.Year.default) <= 0) {
                S = this.Month.start
            }
            if (this.Year.default && this.Year.array.indexOf(this.Year.default) === this.Year.array.length - 1) {
                E = this.Month.end || 12
            }

            for (let i = S; i <= E; i++) {
                month.push(i);
            }
            this.Month.array = month
            let D = month.indexOf(this.Month.default)

            return {
                currentIndex: D,
                flex: 3,
                list: month,
                textAlign: "center",
                className: "row-group"
            }
        }
        // -------------------------------- 设置日
        setDay() {
            const day: any[] = []
            let S = this.Day.baseStart
            let E = this.Day.baseEnd

            if (this.Month.default && this.Year.array.indexOf(this.Year.default) <= 0 &&
                this.Month.array.indexOf(this.Month.default) <= 0) {
                S = this.Day.start
            }

            // 设置默认结束时间
            if (this.Month.array.indexOf(this.Month.default) == 1) {
                E = this.Day.end || this.isLeapYear(this.Year.array[this.Year.array.indexOf(this.Year.default)]) ? 29 : 28
            } else {
                E = this.Day.end || 31
            }

            if (this.Year.array.indexOf(this.Year.default) === this.Year.array.length - 1 &&
                this.Month.array.indexOf(this.Month.default) === this.Month.array.length - 1) {
                E = this.Day.end || 31
            }
            for (let i = S; i <= E; i++) {
                day.push(i);
            }

            let D = day.indexOf(this.Day.default)
            this.Day.array = day
            return {
                currentIndex: D,
                flex: 3,
                list: day,
                //onClick: this.clickOnDay,
                textAlign: "center",
                className: "item-group"
            }
        }
        // -------------------------------- 初始
        initDate() {
            const defaultTime = this.defaultTime || ''
            const _b = defaultTime.split('-')
            const _Date = [
                this.setYear(),
                this.setMonth(),
                this.setDay()
            ];
            this.PickerDefaultData = _Date
        }
        // -------------------------------- 年月日变化
        dataChange(gIndex: number, iIndex: number) {
            const smoothPicker: any = this.$refs.smoothPicker

            if (gIndex === 0) {
                this.Year.default = this.Year.array[iIndex];
            }
            if (gIndex === 1) {
                this.Month.default = this.Month.array[iIndex];
            }
            if (gIndex === 2) {
                this.Day.default = this.Day.array[iIndex];
            }

            this.$nextTick(() => {
                const yearInfo = this.setYear()
                smoothPicker.setGroupData(0, yearInfo)
                const monthInfo = this.setMonth()
                smoothPicker.setGroupData(1, monthInfo)
                const dayInfo = this.setDay()
                smoothPicker.setGroupData(2, dayInfo)
            })
        }
        // ======================== 点击完成
        clickConfirm() {
            const smoothPicker: any = this.$refs.smoothPicker
            const ciList = smoothPicker.getCurrentIndexList()
            const defDate: any[] = this.PickerDefaultData;
            const outValue = defDate.map((val, index) => {
                if (!val.list) {
                    return ''
                }
                return (val.list[ciList[index]])
            })
            this.$emit('confirm', outValue)
        }
        // ======================== 点击取消
        clickCancel() {
            this.$emit('cancel')
        }

    }
</script>
<style lang="scss" scoped>
    .picker_time {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .content {
            flex: 1;
        }
        .notice {
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            padding-right: 20px;
            font-size: 28px;
            color: rgba(165, 165, 165, 1);
        }
        img {
            width: 12px;
            height: 22px;
        }
        .form {
            &.last {
                margin-bottom: 150px;
            }
            .form-item {
                .range {
                    width: 60%;
                    &/deep/ {
                        b {
                            padding: 0 20px;
                        }
                        span {
                            padding-left: 20px;
                        }
                        input {
                            width: 234px;
                            height: 78px;
                            background: rgba(249, 249, 249, 1);
                            border-radius: 8px;
                            border: 1px solid rgba(237, 237, 239, 1);
                        }
                    }
                }
                .textarea {
                    width: 100%;
                }
                display: flex;
                flex-wrap: wrap;
                padding-bottom: 30px;
                .item {
                    margin-bottom: 20px;
                    margin-right: 30px;
                    width: 148px;
                    text-align: center;
                    line-height: 56px;
                    background: rgba(237, 237, 239, 0.6);
                    border-radius: 6px;
                    &.right-side {
                        margin-right: 0;
                    }
                    &.active {
                        color: rgba(255, 255, 255, 1);
                        background: linear-gradient(
                            104deg,
                            rgba(254, 168, 92, 1) 0%,
                            rgba(244, 114, 45, 1) 100%
                        );
                        box-shadow: 0px 18px 32px -11px rgba(253, 152, 51, 0.54);
                    }
                    .notice {
                        padding-right: 20px;
                        font-size: 28px;
                        color: rgba(165, 165, 165, 1);
                    }
                    img {
                        width: 12px;
                        height: 22px;
                    }
                    .form {
                        &.last {
                            margin-bottom: 150px;
                        }
                        .form-item {
                            .range {
                                width: 60%;
                                &/deep/ {
                                    b {
                                        padding: 0 20px;
                                    }
                                    span {
                                        padding-left: 20px;
                                    }
                                    input {
                                        width: 234px;
                                        height: 78px;
                                        background: rgba(249, 249, 249, 1);
                                        border-radius: 8px;
                                        border: 1px solid rgba(237, 237, 239, 1);
                                    }
                                }
                            }
                            .textarea {
                                width: 100%;
                            }
                            display: flex;
                            flex-wrap: wrap;
                            padding-bottom: 30px;
                            .item {
                                &.right-side {
                                    margin-right: 0;
                                }
                                &.active {
                                    color: rgba(255, 255, 255, 1);
                                    background: linear-gradient(
                                        104deg,
                                        rgba(254, 168, 92, 1) 0%,
                                        rgba(244, 114, 45, 1) 100%
                                    );
                                    box-shadow: 0px 18px 32px -11px rgba(253, 152, 51, 0.54);
                                }

                                margin-bottom: 20px;
                                margin-right: 30px;
                                width: 148px;
                                text-align: center;
                                line-height: 56px;
                                background: rgba(237, 237, 239, 0.6);
                                border-radius: 6px;
                            }
                        }
                        .label {
                            padding-bottom: 20px;
                            font-size: 28px;
                            font-weight: 500;
                            color: rgba(0, 0, 0, 1);
                            line-height: 40px;
                        }
                    }
                }
            }
        }
    }
</style>
