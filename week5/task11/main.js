const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            // indexOf() returns the index of the first element in the array that satisfies the provided testing function.
            const index = this.cart.indexOf(id);
            if (index > -1) {
                // if the index is greater than -1, then the element exists in the array.
                this.cart.splice(index, 1);
                // splice() removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
            }
        }
    }
})
