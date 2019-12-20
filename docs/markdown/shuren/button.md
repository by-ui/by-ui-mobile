# Button 按钮

---

### 基础按钮使用

熟仁直聘主色调按钮

:::demo

```html
<div>计数器：{{test}}</div>
<div class="row">
    <by-s-button @click="test++">默认按钮</by-s-button>
</div>
```

:::

### 不可用状态按钮

添加属性 `disabled` 禁用按钮

:::demo

```html
<div class="row">
    <by-s-button disabled @click="test++">禁用按钮</by-s-button>
</div>
```

:::

### 关闭防抖功能

添加属性 `debounce` 关闭防抖功能

:::demo

```html
<div class="row">
    <div>计数器：{{test2}}</div>
    <div>
        <by-s-button @click="test2++">默认防抖</by-s-button>
        <by-s-button undebounce @click="test2++">关闭防抖</by-s-button>
    </div>
</div>
```

:::

:::

### 自定义样式

:::demo

```html
<div class="row">
    <div>
        <by-s-button :style="{width:'100px','border-top-left-radius':'0px'}"
            >自定义样式</by-s-button
        >
    </div>
</div>
```

:::

## Button 参数

| 参数       | 说明         | 类型    | 可选值 | 默认值 |
| ---------- | ------------ | ------- | ------ | ------ |
| disabled   | 是否禁用     | Boolean | -      | false  |
| undebounce | 是否使用防抖 | Boolean | -      | false  |
| style      | 自定义样式   | style   | -      | -      |

<script lang='ts'>
    import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
    @Component
    export default class MyWallet extends Vue {
       test = 0
       test2 = 0
    }
</script>

<style lang="scss" scoped>
    .row {
        display:flex;
        button{
            margin-top:8px;
            margin-left:8px;
        }

        & + .row {
            margin-top: 20px;
        }
        .by-btn-group .by-btn {
            margin-left: 0;
        }
    }

    .by-btn-group {
        margin-left: 8px;
        margin-top: 16px;
    }
</style>
