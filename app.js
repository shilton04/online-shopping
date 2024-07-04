
Vue.component('product', {
    props: ['product'],
    template: `
        <div class="product">
            <img :src="product.image" :alt="product.name">
            <h2>{{ product.name }}</h2>
            <p>\₹{{ product.price.toFixed(2) }}</p>
            <button @click="$emit('add-to-cart', product.name)">Add to Cart</button>
        </div>
    `
});

new Vue({
    el: '#app',
    data: {
        searchTerm: '',
        cartCount: 0,
        products: [
            { id: 1, name: 'Laptop', price: 29999, image: 'Images/product img/1 img.jpeg' },
            { id: 2, name: 'Mobile', price: 8999, image: 'Images/product img/2.jpeg' },
            { id: 3, name: 'Tv', price: 19099, image: 'Images/product img/3.jpeg' },
            { id: 4, name: 'JBL Speaker', price: 9999, image: 'Images/product img/4.jpeg' },
            { id: 5, name: 'Stand Fan', price: 1599, image: 'Images/product img/5.jpeg' },
            { id: 6, name: 'AC', price: 34999, image: 'Images/product img/6.jpeg' },
            { id: 7, name: 'DSLR', price: 57999, image: 'Images/product img/7.jpeg' },
            { id: 8, name: 'Ear Buds', price: 1099, image: 'Images/product img/8.jpeg' },
            { id: 9, name: 'Smart Watch', price: 2599, image: 'Images/product img/9.jpeg' },
            { id: 10, name: 'Power Bank', price: 899, image: 'Images/product img/10.jpeg' },
        ]
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product => 
                product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }
    },
    methods: {
        addToCart(productName) {
            alert(`${productName} added to cart!`);
            this.cartCount++;
        }
    }
});
