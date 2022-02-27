<template>
  <h1>Movie Page</h1>
  <h2>THIS IS MOVIE PAGE</h2>
  <p>{{ movie.title }}</p>
  <img :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="" />
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/index";
export default {
  name: "Movie",
  data() {
    return {};
  },
  computed: {
    ...mapState(["movie"]),
  },
  beforeRouteEnter(to, from, next) {
    //redirecting when movie is not in state
    if (store.state.movie === undefined) {
      next({ name: "home" });
    } else {
      next();
    }
  },
};
</script>

<style></style>
