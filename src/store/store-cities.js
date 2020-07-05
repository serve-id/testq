import Vue from 'vue'
const state = {
  cities: [
    { id: 'kasla389q', cityname: 'Delhi', etc: 'Ok Dokee' },
    { id: '94039034a', cityname: 'Others', etc: 'Ok Dokee' },
    { id: '9090ks249', cityname: 'Others', etc: 'Ok Dokee' }
  ]
}
const getters = {
  getCities: state => {
    let unique = [...new Set(state.cities.map(item => item.cityname))]
    let uniquewoth = unique.filter(word => word != 'Others')
    uniquewoth = uniquewoth.filter(Boolean)
    return uniquewoth
  }
}
const mutations = {
  addCity_M(state, payload) {
    Vue.set(state.cities, payload.id, payload) // vue helper for adding
  }
}
const actions = {
  addThisCity({ commit }, param) {
    let quid = Math.round(Math.random() * 1000000)
    let cty = param.others
    if (param.others == '') cty = param.city
    let payload = {
      id: quid,
      cityname: cty,
      etc: 'Blab Blah'
    }
    // console.log('payload', payload)
    commit('addCity_M', payload)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
