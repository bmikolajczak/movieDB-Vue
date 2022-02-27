<template>
  <article class="login_div">
    <div class="login_alert" v-if="!login_in_submission">
      <h3>{{ login_message }}</h3>
    </div>
    <vee-form class="login_form" :validation-schema="loginSchema" @submit="login">
      <!-- Email input -->
      <label for="email"> Email</label>
      <vee-field name="email" type="email" id="email" placeholder="enter your email" />
      <ErrorMessage name="email" />
      <!-- Password input -->
      <label for="password">Password</label>
      <vee-field name="password" type="password" id="password" placeholder="Enter your password" />
      <ErrorMessage name="password" />
      <button class="submit" type="submit" :disabled="login_in_submission">Log in</button>
    </vee-form>
  </article>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      login_in_submission: false,
      login_message: "Log in to app",
      loginSchema: {
        email: "required|email",
        password: "required|min:5",
      },
    };
  },
  computed: {},
  methods: {
    async login(values) {
      this.login_in_submission = true;
      this.login_message = "You are being logged in";
      console.log(values);
      try {
        await this.$store.dispatch("login", values);
      } catch (error) {
        this.login_message = "Invalid login details";
        return;
      }

      this.login_message = "You have been succesfully logged";
      this.login_in_submission = false;
      window.location.reload();
    },
  },
};
</script>
