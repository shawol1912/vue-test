<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid text-center">
      <a class="col-md-3 navbar-brand logo" href="#">SWIFTPOD</a>
      <div
        class="row"
      >
        <RouterLink class="nav-link col link" to="/">HOME</RouterLink>
        <RouterLink class="nav-link col link" to="/product">PRODUCT</RouterLink>
        <RouterLink class="nav-link col link" to="/cart">CART</RouterLink>
      </div>
      <div class="col-md-3">
        <i class="bi bi-cart3 cart"></i>
        <span
          v-if="count > 0"
          class="badge rounded-pill badge-notification bg-danger position-absolute"
          >{{ count }}</span
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  computed: {
    count() {
      return this.$store.getters.getCount;
    },
  },
};
</script>

<style scoped>
.logo {
  font-size: 35px;
  font-weight: bold;
}
.cart {
  font-size: 30px;
}
.link {
  color: black;
}
.link:hover, .link:focus {
  color: #0d6efd;
}
</style>
