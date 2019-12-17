<template>
    <div class="by-component__container">

        <collapse-transition v-if="mobile"
                             class="by-component__code_page">
            <div class="by-component__code">
                <slot name="source-code"></slot>
                <span class="btn-copy"
                      v-clipboard="$slots['source-code'][0] && $slots['source-code'][0].elm && $slots['source-code'][0].elm.innerText"
                      @success="handleCopySuccess"><i class="icon icon-clipboard"></i></span>
            </div>
        </collapse-transition>
        <div class="by-component__show">
            <slot name="demo"></slot>
        </div>
        <div></div>
        <!-- <iframe src="#/components/picker" frameborder="0"></iframe> -->
        <!-- <a class="by-component__code-toggle"
           @click="isShow = !isShow">{{ isShow ? '隐藏代码' : '显示代码' }}</a> -->
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    import CollapseTransition from '@docs/utils/collapse-transition'

    @Component({
        components: {
            CollapseTransition
        }
    })
    export default class DemoBox extends Vue {
        private mobile = true
        created() {
            console.log(this.$route)
        }
        isShow = false;

        handleCopySuccess(evt) {
            this.$message.success(`Code copied.`)
        }
    }
</script>

<style lang="scss" scoped>
    .btn-copy {
        display: none;
        position: absolute;
        top: 16px;
        right: 16px;
        transition: all 0.3s;

        &:hover {
            color: #6190e8;
            transform: scale(1.2);
            cursor: pointer;
        }
    }
    .by-component__code:hover {
        .btn-copy {
            display: block;
            animation: fadeIn 0.3s both;
        }
    }
    .by-component__container {
        display: flex;
    }
    .by-component__code {
        flex: 1;
    }
    .by-component__show {
        margin-left: 10px;
        padding: 20px;
        width: 320px;
        border: 1px solid #eee;
    }
</style>
