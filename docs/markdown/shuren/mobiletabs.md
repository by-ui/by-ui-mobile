# MobileTabs 移动标签页

---

### 默认使用

:::demo

```html
<div>选择值：{{tabindex1}}</div>

<div class="row">
    <by-mobile-tabs :list="tablist1" v-model="tabindex1"></by-mobile-tabs>
</div>

<script>
    tabindex1 = 0;
    tablist1 = [
        { key: "标签1" },
        { key: "标签2" },
        { key: "标签3" },
        { key: "标签4" }
    ];
</script>
```

:::

### 设置初始状态

:::demo

```html
<div>选择值：{{tabindex2}}</div>

<div class="row">
    <by-mobile-tabs :list="tablist1" v-model="tabindex2"></by-mobile-tabs>
</div>

<script>
    tabindex2 = 2;
    tablist2 = [
        { key: "标签1" },
        { key: "标签2" },
        { key: "标签3" },
        { key: "标签4" }
    ];
</script>
```

:::

### 自定义检索 KEY

:::demo

```html
<div>选择值：{{tabindex3}}</div>

<div class="row">
    <by-mobile-tabs
        :list="tablist2"
        :use="'aaa'"
        v-model="tabindex3"
    ></by-mobile-tabs>
</div>

<script>
    tabindex3 = 0;
    tablist2 = [
        { aaa: "标签1" },
        { aaa: "标签2" },
        { aaa: "标签3" },
        { aaa: "标签4" }
    ];
</script>
```

:::

## Slot 参数

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| list | 必传     | String | -      | -      |
| use  | 鉴别下标 | String | -      | key    |

<script lang="ts">
 import { Vue, Component } from "vue-property-decorator";

 @Component
 export default class MyComponent extends Vue {
    tabindex1 = 0;
    tabindex2 = 2
    tablist1 = [
        { key: '标签1' },
        { key: '标签2' },
        { key: '标签3' },
        { key: '标签4' },
        { key: '标签5' },
        { key: '标签6' },
        { key: '标签7' },
        { key: '标签8' },
        { key: '标签9' },
        { key: '标签10' },
        { key: '标签11' },
        { key: '标签12' },
    ];

     tabindex3=0
     private tablist2 = [ 
        { aaa: '标签1' },
        { aaa: '标签2' },
        { aaa: '标签3' },
        { aaa: '标签4' }]
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
