import React,{useState} from 'react';
import { ProductCard, ShopTwoItems, ExploreShopBtn, ProductLink} from './ProductCardStyles';
import ReactStars from 'react-rating-stars-component';
import { useAlert } from 'react-alert';
import {addItemsToCart} from '../../actions/cartAction'
import { useDispatch,useSelector} from 'react-redux';



const ProductCards = ({product}) => {
  const alert= useAlert()
  const dispatch =useDispatch()
  const { user } = useSelector((state) => state.user);
  const [quantity, setQuantity] = useState(1);
  const addToCartHandler = () => {
    setQuantity(quantity)
    dispatch(addItemsToCart(product._id,quantity));
    alert.success("Item Added To Cart");
  };
  const alertLogin=()=>{
    alert.error("login to add product")
  }

  const options = {
    edit:true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 50 : 30,
    value: 4.5,
    innerHeight:50
  }
  return (
    <ProductCard>  
    <ProductLink to={`/product/${product?._id}`}>
        <img src={product?.images?.[0]?.url} alt={product?.name} />
    </ProductLink>
    <ProductLink to={`/product/${product?._id}`}>
        <h4>{product?.name}</h4>
    </ProductLink>
    <ProductLink to={`/product/${product?._id}`}>
          <h5><span>₹</span>{product?.price}</h5>
    </ProductLink>
    <ProductLink to={`/product/${product?._id}`}>
      <ShopTwoItems>
        <ReactStars {...options}/> <span>{" "}
              ({product?.numOfReviews} Reviews)</span>
      </ShopTwoItems>
    </ProductLink>
    <ProductLink to={`/product/${product?._id}`}>
      <ShopTwoItems>
        <p>City : <span>{product?.shopName?.city}</span></p>
        <p>State: <span>{product?.shopName?.state}</span></p>
      </ShopTwoItems>
    </ProductLink>
    <ShopTwoItems>
      <ExploreShopBtn bgcolor='#3d85c6' onClick={user ? addToCartHandler : alertLogin} >Add to Cart</ExploreShopBtn>
      <ExploreShopBtn>Buy Now</ExploreShopBtn>
    </ShopTwoItems>
  </ProductCard>
  )
}

export default ProductCards