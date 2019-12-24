# pickerTime 弹窗

---

基于 picker 组件的时间选择组件

### 默认使用

:::demo

```html
<div>选择值：{{pickdata1}}</div>

<div class="row">
    <by-picker-time
        v-model="model1"
        @confirm="(value)=>{pickdata1=value}"
        @cancel="(value)=>{pickdata1='点击取消'}"
    ></by-picker-time>
    <by-s-button type="primary" @click="model1=true">打开picker</by-s-button>
</div>
```

:::

### 带时间限制的使用

:::demo

```html
<div class="row">
    <by-picker-time
        v-model="model2"
        :title="'时间选择'"
        :start-time="'2018-3-2'"
        :end-time="'2019-3-9'"
    ></by-picker-time>
    <by-s-button type="primary" @click="model2=true">打开picker</by-s-button>
</div>
```

:::

### 带默认时间的使用

:::demo

```html
<div class="row">
    <by-picker-time
        v-model="model3"
        :title="'自定义TITLE'"
        :start-time="'2010-3-2'"
        :default-time="'2018-3-5'"
        :end-time="'2030-3-9'"
    ></by-picker-time>
    <by-s-button type="primary" @click="model3=true">打开picker</by-s-button>
</div>
```

:::

## Slot 参数

| 参数         | 说明             | 类型   | 可选值 | 默认值           |
| ------------ | ---------------- | ------ | ------ | ---------------- |
| title        | 标题             | String | -      | -                |
| start-time   | 选择初始时间限制 | String | -      | 1970             |
| end-time     | 选择结束时间限制 | String | -      | 当前年份最后一天 |
| default-time | 选择默认时间     | String | -      | -                |

## 方法

| 参数    | 说明         | 类型     | 可选值 | 默认值 |
| ------- | ------------ | -------- | ------ | ------ |
| confirm | 点击完成回调 | Function | -      | -      |
| cancel  | 点击取消回调 | Function | -      | -      |

<script lang="ts">
 import { Vue, Component } from "vue-property-decorator";

 @Component
 export default class MyComponent extends Vue {
     pickdata1=""
     text='未点击'
     model1 = false;
     model2 = false;
     model3 = false
     checkboxValue2 = false;
     checkboxValue3 = false;

    cancel(){
        console.log(123)
    }

    pickTimeConfirm(value){
        console.log(value)
        this.selecttime=value
    }

 }
</script>
<style lang="scss" scoped>
    .row {
        margin-top:10px;
        display:flex;
        button {
            margin-left: 8px;
            margin-bottom: 8px;
        }
    }

    .by-btn-group {
        margin-left: 8px;
        margin-top: 16px;
    }
</style>
