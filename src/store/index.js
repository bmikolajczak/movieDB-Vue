import { createStore } from "vuex";

export default createStore({
  state: {
    showAuthModal: true,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.showAuthModal = !state.showAuthModal;
    },
  },
});
