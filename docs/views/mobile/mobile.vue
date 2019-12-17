<template>
    <div class="mobile">
        <div class="header">拖拽</div>
        <div class="router">
            <router-view></router-view>
        </div>
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
<style lang="scss">
    .mobile {
        .header {
            line-height: 30px;
            background-color: #eee;
            text-align: center;
        }
        .router {
            padding: 10px;
        }
        p {
            display: none !important;
        }
        table {
            display: none !important;
        }
        h2:nth-last-child(2) {
            display: none !important;
        }
    }
</style>
