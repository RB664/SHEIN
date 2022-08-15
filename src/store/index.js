import { createStore } from 'vuex'

export default createStore({
  state: {
    products : null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getProducts : async (context) => {
      fetch("https://agsheinapi.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        context.state.products = data.products
        console.log(context.state.products)
      })
    }
  },
  modules: {
  }
})
