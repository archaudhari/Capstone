import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../../GlobalStyle';
import { ErrorPageContainer, ReturnHomeBtn } from './ErrorPageStyle';
import Medadata from '../../Layout/Medadata';

const ErrorPage = () => {
    const navigate = useNavigate();

  return (
    <MainContainer>
      <ErrorPageContainer>
    
        <Medadata title='localMart - 404 Page Not Found' />
        <h1>We are Sorry! Page Not Found!</h1>
        <ReturnHomeBtn onClick={() => navigate("/")}>Go Back to Home Page</ReturnHomeBtn>
      </ErrorPageContainer>
    </MainContainer>
  )
}

export default ErrorPage