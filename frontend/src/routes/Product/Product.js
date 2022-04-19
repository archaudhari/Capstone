import React,{useEffect} from 'react';
import { MainContainer, TopContainer, CommonBtn, CardsContainer, FormContainer } from '../../GlobalStyle';
import ProductCards from '../../componenets/ProductCards/ProductCards';
//import { products } from '../../constant/data';
import {getProduct} from '../../actions/productAction'
import Medadata from '../../Layout/Medadata';
import {useDispatch,useSelector} from 'react-redux'

const Product = () => {
  const dispatch=useDispatch()
  const {products} = useSelector((state)=>state.products)
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  
  return (
    <MainContainer>
    
      <Medadata title='localMart - All Products' /> 
      <TopContainer>
        <h4>Products</h4>
          <FormContainer>
            <input type='text' placeholder='Search City' />
            <CommonBtn>Search</CommonBtn>
          </FormContainer>
      </TopContainer>
      <CardsContainer>
      {
        products && products.map(product => (
          <ProductCards product={product}
            // id={product.id}
            // title={product.title}
            // url={product.url}
            // price={product.price}
          />
        ))   
      }
      </CardsContainer>
    </MainContainer>
  )
}

export default Product

