<template>
  <div class="movie-grid">
    <div class="grid-elem title">
      <h1>{{ movie.title }}</h1>
    </div>
    <div class="grid-elem info">
      <p id="desc">{{ movie.overview }}</p>
      <p><strong>Duration:</strong> {{ movie.runtime }}min</p>
      <p><strong>Budget:</strong> {{ movie.budget }}USD</p>
      <p><strong>Revenue:</strong> {{ movie.revenue }}USD</p>
      <ul id="genres">
        <li class="genre" v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</li>
      </ul>
      <div class="companies">
        <h3>Production companies</h3>
        <div class="company" v-for="company in movie.production_companies" :key="company.id">
          <p>
            <strong>{{ company.name }}</strong>
          </p>
          <img :src="'http://image.tmdb.org/t/p/w500/' + company.logo_path" alt="company logo" />
        </div>
      </div>
    </div>
    <div class="grid-elem poster"><img :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="" /></div>
  </div>
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
  mounted() {
    console.log(this.movie);
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

<style lang="scss">
@import "../assets/scss/Movie.scss";
</style>
