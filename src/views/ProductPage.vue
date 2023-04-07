<template>
  <!-- Product section-->
  <section class="py-5">
    <p class="text-center">home / product / {{ $route.params.id }}</p>
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img
            class="card-img-top mb-5 mb-md-0"
            :src="product?.image"
            :alt="product?.title"
          />
        </div>
        <div class="col-md-6">
          <h1 class="display-5 fw-bolder">{{ product?.title }}</h1>
          <div class="small mb-1">Product ID: {{ product?.id }}</div>
          <div class="fs-5 mb-5">
            <span>${{ product?.price }}</span>
          </div>
          <p class="lead">
            {{ product?.description }}
          </p>
          <div class="d-flex">
            <button
              class="btn btn-outline-dark flex-shrink-0"
              @click="cartStore.addItems(product as Product)"
              type="button"
            >
              <i class="bi-cart-fill me-1"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <h4>Other products in category...</h4>
  <!-- show other products in same category -->
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/ProductStore'
import { useCartStore } from '../stores/CartStore'
import Product from '@/types/Product'

export default defineComponent({
  emits: ['addToCart'],
  setup() {
    const route = useRoute()
    const productStore = useProductStore()
    const cartStore = useCartStore()

    const product = productStore.filteredProducts.find(
      (product) => product.id === parseInt(route.params.id as string)
    )

    return { useProductStore, cartStore, product }
  },
})
</script>

<style>
.product-image {
  width: 300px;
  height: auto;
}
</style>
