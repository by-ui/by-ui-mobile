# verification-code 验证码输入框

---

验证码输入框组件

### 基础用法

最简单的用法。

:::demo

```html
<div>获取值：{{value1}}</div>
<by-verification-code v-model="value1"></by-verification-code>
```

:::

### 自动获取光标

自动获取光标

:::demo

```html
<div>获取值：{{value2}}</div>
<by-verification-code autoblur v-model="value2"></by-verification-code>
```

:::

:::

### 自定义多个输入框

自定义多个输入框

:::demo

```html
<div>获取值：{{value3}}</div>
<by-verification-code :max="5" v-model="value3"></by-verification-code>
```

:::

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class ByRateMd extends Vue {
        value1 = ''
        value2 = ''
        value3 = ''
    }
</script>

## Rate 参数

| 参数     | 说明             | 类型    | 可选值 | 默认值  |
| -------- | ---------------- | ------- | ------ | ------- |
| autoblur | 是否自动获取光标 | Boolean | -      | `false` |
| max      | 需要几个输入框   | Number  | -      | 4       |
