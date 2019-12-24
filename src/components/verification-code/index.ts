import verificationCode from './src/verification-code.vue'

Object.defineProperty(verificationCode, 'install', {
    writable: false,
    value: (Vue: any) => {
        Vue.component('by-verification-code', verificationCode);
    }
})

export default verificationCode



