import Button from './src/button.vue'

Object.defineProperty(Button, 'install', {
    writable: false,
    value: (Vue: any) => {
        Vue.component('by-s-button', Button);
    }
})

export default Button
