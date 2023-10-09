const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)

export const routes = [
    {
        name: 'home',
        path: '/web',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/web/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/web/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/web/category/add',
        component: CategoryCreate
    }
]