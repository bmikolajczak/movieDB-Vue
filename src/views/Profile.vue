<template>
  <h1>Profile Page</h1>
  <h2>THIS IS PROFILE PAGE</h2>
  <button @click.prevent="logInfo">Log info</button>
</template>

<script>
import { auth, usersCollection } from "../includes/firebase";
export default {
  name: "Profile",
  data() {
    return {
      userInfo: null,
    };
  },
  async created() {
    const snapshot = await usersCollection.doc(auth.currentUser.uid).get();
    this.userInfo = snapshot.data();
  },
  methods: {
    logInfo() {
      console.log("user info", this.userInfo);
    },
  },
};
</script>

<style></style>
