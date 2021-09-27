<template>
  <div class="search">
      <h1>Search</h1>
      <input type="text" v-model="query" @keyup="getResult(query)" placeholder="Search for movie">
      <br>
      <label for="sort">Sort by:</label>
      <select name="sort" v-model="sortOption">
          <option value="alpha">Title</option>
          <option value="popular">Populatiry</option>
          <option value="vote_count">Vote Count</option>
      </select>
      
    <section class="movie-list">
        <div class="movie-item"
        v-for="result in results" :key="result.id" @click="showInfo(result)">
            <img :src="'http://image.tmdb.org/t/p/w500/'+ result.poster_path" style="width:150px">
            <p>{{result.title}}</p>
            <p>Popularity: {{result.popularity}}</p>
            <p>Vote Count: {{result.vote_count}}</p>  
        </div>
    </section>
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
            sortOption:'',
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
            .then(response => {
                this.results = response.data.results;
                if(this.sortOption=='alpha')
                {
                    //alphapetical sort
                    this.results.sort((a,b)=>{
                        let aTitle= a.title.toLowerCase();
                        let bTitle= b.title.toLowerCase();
                        if(aTitle < bTitle) {
                            return -1;
                        }
                        if(aTitle > bTitle) {
                            return 1;
                        }
                        return 0;
                    }) 
                }
                if(this.sortOption=='popular'){
                    // sort by popularity
                    this.results.sort((a,b)=> b.popularity-a.popularity);
                }
                if(this.sortOption=='vote_count'){
                    // sort by vote count
                    this.results.sort((a,b)=>{
                        b.vote_count-a.vote_count;
                    });
                }
                
                });
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

            this.$store.commit('toggleDetail');
        },
        

    }
}
</script>

<style >
.movie-list{
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
}
.movie-item{
    background: rgb(21, 82, 54);
    width: 20rem;
    max-height: 50rem;
    margin: 0 .2rem .3rem 0;
    border-radius: .2rem;
}
.movie-item img{
    width: 100%;
}
</style>