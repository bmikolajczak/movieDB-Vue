import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VeeValidatePlugin from "./includes/validation.js";

let app;
app = createApp(App);
app.use(store);
app.use(VeeValidatePlugin);

app.mount("#app");
