import React from 'react'
import { HomeContainer, ShopCardContainer, ShopCarousel } from './HomeStyle';
import Banner from '../../components/Banner/Banner';
import { shops } from '../../constants/data';
import Slider from '../../components/Slider/Sldier';

const Home = () => {
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <HomeContainer>
      <Banner />

      <ShopCardContainer>
      <h4>Shops</h4>
        <ShopCarousel responsive={responsive} infinite={true} autoPlay draggable={false} swipeable={false} centerMode={true} removeArrowOnDeviceType={["tablet", "mobile"]}
          temClass="carousel-item-padding-40-px"  containerClass="carousel-container">
            {
              shops.map(shop => (
                <Slider 
                  key={shop.id}
                  id={shop.id}
                  url={shop.url}
                  shopName={shop.shopName}
                  shopAddress={shop.shopAddress}
                  rating={shop.rating}
                />
              ))
            }
        </ShopCarousel>
      </ShopCardContainer>
    </HomeContainer>
  )
}

export default Home