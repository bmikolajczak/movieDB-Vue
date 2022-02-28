<template>
  <div class="search">
    <div class="search-header">
      <h1>Search</h1>
      <input type="text" v-model="query" @keyup="getResult(query)" placeholder="Search for movie" />
      <br />
      <label for="sort">Sort by:</label>
      <select name="sort" v-model="sortOption" @change="sortResults()">
        <option value="alpha">Title</option>
        <option value="popular">Populatiry</option>
        <option value="vote_count">Vote Count</option>
      </select>
    </div>

    <section class="movie-list">
      <div class="movie-item" v-for="result in results" :key="result.id">
        <img :src="'http://image.tmdb.org/t/p/w500/' + result.poster_path" @click.prevent="showInfo(result)" />
        <div class="desc">
          <h3>{{ result.title }}</h3>
          <p>Popularity: {{ result.popularity }}</p>
          <p>Vote Count: {{ result.vote_count }}</p>
          <button @click.prevent="addToFavs(result)">Add to favs</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
// import { mapState } from "vuex";
import { usersCollection, auth } from "../includes/firebase";
import firebase from "firebase";
export default {
  name: "search",
  data() {
    return {
      apiKey: "6dcc216133b93aa7fd311eb61b2980ac",
      query: "",
      results: "",
      movieGenre: "",
      sortOption: "popular",
      currentMovie: {},
    };
  },
  computed: {},
  methods: {
    getResult(query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`).then((response) => {
        this.results = response.data.results;

        // results sorting
        this.sortResults();
      });
      console.log(this.results);
    },
    async showInfo(result) {
      this.currentMovie = result;
      console.log(this.currentMovie.id, this.currentMovie.overview);
      await axios
        .get(`https://api.themoviedb.org/3/movie/${this.currentMovie.id}?api_key=6dcc216133b93aa7fd311eb61b2980ac`)
        .then((response) => {
          console.log("info z 2 calla", response.data, response.data.genres);
          this.$store.dispatch("setMovieInfo", response.data);
        })
        .catch((err) => console.log(err));
      // console.log("movie in state", this.$store.state.movie, this.$store.state.movie.title);
      this.$router.push({ name: "movie", params: { id: `${this.currentMovie.id}` } });
    },
    sortResults() {
      if (this.sortOption == "alpha") {
        //alphapetical sort
        this.results.sort((a, b) => {
          let aTitle = a.title.toLowerCase();
          let bTitle = b.title.toLowerCase();
          if (aTitle < bTitle) {
            return -1;
          }
          if (aTitle > bTitle) {
            return 1;
          }
          return 0;
        });
      }

      if (this.sortOption == "popular") {
        // sort by popularity
        this.results.sort((a, b) => b.popularity - a.popularity);
      }

      if (this.sortOption == "vote_count") {
        // sort by vote count
        //! fix
        console.log("vote_count");
        this.results.sort((a, b) => {
          b.vote_count - a.vote_count;
        });
      }
    },
    async addToFavs(movie) {
      console.log("filmik", movie);
      const film = {
        title: movie.title,
        poster: movie.poster_path,
        popularity: movie.popularity,
      };
      console.log(film);
      try {
        await usersCollection.doc(auth.currentUser.uid).update({
          movies: firebase.firestore.FieldValue.arrayUnion(film),
        });
        console.log("movie added");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/Search.scss";
</style>
