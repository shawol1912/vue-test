<template>
  <div class="row">
    <div v-for="(item, index) in cart" :key="index" class="card mb-3 mt-3">
      <div class="row g-0">
        <div class="col-md-2 mt-3 mb-3">
          <img :src="item.image" class="img-fluid rounded-start" />
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-danger mt-3">{{ item.price }} $</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-body quantity">
            <h5 class="card-title">Quantity</h5>
            <input
              type="number"
              min="1"
              step="1"
              class="form-control"
              :value="item.quantity"
              @input="changeQuantity(parseInt($event.target.value), item)"
            />
          </div>
        </div>
        <div class="col-md-2">
          <div class="card-body row">
            <div class="col-md-8 text-center">
              <h5 class="card-title">Sub Total</h5>
              <p class="card-text text-danger mt-3">
                {{ item.price * item.quantity }} $
              </p>
            </div>
            <div class="col-md-4 btn-trash float-end mt-auto">
              <button
                type="button"
                class="btn btn-outline-primary"
                @click="removeProduct(item)"
              >
                <i class="bi bi-trash trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  methods: {
    changeQuantity(quantity, product) {
      if (Number.isInteger(quantity)) {
        this.$store.commit("changeQuantity", { quantity, product });
      }
    },
    removeProduct(product) {
      this.$store.commit("removeProduct", product);
    },
  },
};
</script>

<style scoped>
.quantity {
  margin-left: 50%;
}
.btn-trash {
  width: auto;
  height: fit-content;
}
.trash {
  font-size: 15px;
}
</style>
