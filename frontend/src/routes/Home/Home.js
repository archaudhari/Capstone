import React from 'react';
import { FormContainer, CommonBtn, TopContainer } from '../../GlobalStyle';
import { HomeContainer, ShopCardContainer, ShopCarousel, StyledLink } from './HomeStyle';
import Banner from '../../componenets/Banner/Banner';
import { shops } from '../../constant/data';
import Slider from '../../componenets/Slider/Slider';
import Medadata from '../../Layout/Medadata';
 
const Home = () => {
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <HomeContainer>

    <Medadata title='localMart - Home' />
      <Banner />

      <ShopCardContainer>
        <TopContainer>
          <h4>Shops</h4>
          <FormContainer>
            <input type='text' placeholder='Search City' />
            <CommonBtn>Search</CommonBtn>
          </FormContainer>
          <StyledLink to='/shop'>
            <CommonBtn>Explore Shops</CommonBtn>
          </StyledLink>
        </TopContainer>

        <ShopCarousel responsive={responsive} infinite={true} autoPlay draggable={false} swipeable={false} centerMode={true} removeArrowOnDeviceType={["tablet", "mobile"]}
          temClass="carousel-item-padding-40-px"  containerClass="carousel-container">
            {
              shops.map(shop => (
              <StyledLink to='shopDetails'>
                <Slider 
                  key={shop.id}
                  id={shop.id}
                  url={shop.url}
                  category={shop.category}
                  shopName={shop.shopName}
                  shopAddress={shop.shopAddress}
                  rating={shop.rating}
                />
                </StyledLink>
              ))
            }
        </ShopCarousel>
      </ShopCardContainer>
    </HomeContainer>
  )
}

export default Home