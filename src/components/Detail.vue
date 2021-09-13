<template>
 <article class="modal" v-show="showDetail">
    <section class="modal-info">
        <button type="button" @click.prevent="toggleDetail">Close me</button>
        <img :src="'http://image.tmdb.org/t/p/w500/'+ movie.poster_path" alt="">
        <p>Overview: {{movie.overview}}</p>
        <p>Date: {{movie.release_date}}</p>
    </section>
</article>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    name: 'Details',
    props: ['movie',],
    data(){
        return{

       }
    },
    computed:{
        ...mapState(['showDetail',]),
    },
    methods:{
        ...mapMutations(['toggleDetail',]),
    }

}
</script>

<style>
.modal{
    height: 100vh;
    width: 100%;
    background: rgba(94, 173, 137, .1);
    font-size: 20px;
    position: fixed;
    top: 10px;
    left: 0px;
    z-index: 10;
}
.modal-info img{
    width: 50px;
}
</style>