import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VeeValidatePlugin from "./includes/validation.js";
import { auth } from "./includes/firebase";

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(store);
    app.use(VeeValidatePlugin);
    app.mount("#app");
  }
});
