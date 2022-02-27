<template>
  <div class="auth_modal" :class="{ hidden: !showAuthModal }">
    <div class="auth_window">
      <div class="modal_header">
        <h3>{{ tab }}</h3>
        <button id="modal_close" @click.prevent="toggleAuthModal">Close modal</button>
      </div>
      <ul class="tabs">
        <li class="tab">
          <a href="#" @click.prevent="tab = 'login'">Login</a>
        </li>
        <li class="tab">
          <a href="#" @click.prevent="tab = 'register'">Register</a>
        </li>
      </ul>
      <LoginForm v-if="tab === 'login'" />
      <RegisterForm v-else />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Auth",
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      tab: "login",
    };
  },
  computed: {
    ...mapState(["showAuthModal"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>

<style lang="scss">
@import "../assets/scss/Auth.scss";
</style>
