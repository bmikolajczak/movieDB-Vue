<template>
  <div id="app">
    <Header />
    <router-view> </router-view>
    <Auth />
  </div>
</template>

<script>
//import Search from "@/components/Search.vue";
import Header from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
export default {
  name: "App",
  components: {
    Header,
    Auth,
  },
  created() {
    //initialising login when app is created
    this.$store.dispatch("init_login");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000000;
  background: $bg-gradient;
}
* {
  margin: 0;
  padding: 0;
}
</style>
