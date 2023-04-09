<template>
  <div>
    <!-- search-bar -->
    <header class="py-3 mb-1 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <div class="row">
          <div class="col input-group">
            <input
              v-model="searchQuery"
              type="text"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
            <span class="input-group-text btn btn-success">Search</span>
          </div>
        </div>
      </div>
    </header>

    <!-- product list -->
    <div class="container-lg">
      <div class="row">
        <p>Ordered by {{ order }}</p>
        <div
          class="d-flex justify-content-center col-sm-6 col-lg-4 col-xl-3 g-2 mb-3"
          v-for="product in searchedProducts"
          :key="product.id"
        >
          <div class="card" style="width: 18rem">
            <RouterLink :to="`/product/${product.id}`">
              <img
                :src="product.image"
                class="card-img-top"
                :alt="product.title"
              />
            </RouterLink>
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">Review: {{ product.rating.rate }}</p>
              <div class="row align-items-center">
                <div class="col-3">
                  <RouterLink :to="`/product/${product.id}`">
                    <button class="btn btn-primary">
                      <i class="fa-solid fa-circle-info fa-xl"></i>
                    </button>
                  </RouterLink>
                </div>
                <div class="col-5">
                  <button
                    class="btn btn-success"
                    @click="cartStore.addItems(product)"
                  >
                    Buy Now
                  </button>
                </div>
                <div class="col-4">
                  <h5 class="card-text">${{ product.price }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import Product from '../types/Product'
import OrderTermProducts from '../types/OrderTermProducts'
import { useProductStore } from '../stores/ProductStore'
import { useCartStore } from '../stores/CartStore'

export default defineComponent({
  emits: ['addToCart'],
  props: {
    order: {
      type: String as PropType<OrderTermProducts>,
      required: true,
    },
  },
  setup(props) {
    const count = ref(0)
    const productStore = useProductStore()
    const cartStore = useCartStore()

    // search-bar filtering
    const searchQuery = ref('')
    const searchedProducts = computed(() => {
      return orderedProducts.value.filter((product) => {
        return (
          product.title
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        )
      })
    })

    // sorting function to sort according to id, title and price
    const orderedProducts = computed(() => {
      return [...productStore.filter].sort((a: Product, b: Product) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    })

    return {
      productStore,
      cartStore,
      count,
      orderedProducts,
      searchedProducts,
      searchQuery,
    }
  },
})
</script>

<style scoped></style>
