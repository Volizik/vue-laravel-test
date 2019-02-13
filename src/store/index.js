import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    flatsList: [
      // { Name: 'The Victoria', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 },
      // { Name: 'The Xavier', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 },
      // { Name: 'The Como', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 },
      // { Name: 'The Aspen', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 }
    ],
    searching: false,
    alreadySearched: false
  },
  mutations: {
    setFlatsList: (state, payload) => state.flatsList = payload,
    changeSearchingStatus: (state, payload) => state.searching = payload,
    alreadySearched: (state, payload) => state.alreadySearched = payload
  },
  actions: {
    getFlatsList: async ({commit}) => {
      commit('alreadySearched', true);
      // TODO: fetch
      return [
        { Name: 'The Victoria', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 },
        { Name: 'The Xavier', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 },
        { Name: 'The Como', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 },
        { Name: 'The Aspen', Price: 374662, Bedrooms: 4, Bathrooms: 3, Storeys: 2, Garages: 1 }
      ]
    }
  },
  getters: {
    flatsList: state => state.flatsList,
    searchingStatus: state => state.searching,
    alreadySearched: state => state.alreadySearched,
  }
});

export default store;