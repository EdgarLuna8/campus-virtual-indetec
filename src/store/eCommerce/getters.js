/*=========================================================================================
  File Name: moduleEcommerceGetters.js
  Description: Ecommerce Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  isInCart: state => itemId => {
    return state.cartItems.some((item) => item.id === itemId)
  },
  isInWishList: state => itemId => {
    return state.wishList.some((item) => item.id === itemId)
  },
  getWishList: state => name => {
    name = name.toLowerCase()
    if (name.length == 0) return state.wishList
    else return state.wishList.filter((item) => item.name.toLowerCase().match(name.toLowerCase(),'gi') || item.description.toLowerCase().match(name.toLowerCase(),'gi'))
  },
  getCartItem: state => itemId => {
    const result = state.cartItems.filter((item) => item.id === itemId)
    return result.length ? result.pop() : []
  }
}
