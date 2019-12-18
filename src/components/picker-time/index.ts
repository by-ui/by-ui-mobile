import Picker from '../picker/src/picker-time.vue'

Object.defineProperty(Picker, 'install', {
    writable: false,
    value: (Vue: any) => {
        Vue.component('by-picker-time', Picker);
    }
})

export default Picker



