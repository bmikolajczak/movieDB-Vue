<template>
  <header>
    <nav>
      <a href="#">Home page / Logo </a>

      <div class="nav_links">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#" @click.prevent="toggleAuthModal">Sign In/ Register</a></li>
          <li><a href="#">Log Out</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>

<style lang="scss">
@import "../assets/scss/Header.scss";
</style>
