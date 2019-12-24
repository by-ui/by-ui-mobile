# Confim 全局提示

---

全局弹窗 Confim 提示

### 基础用法

:::demo

```html
<by-s-button @click="handleClick">提示</by-s-button>

<script>
    export default {
        methods: {
            handleClick() {
                this.$confim({
                    title: "<div>DIV</div>",
                    message: "<div>DIV</div>",
                    onEnter: () => {
                        console.log("onEnter");
                    },
                    onCancel: () => {
                        console.log("onCancel");
                    }
                });
            }
        }
    };
</script>
```

:::

### 单按钮显示

单按钮模式下取消回调将无法执行
:::demo

```html
<by-s-button @click="handleClick1">提示</by-s-button>

<script>
    export default {
        methods: {
            handleClick1() {
                this.$confim({
                    noCancel: true,
                    title: "<div>DIV</div>",
                    message: "<div>DIV</div>",
                    enterText: "知道了",
                    onEnter: () => {
                        console.log("onEnter");
                    },
                    onCancel: () => {
                        console.log("onCancel");
                    }
                });
            }
        }
    };
</script>
```

:::

## Message 参数

| 参数       | 说明               | 类型     | 可选值 | 默认值 |
| ---------- | ------------------ | -------- | ------ | ------ |
| title      | 提示的标题         | String   | -      | -      |
| message    | 提示的内容         | Html     | -      | -      |
| noCancel   | 取消显示`取消`按钮 | Boolen   | -      | false  |
| cancelText | 取消按钮的文字     | String   | -      | 取消   |
| enterText  | 确定按钮的文字     | String   | -      | 确定   |
| onEnter    | 确定后触发的方法   | Function | -      | -      |
| onCancel   | 确定后触发的方法   | Function | -      | -      |

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { Message } from 'By-UI'

 @Component
 export default class MyComponent extends Vue {

      handleClick (type) {
        this.$confim({
                title: "<div>DIV</div>",
                message: "<div>DIV</div>",
                onEnter:()=>{console.log('onEnter')},
                onCancel:()=>{console.log('onCancel')}
            })
      }

      handleClick1() {
        this.$confim({
            noCancel: true,
            title: "<div>DIV</div>",
            message:"<div>DIV</div>",
            enterText:'知道了',
            onEnter: () => {
                console.log("onEnter");
            },
            onCancel: () => {
                console.log("onCancel");
            }
        });
      }
    }
</script>
