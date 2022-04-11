import React from 'react';
import { SliderInnerCard, ExploreShopBtn } from './SliderStyle';

const Slider = ({ id, shopName, shopAddress, url ,rating}) => {
  return (
    <SliderInnerCard>
      <img src={url} alt="shop-Images" />
      <h5>{shopName}</h5>
        <h6>
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
          ))}
        </h6>
      <p>{shopAddress}</p>
      <ExploreShopBtn>Explore Shop</ExploreShopBtn>
    </SliderInnerCard>
  )
}

export default Slider