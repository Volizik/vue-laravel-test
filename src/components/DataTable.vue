<template>
  <div class="data-table">
    <b-table v-if="flatsList && !searchingStatus" :responsive="true" striped hover :items="flatsList"></b-table>
    <span class="preloader" v-if="searchingStatus"><img :src="preloaderImg" alt="preloader"></span>
    <h3 v-if="alreadySearched && !searchingStatus && !flatsList.length">Apartments was not found!</h3>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import preloaderImg from '../assets/logo.png'

  export default {
    name: "DataTable",
    data() {
      return {
        preloaderImg
      }
    },
    computed: {
      ...mapGetters(['flatsList', 'searchingStatus', 'alreadySearched'])
    }
  }
</script>

<style lang="scss" scoped>
  .data-table {
    position: relative;
    display: block;
  }
</style>