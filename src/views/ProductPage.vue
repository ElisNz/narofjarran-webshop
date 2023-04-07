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

  <!-- Related items section-->
  <section class="py-5 bg-light">
    <div class="container px-4 px-lg-5 mt-5">
      <h2 class="fw-bolder mb-4">Related products</h2>
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <div
          class="col mb-5"
          v-for="product in similairProducts"
          :key="product.id"
        >
          <div class="card h-100">
            <!-- Product image-->
            <img
              class="card-img-top"
              :src="product?.image"
              :alt="product?.title"
            />
            <!-- Product details-->
            <div class="card-body p-4">
              <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">{{ product?.title }}</h5>
                <!-- Product reviews-->
                <div
                  class="d-flex justify-content-center small text-warning mb-2"
                >
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                </div>
                <!-- Product price-->
                ${{ product?.price }}
              </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <button
                  class="btn btn-outline-dark mt-auto"
                  @click="cartStore.addItems(product as Product)"
                  href="#"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

    const similairProducts = productStore.filter.filter(
      (products) => products.category === product?.category
    )

    return { useProductStore, cartStore, product, similairProducts }
  },
})
</script>

<style>
.product-image {
  width: 300px;
  height: auto;
}
</style>
