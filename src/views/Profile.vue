<template>
  <div class="user-page">
    <div class="user-info">
      <img src="../assets/user.png" alt="user picture" />
      <p><strong>Name:</strong> {{ userInfo?.name }}</p>
      <p><strong>Email address:</strong> {{ userInfo?.email }}</p>
      <p><strong>Nickname:</strong> {{ userInfo?.nickname }}</p>
    </div>
    <h1>Your movies</h1>
    <section class="movie-list">
      <div class="movie-item" v-for="(movie, index) in userInfo?.movies" :key="movie.id">
        <img :src="'http://image.tmdb.org/t/p/w500/' + movie.poster" style="width:150px" />
        <div class="desc">
          <p>{{ movie.title }}</p>
          <button @click.prevent="removeFromoFavs(movie, index)">Remove from Favs</button>
        </div>
      </div>
    </section>
  </div>
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
  async beforeMount() {
    const snapshot = await usersCollection.doc(auth.currentUser.uid).get();
    this.userInfo = snapshot.data();
  },
  methods: {
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

<style scoped lang="scss">
@import "../assets/scss/Profile.scss";
</style>
