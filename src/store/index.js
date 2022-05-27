import { createStore } from "vuex";
import { notify } from "@kyvg/vue3-notification";

export default createStore({
  state() {
    return {
      cart: [],
      count: 0,
    };
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getCart(state) {
      return state.cart;
    },
  },
  mutations: {
    addItemToCart(state, product) {
      let checkProductExists = state.cart.find((item) => item.id == product.id);
      if (checkProductExists) {
        product.quantity = checkProductExists.quantity + 1;
        Object.assign(checkProductExists, product);
      } else {
        product.quantity = 1;
        state.cart.push(product);
      }

      state.count++;
      notify({
        type: "success",
        title: "Thêm vào giỏ hàng thành công",
      });
    },
    changeQuantity(state, { quantity, product }) {
      let checkProductExists = state.cart.find((item) => item.id == product.id);
      if (checkProductExists) {
        product.quantity = quantity;
        state.count = 0;
        state.cart.map((item) => (state.count += item.quantity));
      }
    },
    removeProduct(state, product) {
      state.cart.splice(state.cart.indexOf(product), 1);
      state.count = 0;
      state.cart.map((item) => (state.count += item.quantity));
    },
  },
});
