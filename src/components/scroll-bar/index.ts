import scrollBar from './src/scroll-bar.vue'

Object.defineProperty(scrollBar, 'install', {
    writable: false,
    value: (Vue: any) => {
        Vue.component('by-scroll-bar', scrollBar);
    }
})

export default scrollBar



