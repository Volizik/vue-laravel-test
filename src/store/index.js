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
    getFlatsList: async ({commit}) => { // Делаем запрос на получение квартир
      commit('changeSearchingStatus', true); // Указываем, что поиск в процессе
      return Vue.http.get('/api/get-all');
    },
    updateFlatsList: async ({commit}, payload) => {
      commit('alreadySearched', true); // Указываем, что поиск уже производился
      commit('changeSearchingStatus', true); // Указываем, что поиск в процессе
      return Vue.http.get('/api/search', {params: payload});
    }
  },
  getters: {
    flatsList: state => state.flatsList, // Получить список квартир
    searchingStatus: state => state.searching, // Получить статус завершенности процесса поиска
    alreadySearched: state => state.alreadySearched, // Узнать производился ли уже поиск
  }
});

export default store;