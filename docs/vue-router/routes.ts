import { RouteConfig } from 'vue-router';
import NavConfig from './nav.config.yml';

class Route {
    name: string;
    component: any;
    path: string;
    children?: Route[] = new Array();
    redirect?: any;

    constructor(name: string, component: any, path: string, children?: Route[], redirect?: any) {
        this.name = name;
        this.component = component;
        this.path = path;
        children && (this.children = children);
        redirect && (this.redirect = redirect);
    }
}

const routes: any = [];
let currentIndex: number;

Object.keys(NavConfig).forEach((parent: string, index: number) => {
    //------------------------------ 制定父级路由
    const _parentName = parent.toLowerCase()
    //------------------------------ 使用哪个父类组件
    const _compName = _parentName.includes('c_') ? 'components' : 'guide'

    //------------------------------ 父组件名称
    const _pname = parent.toLowerCase().split('_')[1];
    currentIndex = index;
    routes.push(
        new Route(
            _pname,
            () => import(/* webpackChunkName: "modules/[request]" */ `../views/${_compName}/${_compName}.vue`),
            `/${_pname}`,
            undefined,
            // 重定向到第一个子路由
            { name: _pname + '_' + NavConfig[parent][0].items[0].name.toLowerCase() }
        )
    );


    // 遍历子路由
    NavConfig[parent].forEach((item: any) => {
        const _itemName = item.name.toLowerCase();
        // 有组的情况
        if (item.groups) {
            item.groups.forEach(group => {
                group.items.forEach(item => {
                    const _name = item.name.toLowerCase();
                    routes[currentIndex].children.push(
                        new Route(
                            _pname + '_' + _name,
                            () => import(/* webpackChunkName: "modules/[request]" */ `../markdown/${_pname}/${_name}.md`),
                            `${_name}/`
                        )
                    )
                })
            })
        } else {
            item.items.forEach(group => {
                const _name = group.name.toLowerCase();
                routes[currentIndex].children.push(
                    new Route(
                        _pname + '_' + _name,
                        () => import(/* webpackChunkName: "modules/[request]" */ `../markdown/${_pname}/${_name}.md`),
                        `${_name}/`
                    )
                )
            })
        }
    })
})


routes.push(
    new Route(
        'mobile',
        () => import(/* webpackChunkName: "modules/[request]" */ `../views/mobile/mobile.vue`),
        `/mobile`,
        undefined,
    )
);

routes.map((pre: any) => {
    pre.children.map((v: any) => {
        if (pre.name != 'mobile') {
            routes[routes.length - 1].children.push({
                ...v,
                name: pre.name + v.name
            })
        }
    })
})

routes.push({
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "modules/home" */ `../views/index/index.vue`)
})
console.log(routes)

export default routes
