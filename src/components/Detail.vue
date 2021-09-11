<template>
  <div v-show="detailShow">
      <button type="button">Close me</button>
      <p>Overview: {{result.overview}}</p>
      <p>Date: {{result.release_date}}</p>
  </div>
</template>

<script>
export default {
    name: 'Details',
    props: ['result','detailShow'],
    data(){
        return{

       }
    },
    methods:{
        detailHide(){

        }
    }

}
</script>

<style>

</style>