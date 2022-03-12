import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    list: []
  },
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload)
    },
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    clear(state, payload) {
      state.list = payload
    },
    updTodo(state, payload) {
      state.list[payload].complete = !state.list[payload].complete
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
