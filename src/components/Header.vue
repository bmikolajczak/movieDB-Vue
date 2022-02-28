<template>
  <header>
    <nav>
      <router-link id="homelink" :to="{ name: 'home' }" exact-active-class="home-active">Home page</router-link>

      <div class="nav_links">
        <ul>
          <li v-if="!userLoggedIn"><a href="#" @click.prevent="toggleAuthModal">Sign In/ Register</a></li>
          <template v-else>
            <li><a href="#" @click.prevent="signout">Log Out</a></li>
            <li><router-link :to="{ name: 'profile' }">Profile</router-link></li>
          </template>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["userLoggedIn"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
    async signout() {
      await this.$store.dispatch("signout");
      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/Header.scss";
</style>
