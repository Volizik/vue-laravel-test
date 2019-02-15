<template>
  <div id="app">
    <div class="container">
      <SearchInput />
      <DataTable />
    </div>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput.vue'
import DataTable from './components/DataTable.vue'
import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'app',
  components: {
    SearchInput,
    DataTable
  },
  methods: {
    ...mapActions(['getFlatsList']),
    ...mapMutations(['changeSearchingStatus', 'setFlatsList']),
  },
  created() {
    this.getFlatsList().then((res) => { // Запрашиваем список квартир с сервера
      this.changeSearchingStatus(false); // меняем флаг процесса поиска на false
      this.setFlatsList(res); // Записываем в стор полученый список квартир
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.preloader {
  position: static;
  display: block;
  width: 100%;
  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    animation: preloader 2s infinite linear;
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
