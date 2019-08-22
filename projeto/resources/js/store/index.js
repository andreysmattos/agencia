import Vue from 'vue'
import Vuex from 'vuex'
// import VueTheMask from 'vue-the-mask'
// Vue.use(VueTheMask)
Vue.use(Vuex)

import startpack from "./startpack"
// import panel from "./panel"

const modules =
{
    startpack,
    // panel
}

export default new Vuex.Store
({
    namespaced: true,
    modules
})
