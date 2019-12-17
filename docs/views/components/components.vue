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
            <iframe class="fix_show"
                    src="#/mobile/picker"
                    frameborder="0"></iframe>
        </div>
        <by-footer></by-footer>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import navsConfig from '@docs/vue-router/nav.config.yml'

    @Component
    export default class Components extends Vue {

        navs = navsConfig.components;
    }
</script>


<style scoped>
    .fix_show {
        position: fixed;
        right: 80px;
        top: 100px;
        width: 320px;
        padding: 20px;
        background-color: #fff;
        border:1px solid #eee;
    }
</style>