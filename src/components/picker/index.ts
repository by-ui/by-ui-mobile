import Picker from './src/picker.vue'

Object.defineProperty(Picker, 'install', {
    writable: false,
    value: (Vue: any) => {
        Vue.component('by-picker', Picker);
    }
})

export default Picker



