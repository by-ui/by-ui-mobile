# Alert 全局提示

---

全局弹窗 alert 提示

### 基础用法

:::demo

```html
<by-s-button @click="handleClick">默认1.5s</by-s-button>

<script>
    export default {
        methods: {
            handleClick() {
                this.$alert({
                    message: "<div>DIV</div>",
                    onClose: () => {
                        console.log("onClose");
                    }
                });
            }
        }
    };
</script>
```

:::

### 自定义关闭时间

:::demo

```html
<by-s-button @click="handleClick1">自定义3s</by-s-button>

<script>
    export default {
        methods: {
            handleClick1() {
                this.$alert({
                    message:"<div>DIV</div>"
                    closeTime:3000
                });
            }
        }
    };
</script>
```

:::

### 手动关闭

:::demo

```html
<by-s-button @click="handleClick3">手动关闭</by-s-button>

<script>
    export default {
        methods: {
            handleClick3() {
                this.$alert({
                    message:"<div>DIV</div>",
                    closeTime:0
                });
                setTimeout(()=>{
                    this.$alert.clear()
                },1000)
            }
        }
    };
</script>
```

:::

## Message 参数

| 参数      | 说明                               | 类型     | 可选值 | 默认值 |
| --------- | ---------------------------------- | -------- | ------ | ------ |
| message   | 提示的内容                         | String   | -      | -      |
| onClose   | 提示关闭后执行                     | Function | -      | -      |
| closeTime | 关闭时间（毫秒数）0 表示不自动关闭 | Number   | -      | 1500   |

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { Message } from 'By-UI'

 @Component
 export default class MyComponent extends Vue {

    handleClick() {
        this.$alert({
            message: "<div>DIV</div>",
            onClose: () => {
                console.log("onClose");
            }
        });
    }

    handleClick1() {
        this.$alert({
            message:"<div>DIV</div>",
            closeTime:3000
        });
    }

    handleClick3() {
        this.$alert({
            message:"<div>DIV</div>",
            closeTime:0
        });
        setTimeout(()=>{
            this.$alert.clear()
        },1000)
    }
}
</script>
