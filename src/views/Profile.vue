<template>
  <h1>Profile Page</h1>
  <h2>THIS IS PROFILE PAGE</h2>
  <div>
    <h3>{{ userInfo?.name }}</h3>
    <h4>{{ userInfo?.email }}</h4>
    <h5>{{ userInfo?.nickname }}</h5>
  </div>
  <section class="movie-list">
    <div class="movie-item" v-for="(movie, index) in userInfo?.movies" :key="movie.id">
      <img :src="'http://image.tmdb.org/t/p/w500/' + movie.poster" style="width:150px" />
      <p>{{ movie.title }}</p>
      <p>Popularity: {{ movie.popularity }}</p>
      <button @click.prevent="removeFromoFavs(movie, index)">Remove from Favs</button>
    </div>
  </section>

  <button @click.prevent="logInfo">Log info</button>
</template>

<script>
import firebase from "firebase";
import { auth, usersCollection } from "../includes/firebase";
export default {
  name: "Profile",
  data() {
    return {
      userInfo: null,
    };
  },
  // async created() {
  //   const snapshot = await usersCollection.doc(auth.currentUser.uid).get();
  //   this.userInfo = snapshot.data();
  // },
  async beforeMount() {
    const snapshot = await usersCollection.doc(auth.currentUser.uid).get();
    this.userInfo = snapshot.data();
  },
  methods: {
    logInfo() {
      console.log("user info", this.userInfo);
    },
    async removeFromoFavs(movie, index) {
      try {
        await usersCollection.doc(auth.currentUser.uid).update({
          movies: firebase.firestore.FieldValue.arrayRemove(movie),
        });
      } catch (error) {
        console.log(error);
      }
      const deleted = this.userInfo.movies.splice(index, 1);
      console.log("movie deleted", deleted);
    },
  },
};
</script>

<style></style>
