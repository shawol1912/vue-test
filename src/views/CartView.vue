<script setup>
import ProductCart from "../components/ProductCart.vue";
</script>

<template>
  <div class="container" v-if="cart.length > 0">
    <div class="row mt-3 align-items-center">
      <span class="col-md-6 title">Cart</span>
      <div class="col-md-6">
        <button type="button" class="btn btn-primary btn-checkout float-end">
          Check out
        </button>
      </div>
    </div>
    <ProductCart :total="total" :cart="cart" />
    <div class="mt-3 total">
      <div>Total {{ total }} $</div>
      <button type="button" class="btn btn-primary mt-3">Check out</button>
    </div>
  </div>
  <div class="container d-flex justify-content-center mt-5" v-else>No Data</div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
    };
  },
  computed: {
    cart() {
      let cart = this.$store.getters.getCart;
      if (cart.length > 0) {
        this.total = 0;
        cart.map((item) => (this.total += item.price * item.quantity));
      }
      return cart;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 35px;
}
.btn-checkout {
  width: 30%;
}
.total {
  display: grid;
  float: right;
  width: 15%;
}
.total div {
  font-size: 30px;
  font-weight: bold;
}
</style>
