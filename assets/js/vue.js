// data
const products = [
    { id: 1, description: "iPhone 13 Pro Max", price: 1259, img: 'assets/img/iPhone-13-Pro-Max.png'},
    { id: 2, description: 'iPhone 13 Pro', price: 1159, img: 'assets/img/iPhone-13-Pro.png'},
    { id: 3, description: 'iPhone 13', price: 959, img: 'assets/img/iPhone-13.png'},
    { id: 4, description: 'iPhone 13 Mini', price: 859, img: 'assets/img/iPhone-13-Mini.png'},
    { id: 5, description: 'iPhone 12', price: 809, img: 'assets/img/iPhone-12.png'},
    { id: 6, description: 'iPhone 12 Mini', price: 709, img: 'assets/img/iPhone-12-Mini.png'}
  ];

const Home = {
    template: '#home',
    name: 'Home',
    data: () => {
        return{
            products,
        }
    }
}

const UserSettings = {
    template: '<h1>UserSettings</h1>',
    name: 'UserSettings'
}

const WishList = {
    template: '<h1>WishList</h1>',
    name: 'WishList'
}

const ShoppingCart = {
    template: '<h1>ShoppingCart</h1>',
    name: 'ShoppingCart'
}

//router
const router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/user-settings', component: UserSettings, name: 'UserSettings' },
        { path: '/wish-list', component: WishList, name: 'WishList' },
        { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' }
    ]
})

const vue = new Vue({
    router
}).$mount('#app');