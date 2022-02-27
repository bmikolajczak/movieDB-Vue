<template>
  <section class="register_div">
    <div class="login_alert" v-if="!register_in_submission">
      <h3>{{ register_message }}</h3>
    </div>
    <!-- Registration form -->
    <vee-form class="register_form" :validation-schema="registerSchema" @submit="register">
      <!-- Name input -->
      <label for="">Name</label>
      <vee-field name="name" type="text" id="name" placeholder="Enter you name" />
      <ErrorMessage class="error" name="name" />
      <!-- Nick name field -->
      <label for="">Nick Name</label>
      <vee-field name="nick" type="text" id="nick_name" placeholder="Enter you nick name" />
      <ErrorMessage name="nick" />
      <!-- email field -->
      <label for="email">Email</label>
      <vee-field name="email" type="email" id="email" placeholder="enter your email" />
      <ErrorMessage name="email" />
      <!-- Password field -->
      <label for="password">Password</label>
      <vee-field name="password" type="password" id="password" placeholder="Enter your password" />
      <ErrorMessage name="password" />
      <!-- Confirm password -->
      <label for="confirm_password">Confirm password</label>
      <vee-field name="confirm_pass" type="password" id="confirm_password" placeholder="Enter your password" />
      <ErrorMessage name="confirm_pass" />
      <button class="submit" type="submit" :disabled="register_in_submission">Register</button>
    </vee-form>
  </section>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      register_in_submission: false,
      register_message: "",
      registerSchema: {
        name: "required|name",
        nick: "required|nick",
        email: "required|email",
        password: "required|min:5",
        confirm_pass: "confirm_password:@password",
      },
    };
  },
  methods: {
    async register(values) {
      this.register_in_submission = true;
      this.register_message = "You are being registered!";
      console.log(values);
      console.log(this.register_message);
      // creating user
      try {
        await this.$store.dispatch("register", values);
      } catch (error) {
        this.register_in_submission = false;
        this.register_message = "OOPS someething went wrong! Please try again";
        return;
      }
      this.register_in_submission = false;
      this.register_message = "You have been succesfully registered";
      window.location.reload();
    },
  },
};
</script>
