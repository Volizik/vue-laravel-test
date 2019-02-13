<template>
  <div class="search-input mb-5">
    <b-container>
      <b-row>
        <b-col>
          <!--Инпут для названия с кнопкой сабмита-->
          <b-input-group class="mb-2">
            <b-form-input v-model="name" placeholder="Name"></b-form-input>
            <b-input-group-append>
              <b-btn variant="info" @click="search">
                <span v-if="!searchingStatus">Search</span>
                <span v-else class="preloader"><img :src="preloaderImg" alt="preloader"></span>
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="3" md="4" sm="12">
          <!--Группа инпутов для цены-->
          <b-input-group prepend="Price" class="mb-2">
            <b-form-input v-model="priceFrom" type="number" placeholder="from"></b-form-input>
            <b-form-input v-model="priceTo" type="number" placeholder="to"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col>
          <!--Остальные параметры-->
          <b-input-group>
            <b-form-input v-model="bedRooms" type="number" placeholder="Bedrooms"></b-form-input>
            <b-form-input v-model="bathRooms" type="number" placeholder="Bathrooms"></b-form-input>
            <b-form-input v-model="storeys" type="number" placeholder="Storeys"></b-form-input>
            <b-form-input v-model="garages" type="number" placeholder="Garages"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from 'vuex'
  import preloaderImg from '../assets/logo.png'

  export default {
    name: "SearchInput",
    data() {
      return {
        preloaderImg,
        name: '',
        priceFrom: '',
        priceTo: '',
        bedRooms: '',
        bathRooms: '',
        storeys: '',
        garages: ''
      }
    },
    computed: {
      ...mapGetters(['searchingStatus'])
    },
    methods: {
      ...mapActions(['getFlatsList']),
      ...mapMutations(['changeSearchingStatus', 'setFlatsList']),
      search() {
        const payload = { // Обьект для отправки
          name: this.name,
          priceFrom: this.priceFrom,
          priceTo: this.priceTo,
          bedRooms: this.bedRooms,
          bathRooms: this.bathRooms,
          storeys: this.storeys,
          garages: this.garages
        };
        this.getFlatsList(payload).then((res) => { // Запрашиваем список квартир с сервера
          this.setFlatsList(res); // Записываем в стор полученый список квартир
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