<template>
  <div class="search">
      <h1>Search</h1>
      <input type="text" v-model="query" @keyup="getResult(query)">
      <div v-for="result in results" :key="result.id" @click="showInfo(result)">
          <p>{{result.title}}</p>
          <p>Popularity: {{result.popularity}}</p>
          <p>Vote Count: {{result.vote_count}}</p>
          <p>Genre: </p>
          <img :src="'http://image.tmdb.org/t/p/w500/'+ result.poster_path" style="width:150px">  
        </div>
        
    </div>
  <app-detail :movie="currentMovie" :movieGenre="movieGenre"/>
</template>

<script>
import axios from 'axios';
import AppDetail from '@/components/Detail.vue';
import {mapState, mapMutations} from 'vuex'
export default {
    name:'search',
    components:{AppDetail,
    },
    data(){
        return{
            query: '',
            results: '',
            movieGenre: '',
            currentMovie:{},
        }
    },
    computed:{
        ...mapState(['showDetail']),
    },
    methods: {
        ...mapMutations(['toggleDetail']),
        getResult(query){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6dcc216133b93aa7fd311eb61b2980ac&query=${query}`)
            .then(response => {this.results = response.data.results});
            console.log(this.results);
        },
        showInfo(result){
            this.currentMovie=result;
            console.log(this.currentMovie.id, this.currentMovie.overview);
            console.log(`Modal status: ${this.$store.state.showDetail}`);
            axios.get(`https://api.themoviedb.org/3/movie/${this.currentMovie.id}?api_key=6dcc216133b93aa7fd311eb61b2980ac`)
            .then(response=>{
                console.log(response.status, response.data.genres)
                this.movieGenre=response.data.genres;
                this.movieGenre.forEach(elem=>console.log(elem.name))})
            .catch(err=>console.log(err));
            //console.log(`Genre details: ${this.movieGenre}`);
            this.$store.commit('toggleDetail');
        },

    }
}
</script>
