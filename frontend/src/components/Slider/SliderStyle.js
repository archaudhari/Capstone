import styled from 'styled-components';
import Button from '@mui/material/Button';

export const SliderInnerCard = styled.div`
    background-color: #fff;
    height: 360px;
    width:220px ;
    margin-bottom: 15px;
    text-align: center;
    padding:5px;
    margin-left: 30px;
    margin-right: 20px;
    border-radius: 30px;
    padding-top:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > img {
        height: 100px;
        width: 150px;
        margin:10px 10px;
        border-radius: 20px;
        border:2px solid black;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    > h5{ 
        font-size: 18px;
        margin:3px;
        font-weight: 500;
    }

    > h6 {
        font-size: 15px;
        margin:3px;
        display: flex;
        justify-content: center;

        > p { 
            margin:0;
            padding:0;
        }
    }

    > p {
        font-size: 15px ;
        margin-top:5px;
        text-align: center;
        width:200px;
        height: 110px;
        margin-left: auto;
        margin-right: auto;
    }
`;


export const ExploreShopBtn = styled(Button)`
    && {
        color: white;
        background-color: #ff6cbc;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: #ff6cbc;
    }
`;
