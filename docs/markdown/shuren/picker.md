# picker 弹窗

---

基于v-model双向绑定执行是否打开picker

### 默认状态

:::demo

```html
<div>打开状态：{{checkboxValue}}</div>

<div class="row">
    <by-picker v-model="checkboxValue"></by-picker>
    <by-button type="primary" @click="checkboxValue=true">打开picker</by-button>
</div>
```

:::

### 带 slot 状态

:::demo

```html
<div>打开状态：{{checkboxValue1}}</div>

<div class="row">
    <by-picker v-model="checkboxValue1">picker-slot</by-picker>
    <by-button type="primary" @click="checkboxValue1=true"
        >打开picker</by-button
    >
</div>
```

:::

### 带 title 状态

:::demo

```html
<div>打开状态：{{checkboxValue2}}</div>

<div class="row">
    <by-picker v-model="checkboxValue2" :title="'title'"></by-picker>
    <by-button type="primary" @click="checkboxValue2=true"
        >打开picker</by-button
    >
</div>
```

:::

### 回调方法

:::demo

```html
<div>打开状态：{{checkboxValue1}}</div>
<div>点击状态：{{text}}</div>

<div class="row">
    <by-picker
        v-model="checkboxValue1"
        @confirm="()=>{text='点击了完成'}"
        @cancel="()=>{text='点击了取消'}"
        >picker-slot</by-picker
    >
    <by-button type="primary" @click="checkboxValue1=true"
        >打开picker</by-button
    >
</div>
```

:::

## Slot 参数

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | String | -      | -      |

## 方法

| 参数    | 说明         | 类型     | 可选值 | 默认值 |
| ------- | ------------ | -------- | ------ | ------ |
| confirm | 点击完成回调 | Function | -      | -      |
| cancel  | 点击取消回调 | Function | -      | -      |

<script lang="ts">
 import { Vue, Component } from "vue-property-decorator";

 @Component
 export default class MyComponent extends Vue {
     text='未点击'
     checkboxValue = false;
     checkboxValue1 = false;
     checkboxValue2 = false;
     checkboxValue3 = false;

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
