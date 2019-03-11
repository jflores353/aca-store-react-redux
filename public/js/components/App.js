class App extends React.Component{
   state={
    whatToShow:0
    
    //    shoppingCart:[], *** shoppingCart and products are now in Redux ***
    //    products:[]
   }
   
   componentDidMount(){
    fetch('https://acastore.herokuapp.com/products')
    .then((response)=> {
      return response.json();
    })
    .then((data) =>{
      store.dispatch({type:"PRODUCTS_LOADED", value:data})
    });
   }
   changeView = (view)=>{
      // this.setState({whatToShow:view});
    this.setState(()=>{
        return {whatToShow:view}
    })
   }
//    *** This function is now handled by the reducer ***
//    addItemToCart = (product)=> {
//     this.setState((state,props)=>{
//         this.state.shoppingCart.push(product);
//         return {shoppingCart:this.state.shoppingCart}
//     })
//    }
   render(){
       let content = null;

       if(this.state.whatToShow ===0){
        content = <ProductList/>
       }else{
        content = <ShoppingCart cart={this.state.shoppingCart} />
       }
        return (
        <Layout 
       
        changeView ={this.changeView}
        shoppingCart={this.state.shoppingCart} >
         {content}
        </Layout>
        );
   }
}

App.propTypes = {
    products: PropTypes.string
  };