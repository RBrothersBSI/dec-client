import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      chillers: [],
      boilers: []
    },
    mutations: {
      setChillers (state, payload) {
        if(state.chillers[0] !== null){
          state.chillers = []
        } 
        for (let i = 0; i < payload; i++) {
          var chiller = { name: `Chiller ${i+1}` }
          state.chillers.push(chiller)
        }
      },
      setBoilers (state, payload) {
        if(state.boilers[0] !== null){
          state.boilers = []
        } 
        for (let i = 0; i < payload; i++) {
          var boiler = { name: `Boiler ${i+1}` }
          state.boilers.push(boiler)
        }
      }
    },
    actions: {
      setChillers: ({commit}, payload) => {
        commit('setChillers', payload)
      },
      setBoilers: ({commit}, payload) => {
        commit('setBoilers', payload)
      }
    }
  })