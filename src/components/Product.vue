<template>
  <div class="container">
    <div
      class="row justify-content-center"
      v-for="(rowIdx, key) in Math.ceil(products.length / 3)"
      :key="key"
    >
      <div
        v-for="(item, index) in products.slice(3 * (rowIdx - 1), 3 * rowIdx)"
        :key="index"
        class="card item-product mt-5"
      >
        <img :src="item.image" class="card-img-top mt-3" />
        <div class="card-body row">
          <div class="col-md-8 info">
            <p class="card-text text-danger">{{ item.price }} $</p>
            <h5 class="card-title">{{ item.name }}</h5>
          </div>
          <div class="col-md-4">
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCart(item)"
            >
              <i class="bi bi-cart3 cart">
                <span class="text-icon">Add</span>
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Sample Product 1",
          price: 20,
          image: "https://picsum.photos/200/150?random=1",
        },
        {
          id: 2,
          name: "Sample Product 2",
          price: 10,
          image: "https://picsum.photos/200/150?random=2",
        },
        {
          id: 3,
          name: "Sample Product 3",
          price: 40,
          image: "https://picsum.photos/200/150?random=3",
        },
        {
          id: 4,
          name: "Sample Product 4",
          price: 50,
          image: "https://picsum.photos/200/150?random=4",
        },
        {
          id: 5,
          name: "Sample Product 5",
          price: 60,
          image: "https://picsum.photos/200/150?random=5",
        },
        {
          id: 6,
          name: "Sample Product 6",
          price: 70,
          image: "https://picsum.photos/200/150?random=6",
        },
        {
          id: 7,
          name: "Sample Product 7",
          price: 80,
          image: "https://picsum.photos/200/150?random=7",
        },
        {
          id: 8,
          name: "Sample Product 8",
          price: 90,
          image: "https://picsum.photos/200/150?random=8",
        },
        {
          id: 9,
          name: "Sample Product 9",
          price: 30,
          image: "https://picsum.photos/200/150?random=9",
        },
      ],
      count: 0,
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addItemToCart", product);
    },
  },
};
</script>

<style scoped>
.item-product {
  width: 20rem;
  margin-left: 2rem;
}
.info {
  padding-left: 0;
}
.text-icon {
  font-style: normal;
}
</style>
