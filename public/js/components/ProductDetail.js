/*
{
    "id": 1,
    "name": "Body Luxuries Sweet Lavender Hand Sanitizer",
    "description": "Cleans your hands",
    "reviews": 46,
    "rating": 2,
    "imgUrl": "http://dummyimage.com/136x167.bmp/cc0000/ffffff",
    "price": "$95.11"
  }
  */
 class ProductDetail extends React.Component{

    starValue(){
      let star = [];
    for(let i = 0; i < this.props.product.rating; i ++){
      star.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    }
    let emptystars = []
    emptystars.push(<span class="glyphicon glyphicon-star-empty"></span>)
    }

    addToShoppingCart(){
      let btnAddToCart = "";
      if(this.props.showAddButton){
        btnAddToCart =   <button onClick={(event)=>{
              // props.addToCart(props.product);
            store.dispatch({type:"ADD_PRODUCT_TO_CART",value:this.props.product})
          }}>Add To Cart</button>
      }
    }
    render(){

    return ( 
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src="http://placehold.it/320x150" alt=""/>
            <div className="caption">
                <h4 className="pull-right">
                {props.product.price}</h4>
                <h4><a href="#">{props.product.name}</a>
                </h4>
                <p>{props.product.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">
                {props.product.reviews.length} reviews</p>
                <p>  
                    {star}
                </p>
            </div>
          {btnAddToCart}
        </div>
      </div>);
    }
}