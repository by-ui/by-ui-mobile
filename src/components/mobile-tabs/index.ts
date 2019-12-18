import Picker from '../mobile-tabs/src/mobile-tabs.vue'

Object.defineProperty(Picker, 'install', {
    writable: false,
    value: (Vue: any) => {
        Vue.component('by-mobile-tabs', Picker);
    }
})

export default Picker



