<template>
  <article class="login_div">
    <div class="login_alert" v-if="login_in_submission">
      <h3>You are being logged in</h3>
    </div>
    <form action="">
      <label for="email"> Email</label>
      <input type="email" id="email" placeholder="enter your email" />
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />
      <button type="submit" :disabled="login_in_submission">Log in</button>
    </form>
  </article>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      show_login: true,
      show_register: false,
      login_in_submission: true,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
