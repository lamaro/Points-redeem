import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

/* Helpers */
import api from '../utils/api'

/* Initial State */
const INITIAL_STATE = {
    user: null,
    loading: false,
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
        user: action.payload
      }
    }

    case GET_HISTORY: {
      return {
        ...state,
        userHistory: action.payload,
      }
    }
    case ENABLE_LOADING: {
      return {
        ...state,
        loading: action.payload,
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
const GET_HISTORY = 'GET_HISTORY'
const ENABLE_LOADING = 'ENABLE_LOADING'

/* Action Creator */
const getProducts = payload => ({ type: GET_PRODUCTS, payload })
const getUser = payload => ({ type: GET_USER, payload })
const getHistory = payload => ({ type: GET_HISTORY, payload })
const enableLoading = payload => ({ type: ENABLE_LOADING, payload })

/* Thunks */
const getProductsThunk = () => {
  return async dispatch => {
    dispatch(enableLoading(true))
    const products = await api.getProducts()
    localStorage.setItem('productsObj', JSON.stringify(products));
    dispatch(getProducts(products))
    dispatch(enableLoading(false))
  }
}
const getUserThunk = () => {
  return async dispatch => {
    const user = await api.getUser()
    const redeemHistoryOrdered = user.redeemHistory.sort((a, b) => (a._id < b._id) ? 1 : -1).slice()
    const userModified = {redeemHistoryOrdered, ...user}
    console.log(userModified)
    dispatch(getUser(userModified))
    dispatch(enableLoading(false))
  }
}

const getHistoryThunk = () => {
  return async dispatch => {
    const userHistory = await api.getHistory()
    console.log(userHistory)
    dispatch(getHistory(userHistory))
  }
}

const redeemProductThunk = productId => {
  return async dispatch => {
    dispatch(enableLoading(true))
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

export { store, getUser, getProductsThunk, getUserThunk, redeemProductThunk, filterProductsThunk, getHistoryThunk }