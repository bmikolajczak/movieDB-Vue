<template>
  <article class="register_div">
    <div class="login_alert" v-if="register_in_submission">
      <h3>You are being registered</h3>
    </div>
    <form class="register_form">
      <label for="">Name</label>
      <input type="text" id="name" placeholder="Enter you name" />
      <label for="">Nick Name</label>
      <input type="text" id="nick_name" placeholder="Enter you nick name" />
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="enter your email" />
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />
      <label for="confirm_password">Confirm password</label>
      <input type="password" id="confirm_password" placeholder="Enter your password" />
      <button type="submit" :disabled="register_in_submission">Register</button>
    </form>
  </article>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      register_in_submission: true,
    };
  },
};
</script>

<style></style>
