<template>
  <div class="search">
      <h1>Search</h1>
      <input type="text" v-model="query" @keyup="getResult(query)">
      <div v-for="result in results" :key="result.id" @click="detailShow=!detailShow">
          <p>{{result.title}}</p>
          <p>Popularity: {{result.popularity}}</p>
          <p>Vote Count: {{result.vote_count}}</p>
          <img :src="'http://image.tmdb.org/t/p/w500/'+ result.poster_path" style="width:150px">
          <app-detail 
          :result="result" 
          :detailShow='detailShow'>
          </app-detail>
      </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import AppDetail from '@/components/Detail.vue';
export default {
    name:'search',
    components:{AppDetail,
    },
    data(){
        return{
            query: '',
            results: '',
            detailShow: false,
        }
    },
    methods: {
        getResult(query){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6dcc216133b93aa7fd311eb61b2980ac&query=${query}`)
            .then(response => {this.results = response.data.results});
            console.log(typeof this.results, this.results);
        }
    }
}
</script>
