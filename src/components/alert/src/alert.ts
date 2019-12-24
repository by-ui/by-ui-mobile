import Vue from 'vue';
import AlertVue from './alert.vue';
const AlertConstructor = Vue.extend(AlertVue);

let instance: any
const Confim = (options: any) => {
    if (Vue.prototype.$isServer) return;
    options = options || {};

    if (typeof options === 'string') {
        options = {
            alert: options
        };
    }

    instance = new AlertConstructor({
        data: options
    });

    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);

}
Confim.clear = () => {
    instance.clickClose()
}
export default Confim;
