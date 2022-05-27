<script setup>
import HomeView from "./views/HomeView.vue";
import CartView from "./views/CartView.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <HomeView v-if="this.$route.name === 'home'" />
  <CartView v-if="this.$route.name === 'cart'" />
</template>

<style></style>
