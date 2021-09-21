<template>
<transition name="slide"
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideOutLeft">
    <article class="modal" v-show="showDetail">
        <section class="modal-info">
            <button type="button" @click.prevent="toggleDetail">Close me</button><br>
            <img :src="'http://image.tmdb.org/t/p/w500/'+ movie.poster_path" alt="">
            <div class="info-box">
                <p>Overview: {{movie.overview}}</p>
                <p>Date: {{movie.release_date}}</p>
                <div>
                    <p>Genres:</p>
                    <ul>
                        <li v-for="genre in movieGenre" :key="genre.id">{{genre.name}}</li>
                    </ul>
                </div>
            </div>
        </section>
    </article>
</transition>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    name: 'Details',
    props: ['movie','movieGenre'],
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    font-size: 20px;
    position: fixed;
    top: 10px;
    left: 0px;
    z-index: 10;
}
.modal-info{
    display: flex;
    max-height: 80%;
    width: 80%;
    padding: 3rem;
    background: rgba(94, 173, 137, 1);
    border-radius: 1rem;
}

.info-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.modal-info img{
    width: 20rem;
    margin-right: 2rem;
}
.modal-info:first-child{
    text-align: left;
}
</style>