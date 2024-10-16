
import { defineStore } from "pinia";
import { ref } from "vue";

interface TCart {
    id: Number;
    title: string;
    price: string;
    image: string;
    count: Number;
    rating: { rate: Number, count: number }
    quantity:number

}



export const useCartStore = defineStore('cart', () => {

    const cartList = ref<TCart[]>(JSON.parse(localStorage.getItem('Listofcart') || '[]'));



    //  addTocart


    const addToCart = async (id: Number) => {
        const exists = cartList.value.find((item) => item.id === id);
    
        if (exists) return;
    
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await res.json();
            const newProduct = { ...product, count: 1, quantity: 1 };
    
            cartList.value.push(newProduct);
    
            saveCart();
    
        } catch (err) {
            console.error(err);
        }
    };




    //  remove 

    const removeFromCart = (productId:number | undefined) => {
        const index = cartList.value.findIndex((item) => item.id === productId)
        if (index > -1) {
            cartList.value.splice(index, 1) // Remove the item at the found index
            saveCart()
        }
    }


    // save to localStorage

    const saveCart = () => {
        localStorage.setItem('Listofcart', JSON.stringify(cartList.value));
    }


    //  total price 

    const calculateTotalPrice = () =>
        Math.floor(cartList.value.reduce((total, item) => {
            return total + parseFloat(item.price);
        }, 0))

    const TotalPrice = () => {

        if (calculateTotalPrice()) {
            return Math.floor(calculateTotalPrice() - 0.10 + 13)
        } else {
            return 0
        }

    }


    const incrementQuantity = (productId: number) => {
        const product = cartList.value.find((item) => item.id === productId);
        if (product && product.quantity < product.rating.count) {
            product.quantity++;
            saveCart();
        }
    };

    const decrementQuantity = (productId: number) => {
        const product = cartList.value.find((item) => item.id === productId);
        if (product && product.quantity > 1) {
            product.quantity--;
            saveCart();
        }
    };






    return { addToCart, cartList, removeFromCart, calculateTotalPrice, TotalPrice, incrementQuantity, decrementQuantity }

})