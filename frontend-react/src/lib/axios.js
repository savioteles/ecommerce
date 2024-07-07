import axios from 'axios';

class ProductsApi {

    constructor() {
        this.axios = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL
        });
    }

    async getProducts() {
        try {
            const response = await this.axios.get('/listarProdutos');
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getProductById(id) {
        try {
            const response = await this.axios.get('/listarProdutoById/' + id);
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}

export const productsApi = new ProductsApi();
