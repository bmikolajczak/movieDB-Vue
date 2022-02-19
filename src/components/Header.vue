<template>
  <header>
    <nav>
      <a href="#">Home page / Logo </a>

      <div class="nav_links">
        <ul>
          <li v-if="!userLoggedIn"><a href="#" @click.prevent="toggleAuthModal">Sign In/ Register</a></li>
          <template v-else>
            <li><a href="#" @click.prevent="signout">Log Out</a></li>
            <li><a href="#">Profile</a></li>
          </template>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["userLoggedIn"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
    ...mapActions(["signout"]),
  },
};
</script>

<style lang="scss">
@import "../assets/scss/Header.scss";
</style>
