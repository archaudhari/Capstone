import React from 'react';
import { StyledLink } from '../../GlobalStyle';
import { ProductCard, ShopTwoItems, ExploreShopBtn } from './ProductCardStyles';
import ReactStars from 'react-rating-stars-component';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom'
import {addItemsToCart} from '../../actions/cartAction'
import { useDispatch } from 'react-redux';



const ProductCards = ({product}) => {

  const alert= useAlert()
  const dispatch =useDispatch()
  
  const {id}=useParams()
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id));
    alert.success("Item Added To Cart");
  };

  const options = {
    edit:true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 50 : 30,
    value: 4.5,
    innerHeight:50
  }
  return (
      <StyledLink to={`/product/${product._id}`}>
        <ProductCard>  
          <img src={product.images[0].url} alt={product.name} />
          <h4>{product.name}</h4>
            <h5><span>₹</span>{product.price}</h5>
            <ShopTwoItems>
              <ReactStars {...options}/> <span>{" "}
          ({product.numOfReviews} Reviews)</span>
            </ShopTwoItems>
            <ShopTwoItems>
              <ExploreShopBtn onClick={addToCartHandler}>Add to Cart</ExploreShopBtn>
              <ExploreShopBtn>Buy Now</ExploreShopBtn>
            </ShopTwoItems>
        </ProductCard>
      </StyledLink>
  )
}

export default ProductCards