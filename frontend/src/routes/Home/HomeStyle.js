import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const HomeContainer = styled.div`
    width: 90%;
    margin:0 auto 20px;
`;


export const ShopCardContainer = styled.div`
    background-color: #D1d5fa;
    height: 470px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    > h4 {
        margin-top:40px;
        margin-left: 20px;
        padding-top:20px;
        padding-bottom: 5px;
        font-size: 30px;
        font-weight: 700;
        color:#F361E4;
    }
`;

export const ShopCarousel = styled(Carousel)`
    width: 97%;
    margin:10px auto;
`;
