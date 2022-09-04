
import Vuex from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList= () => {
  if (localStorage.cartList == undefined) {
    return {}
  }
  return JSON.parse(localStorage.cartList) || {}
}

export default Vuex.createStore({
  state: {
    //{ shopId: { shopName:'',productList:{ productId:{} } }}
    cartList: getLocalCartList(),
    productCheckedTotal:0,
  },
  mutations: {
    changeCartItemInfo(state,payload){
      const { shopId,productId,productInfo } = payload
      let shopInfo = state.cartList[shopId] || {
        shopName:'', productList:{}
      }
      let product = shopInfo.productList[productId]
      if(!product){
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if(payload.num > 0){ product.check = true }
      if(product.count < 0 ){ product.count = 0}
      shopInfo.productList[productId] = product
      state.cartList[shopId]=shopInfo
      setLocalCartList(state)
    },
    changeShopName(state,payload){
      const { shopId,shopName} = payload
      const shopInfo = state.cartList[shopId] || {
        shopName:'',productList:{}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked(state,payload){
      const { shopId,productId } = payload;
      const product= state.cartList[shopId].productList[productId]
      product.check?state.productCheckedTotal--:state.productCheckedTotal++
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts(state,payload){
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      state.productCheckedTotal = 0
      setLocalCartList(state)
    },
    setCartItemsChecked(state,payload){
      const{ shopId } = payload
      const products = state.cartList[shopId].productList
      if(products){
        if(Object.keys(products).length === state.productCheckedTotal) {
          for(let key in products){
            const product = products[key]
            product.check = false
            state.productCheckedTotal = state.productCheckedTotal-1
          }
        } else {
          state.productCheckedTotal = 0
          for(let key in products){
            const product = products[key]
            product.check = true
            state.productCheckedTotal = state.productCheckedTotal+1
          }
        }
      }
      setLocalCartList(state)
    },
    cleanCartData(state, shopId){
       state.cartList[shopId].productList = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
