import { createStore } from "vuex";
import { auth, usersCollection } from "@/includes/firebase";

export default createStore({
  state: {
    showAuthModal: false,
    userLoggedIn: false,
    movie: {},
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.showAuthModal = !state.showAuthModal;
    },
    toggleAuth: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
    },
    setMovie: (state, payload) => {
      state.movie = payload;
    },
  },
  actions: {
    async register({ commit }, payload) {
      // creating user
      const userCred = await auth.createUserWithEmailAndPassword(payload.email, payload.password);

      //adding user info to db and syncing ids of user and documents
      await usersCollection.doc(userCred.user.uid).set({
        name: payload.name,
        nickname: payload.nick,
        email: payload.email,
      });
      await userCred.user.updateProfile({
        displayName: payload.name,
      });
      commit("toggleAuth");
    },
    init_login({ commit }) {
      //checking auth status from firebase
      const user = auth.currentUser;
      if (user) {
        commit("toggleAuth");
      }
    },
    async login({ commit }, payload) {
      console.log("action fired");
      await auth.signInWithEmailAndPassword(payload.email, payload.password);
      console.log("request to firebase fired");
      commit("toggleAuth");
    },
    async signout({ commit }) {
      await auth.signOut();

      commit("toggleAuth");
    },
    setMovieInfo({ commit }, payload) {
      commit("setMovie", payload);
    },
  },
});
