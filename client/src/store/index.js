import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ratingText: "",
    ratingBG: "",
    ratingColor: "",
  },
  mutations: {
    SET_RATING_TEXT: (state, newValue) => {
      state.ratingText = newValue.ratingText;
      state.ratingBG = newValue.ratingBG;
      state.ratingColor = newValue.ratingColor;
    },
  },
  actions: {
    setRatingText: ({ commit, state }, newValue) => {
      commit("SET_RATING_TEXT", newValue);
      return state.ratingText;
    },
  },
  modules: {},
  getters: {
    getRatingText: (state) => {
      return state;
    },
  },
});
