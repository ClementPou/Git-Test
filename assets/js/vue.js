const products = [
    { id: 1, description: "iPhone 13 Pro Max", price: 1259, img: 'assets/img/iPhone-13-Pro-Max.png'},
    { id: 2, description: 'iPhone 13 Pro', price: 1159, img: 'assets/img/iPhone-13-Pro.png'},
    { id: 3, description: 'iPhone 13', price: 959, img: 'assets/img/iPhone-13.png'},
    { id: 4, description: 'iPhone 13 Mini', price: 859, img: 'assets/img/iPhone-13-Mini.png'},
    { id: 5, description: 'iPhone 12', price: 809, img: 'assets/img/iPhone-12.png'},
    { id: 6, description: 'iPhone 12 Mini', price: 709, img: 'assets/img/iPhone-12-Mini.png'},
    { id: 7, description: 'One plus 9 Pro', price: 919, img: 'assets/img/One-Plus-9-Pro.png'},
    { id: 8, description: 'One plus 9', price: 719, img: 'assets/img/One-Plus-9.png'},
    { id: 9, description: 'Samsung Galaxy S21 Ultra', price: 999, img: 'assets/img/Samsung-Galaxy-S21-Ultra.jpg'},
    { id: 10, description: 'Samsung Galaxy Z Fold 3', price: 1699, img: 'assets/img/Samsung-Galaxy-Z-Fold-3.png'},
  ];

const Home = {
    template: '#home',
    name: 'Home',
    data: () => {
        return{
            products,
            searchKey: '',
            liked: [],
            cart: [],
        }
    },
    computed: {
        filteredList() {
            return this.products.filter((product) => {
                return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
            })
        },
        getLikeCookie() {
            let cookieValue = JSON.parse($cookies.get('like'));
            cookieValue == null ? this.liked = [] : this.liked = cookieValue
        },
        cartTotalAmount() {
            let total = 0;
            for (let item in this.cart) {
                total = total + (this.cart[item].quantity * this.cart[item].price)
            }
            return total;
        },
        itemTotalAmount() {
            let itemTotal = 0;
            for (let item in this.cart) {
                itemTotal = itemTotal + (this.cart[item].quantity)
            }
            return itemTotal;
        }
    },
    methods: {
        setLikeCookie() {
            document.addEventListener('input', () => {
                setTimeout(() => {
                    $cookies.set('like', JSON.stringify(this.liked));
                }, 300);
            })
        },
        addToCart(product) {
            // check if already in array
            for (let i = 0; i < this.cart.length; i++){
                if (this.cart[i].id === product.id) {
                    return this.cart[i].quantity++
                }
            }
            this.cart.push({
                id: product.id,
                img: product.img,
                description: product.description,
                price: product.price,
                quantity: 1,
            })
        },
        cartPlusOne(product) {
            product.quantity = product.quantity + 1;
        },
        cartRemoveItem(id) {
            this.$delete(this.cart, id);
        },
        cartMinusOne(product, id) {
            if (product.quantity == 1) {
                this.cartRemoveItem(id);
            }
            else {
                product.quantity = product.quantity - 1;
            }
        },
    },
    mounted: () => {
        this.getLikeCookie;
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