import Vue from 'vue';
import ConfimVue from './confim.vue';
const ConfimConstructor = Vue.extend(ConfimVue);

const confimType = ['info', 'success', 'warning', 'error', 'loading'];
const instances: any = [];
let seed = 1;
let zindexSeed = 1010;

const Confim = (options: any) => {
    if (Vue.prototype.$isServer) return;
    options = options || {};

    if (typeof options === 'string') {
        options = {
            confim: options
        };
    }

    const instance = new ConfimConstructor({
        data: options
    });

    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
}

export default Confim;
