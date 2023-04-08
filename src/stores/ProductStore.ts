import { defineStore } from 'pinia'
import axios from 'axios'
import Product from '../types/Product'

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products: [] as Product[],
      filteredProducts: [] as Product[],
    }
  },
  actions: {
    async fill() {
      this.products = await axios
        .get('https://fakestoreapi.com/products')
        .then((response) => (this.products = response.data))
        .catch((error) => console.log(error))
    },
  },
  getters: {
    filter({ products }) {
      return products.filter((product: Product) => {
        return (
          product.category === "men's clothing" ||
          product.category === "women's clothing" ||
          product.category === 'jewelery'
        )
      })
    },
  },
})
