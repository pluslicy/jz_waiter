import Vue from 'vue'
import Vuex from 'vuex'
import order from './order'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    order,
    user
  }
})
