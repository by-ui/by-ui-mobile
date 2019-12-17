<template>
    <div class="components">
        <router-view></router-view>
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
