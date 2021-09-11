<template>
  <div class="search">
      <h1>Search</h1>
      <input type="text" v-model="query" @keyup="getResult(query)">
      <div v-for="result in results" :key="result.id">
          <p>{{result.title}}</p>
          <img :src="'http://image.tmdb.org/t/p/w500/'+ result.poster_path" style="width:150px">
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'search',
    data(){
        return{
            query: '',
            results: '',
        }
    },
    methods: {
        getResult(query){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6dcc216133b93aa7fd311eb61b2980ac&query=${query}`)
            .then(response => {this.results = response.data.results});
            console.log(this.results);
        }
    }
}
</script>
