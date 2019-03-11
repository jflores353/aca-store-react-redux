

function shoppingCart(state, action) {
  if (typeof state === 'undefined') {
    return []
  }

  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return [...state, action.value];
    default:
      return state
  }
}

function products(state,action){
  if (typeof state === 'undefined') {
    return []
  }
  return state;
}

let reducers = Redux.combineReducers({
  shoppingCart, products
})

let store = Redux.createStore(reducers, state)


ReactDOM.render(
    <App 
      numberOfItemsInCart = {state.numberOfItemsInCart}
      // products={state.products}
    />
    ,document.getElementById("root"));


