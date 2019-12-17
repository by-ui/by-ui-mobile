<template>
    <div class="components">
        <by-header></by-header>
        <div class="by-container row">
            <by-slider-bar :tree-data="navs"></by-slider-bar>
            <div class="by-markdown col-sm-24 col-md-18 col-lg-20">
                <transition name="inner-fade"
                            mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
            <!-- 展示 -->
            <VueDragResize :isActive="true"
                           :isResizable="false">
                <iframe class="fix_show"
                        :src="'#/mobile/'+src"
                        frameborder="0"></iframe>
            </VueDragResize>
        </div>
        <by-footer></by-footer>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Watch } from "vue-property-decorator";
    import navsConfig from '@docs/vue-router/nav.config.yml'
    import VueDragResize from "@docs/utils/vue-drag-resize/vue-drag-resize.vue";

    @Component({ components: { VueDragResize } })
    export default class Components extends Vue {
        @Watch('$route')
        router(from: any) {
            this.src = String(from.name)
        }

        private src: string = ''
        navs = navsConfig.components;
        created() {
            this.src = String(this.$route.name)
        }
    }
</script>


<style scoped>
    .fix_show {
        /* position: fixed; */
        right: 80px;
        top: 100px;
        width: 320px;
        height: 600px;
        background-color: #fff;
        border: 1px solid #eee;
    }
    .vdr.active:before {
        /* outline: none; */
    }
</style>