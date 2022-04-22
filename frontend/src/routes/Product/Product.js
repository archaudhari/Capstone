import React,{useEffect, useState} from 'react';
import { MainContainer, TopContainer, CommonBtn, CardsContainer, FormContainer } from '../../GlobalStyle';
import ProductCards from '../../componenets/ProductCards/ProductCards';
//import { products } from '../../constant/data';
import {getProduct} from '../../actions/productAction'
import Medadata from '../../Layout/Medadata';
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../../Layout/Loader/Loader';

const Product = () => {
  const dispatch=useDispatch()
  const [ query, setQuery] = useState("");
  const {products, loading } = useSelector((state)=>state.products)
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  
  
  const searchSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <>
      {
        loading ?  <Loader />  : (

          <MainContainer>
    
      <Medadata title='localMart - All Products' /> 
      <TopContainer>
        <h4>Products</h4>
          <FormContainer onSubmit={searchSubmitHandler} >
            <input type='text' placeholder='Search City' onChange={(e) => setQuery(e.target.value) } />
            <CommonBtn value='search'>Search</CommonBtn>
          </FormContainer>
      </TopContainer>
      <CardsContainer>
      {
        products && products.filter((product) => product.name.toLowerCase().includes(query)).map(product => (
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
    </>
  )
}

export default Product

