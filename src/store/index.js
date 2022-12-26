import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
// vuex-persistedstate来实现vuex数据持久化
export default createStore({
  state: {
    MusicSheet: [],
    MusicList: [],
    MoviePlayer: []
  },
  getters: {
  },
  mutations: {
    getPlaylist(state, payload) {
      state.MusicSheet = payload.amount
    },
    getMusicList(state, payload) {
      state.MusicList = payload.amount
    },
    getMovielist(state, payload) {
      state.MoviePlayer = payload.amount
    }
  },
  actions: {
    // AsyncGetPlaylist({ commit }) {
    //   commit('getPlaylist')
    // }
  },
  modules: {
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
