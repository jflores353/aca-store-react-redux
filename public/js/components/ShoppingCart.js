class ShoppingCart extends React.Component{
    state = {
        shoppingCart:[]
    }

    componentDidMount(){
        let shoppingCart = store.getState().shoppingCart;
        this.setState({shoppingCart});
    }


    render(){
    const items =this.state.shoppingCart.map((p,i)=>{
        return <ProductDetail key={i} product={p} />
    });
    return (
      <div>
          {items}
      </div>
    )
    }
}