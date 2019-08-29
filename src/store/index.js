import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

/* Helpers */
import api from '../utils/api'

/* Initial State */
const INITIAL_STATE = {
    user: null,
    products: [],
    productsFiltered: []
  }

/* Reducer */
const storeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      }
    }

    case GET_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

/* Action */
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_USER = 'GET_USER'

/* Action Creator */
const getProducts = payload => ({ type: GET_PRODUCTS, payload })
const getUser = payload => ({ type: GET_USER, payload })

/* Thunks */
const getProductsThunk = () => {
  return async dispatch => {
    const products = await api.getProducts()
    localStorage.setItem('productsObj', JSON.stringify(products));
    dispatch(getProducts(products))
  }
}
const getUserThunk = () => {
  return async dispatch => {
    const user = await api.getUser()
    console.log(user)
    dispatch(getUser(user))
  }
}

const redeemProductThunk = productId => {
  return async dispatch => {
    const message = await api.redeemProduct(productId)
    console.log(message)
    dispatch(getUserThunk())
  }
}

const filterProductsThunk = products => {
  return dispatch => {
    dispatch(getProducts(products))
  }
}

/* Store creation */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(storeReducer, composeEnhancers(applyMiddleware(thunk)))

export { store, getUser, getProductsThunk, getUserThunk, redeemProductThunk, filterProductsThunk }