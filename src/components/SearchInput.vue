<template>
  <div class="search-input mb-5">
    <b-input-group>
      <b-form-input v-model="value"></b-form-input>
      <b-input-group-append>
        <b-btn variant="info" @click="search">
          <span v-if="!searchingStatus">Search</span>
          <span v-else class="preloader"><img :src="preloaderImg" alt="preloader"></span>
        </b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from 'vuex'
  import preloaderImg from '../assets/logo.png'

  export default {
    name: "SearchInput",
    data() {
      return {
        value: '',
        preloaderImg
      }
    },
    computed: {
      ...mapGetters(['searchingStatus'])
    },
    methods: {
      ...mapActions(['getFlatsList']),
      ...mapMutations(['changeSearchingStatus', 'setFlatsList']),
      search() {
        this.getFlatsList(this.value).then((res) => {
          this.setFlatsList(res);
          this.changeSearchingStatus(false);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .preloader {
    position: relative;
    width: 80px;
    height: 100%;
    img {
      width: 20px;
      height: 20px;
    }
  }
  @keyframes preloader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>