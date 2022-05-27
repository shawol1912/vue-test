<script setup>
import Product from "../components/Product.vue";
</script>

<template>
  <notifications class="notification" />
  <div class="title d-flex justify-content-center mt-25">Feature Product</div>
  <Product />
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.notification {
  top: 70px !important;
}

.title {
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 35px;
}
</style>
