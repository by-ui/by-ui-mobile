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

### 自定义元素

:::demo

```html
<div class="row">
    <by-scroll-bar :parent="par" :element="ele"></by-scroll-bar>

    <div class="over" ref="parent">
        <div class="max" ref="element"></div>
    </div>
</div>

<div class="max"></div>
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
       private ele:any={}
       private par:any={}

       mounted(){
           this.ele = this.$refs.element
           this.par = this.$refs.parent
           console.log(this.$refs)
       }
    }
</script>

<style lang="scss" scoped>
    .row {
        display:flex;

    }

    .over{
        width:100%;
        height:200px;
        overflow:auto;
        background-color:#eee;
    }
    .max {

        height:250vh;
    }
</style>
