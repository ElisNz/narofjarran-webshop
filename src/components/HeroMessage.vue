<template>
  <div class="container mt-2 mb-2">
    <div class="row">
      <div class="col">
        <h3 class="display-5 fw-bold text-center text-danger">{{ title }}</h3>
        <div class="col-lg-8 mx-auto">
          <img
            class="img-fluid"
            src="../assets/freestocks-_3Q3tsJ01nc-unsplash.jpg"
            alt="deals"
          />
          <!-- Photo by <a href="https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">freestocks</a> on <a href="https://unsplash.com/s/photos/fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->
          <div class="d-grid">
            <button type="button" class="btn btn-danger btn-lg m-2">
              Get the Deals here!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
})
</script>

<style scoped>
#wrapper-hero img {
  margin: 0 auto;
  height: auto;
  overflow-x: hidden;
}

/* Center the text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

</style>
