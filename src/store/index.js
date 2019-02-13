import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    flatsList: [], // Список квартир
    searching: false, // Поиск в процессе
    alreadySearched: false // Поиск уже производился
  },
  mutations: {
    setFlatsList: (state, payload) => state.flatsList = payload, // Записать в state список квартир
    changeSearchingStatus: (state, payload) => state.searching = payload, // Изменить статус процесса поиска
    alreadySearched: (state, payload) => state.alreadySearched = payload  // Поиск уже производился
  },
  actions: {
    getFlatsList: async ({commit}, payload) => { // Делаем запрос на получение квартир
      commit('alreadySearched', true); // Указываем, что поиск уже производился
      commit('changeSearchingStatus', true); // Указываем, что поиск в процессе
      // TODO: create fetch

      // TODO: remove this code below
      return new Promise((resolve) => { // Имитация запроса к серверу
        setTimeout(() => {
          commit('changeSearchingStatus', false); // меняем флаг процесса поиска на false
          if (payload.name !== '') {
            resolve([
              { Name: 'The Victoria', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 },
              { Name: 'The Xavier', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 },
              { Name: 'The Como', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 },
              { Name: 'The Aspen', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 }
            ]);
          } else {
            resolve([])
          }
        }, 2000);
      });
    }
  },
  getters: {
    flatsList: state => state.flatsList, // Получить список квартир
    searchingStatus: state => state.searching, // Получить статус завершенности процесса поиска
    alreadySearched: state => state.alreadySearched, // Узнать производился ли уже поиск
  }
});

export default store;