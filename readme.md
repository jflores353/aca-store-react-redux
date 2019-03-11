
## Intro
Let's add the redux tool to our aca-store app and see how it can be used along with react.
It may not seem like anything different is happening but we need to remember this is just how it is recommended to organize your code.

## Setup
* fork, clone, http-server
## Analyze Our Code
* Which state is used by many components
* Where are we passing props more then one time
* Where are we passing a function to children components for component communication
* We need to get rid of all this

## Implement Redux
* In index.html, add a script tag for redux https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.js
* We already have a state object in /js/state.js
## Reducers
* shoppingCart
    * Create a reducer for shoppingCart in index.js
    * Look for an action of type = "ADD_PRODUCT_TO_CART"
    * If action.type ===  "ADD_PRODUCT_TO_CART"
    * return [...state, action.value];
* products
    * Create a reducer for products in index.js
    * just return state, since we do not every change products
* Combine reducers and save in a global variable `reducers`
## Store
* Create a redux store in index.js and save in a global variable `store`
* Make sure to provide the state and reducers
## ProductList.js
* Convert the ProductList component to a class component, make sure to extend React.Component
* Make sure to change all references of `props` to `this.props`
* Create a state key for `state={products:[]}`
* In componentDidMount retrieve the products from the store
* `store.getState().products;`
* setState for products to `store.getState().products`. 
* Instead of using `props.products`, use `this.state.products`
* Don't pass addItemToCart to ProductDetail

## Layout.js
* Do not pass shoppingCart to Header.
## Header.js
* Convert the Header component to a class component, make sure to extend React.Component
* Make sure to change all references of `props` to `this.props`
* Create a state key for `state = {cartCount:0}`
* In componentDidMount subscribe to the store
* In the subscribing function, 
    * getState() to get the shoppingCart. 
    * setState for cartCount to shoppingCart.length. 
    * `store.getState().shoppingCart.length;`
* Instead of using `props.cart.length`, use `this.state.cartCount`
## ProductDetail.js
* Do not use addToCart
* Dispatch a message to redux informing it that we are trying to add a product
* `store.dispatch({type:"ADD_PRODUCT_TO_CART",value:props.product})`
## ShoppingCart.js
* Convert the ShoppingCart component to a class component, make sure to extend React.Component
* Make sure to change all references of `props` to `this.props`
* Create a state key for `state={shoppingCart:[]}`
* In componentDidMount retrieve the shoppingCart from the store
* `store.getState().shoppingCart;`
* setState for shoppingCart to `store.getState().shoppingCart`. 
* Instead of using `props.cart`, use `this.state.shoppingCart`
## App.js
* Remove the state for shopppingCart since its now in redux
* Remove the state for products since its now in redux
* Remove the function addItemToCart since the reducer is handling it
* Do not pass addItemToCart to any child component
* Do not pass shoppingCart to any child component.
* Do not pass products to any child component
## Bonus
* In App, fetch the array of products in componentDidMount
* When fetch as completed, don't setState, instead dispatch
* `store.dispatch({type:"PRODUCTS_LOADED",value:data})`
* Change the products reducer to look for the `action.type === "PRODUCTS_LOADED"`
* return the state the same way shoppingCart is
* return [...state, action.value];
## Things to Consider
* All the redux objects are in global variables
* We had to do extra work of changing function components to class components and using componentDidMount
* Our components are aware that redux exists because they have to access the store directly through the global variable in order to get data
* We still have to pass functions around for conditional rendering


