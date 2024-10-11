
import { ref, onMounted } from 'vue';
import router from '@/router';
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
}

export function useFetch(category: string) {
    const products = ref<Product[]>([]);
    const productsToShow = ref<Product[]>([]);
    const hasMore = ref(true);
    const error = ref<string | null>(null);


    // Pagination control

    const limit = 4;
    let currentPage = 1;

    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const result: Product[] = await response.json();
            products.value = result;
            loadMore();
        } catch (err: any) {
            error.value = err.message || 'An error occurred';
        }
    };

    const getStarCount = (rating: number): number[] => {
        if (rating > 3) {
            return [1, 2, 3];
        } else {
            return [1, 2, 3, 4];
        }
    };

    onMounted(() => {
        fetchProducts();
    });

    const loadMore = () => {
        const start = (currentPage - 1) * limit;
        const end = start + limit;
        productsToShow.value.push(...products.value.slice(start, end));
        currentPage++;

        if (productsToShow.value.length >= products.value.length) {
            hasMore.value = false;
        }

    };

    return { error, productsToShow, products, fetchProducts, getStarCount, loadMore, hasMore }

}