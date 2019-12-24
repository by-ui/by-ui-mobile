# scroll-bar 根据滚动提示

---

### 基础使用

:::demo

```html
<div class="row">
    <by-scroll-bar></by-scroll-bar>
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
        height:120vh;
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
