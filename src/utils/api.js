const baseUrl = 'https://aerolab-challenge.now.sh/'

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {}

  return {
    method: method,
    headers: apiHeaders,
    credentials: 'same-origin',
    ...body,
  }
}

const apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjOWIxNmU0OTYwMDAwNjBkMDBhNjgiLCJpYXQiOjE1MTA3NzU1NzR9.3RXwYx0ehfQKYZfZ2XRcDr-jbSwmZI50T1l921fbU4E',
}

const api = {
  getUser: async () => {
    const userResponse = await fetch(baseUrl + 'user/me', fetchParams('GET'))
    const userInfo = await userResponse.json()

    return userInfo
  },
  addPoints: async value => {
    const amount = value <= 1000 ? 1000 : value <= 5000 ? 5000 : value <= 7500 ? 7500 : value > 7500 ? 7500 : 1000
    const userResponse = await fetch(baseUrl + 'user/points', fetchParams('POST', { amount: amount }))
    const userInfo = await userResponse.json()

    return userInfo
  },
  getHistory: async () => {
    const historyResponse = await fetch(baseUrl + 'user/history', fetchParams('GET'))
    const history = await historyResponse.json()

    return history
  },
  redeemProduct: async productId => {
    const redeemResponse = await fetch(baseUrl + 'redeem', fetchParams('POST', { productId: productId }))
    const redeem = await redeemResponse.json()
    return redeem
  },
  getProducts: async () => {
    const productsResponse = await fetch(baseUrl + 'products', fetchParams('GET'))
    const products = await productsResponse.json()

    return products
  },
}

export default api
