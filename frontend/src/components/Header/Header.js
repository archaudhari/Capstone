import React from 'react';
import { NavbarContainer, StyledLink, NavTitle, SearchContainer, SearchBar, Search, NavLinks, Navtags, FilterBar, FilterLink } from './HeaderStyle';

const Header = () => {
  return (
    <>
      <NavbarContainer>
        {/* Link from React Router Dom */}
        <StyledLink to='/'>
          {/* Div for Custom Styling of Logo */}
          <NavTitle>localMart</NavTitle>
        </StyledLink>

       {/* Div for Custom Styling of search bar */}
        <SearchContainer>
           {/* Input for Search */}
            <SearchBar />
            {/* Search Icon */}
            <Search />
        </SearchContainer>

        <NavLinks>

          {/* Link from React Router Dom */}
          <StyledLink to="/">
            {/* Div for Custom styling of Routus */}
            <Navtags>Home</Navtags>
          </StyledLink>

          {/* Link from React Router Dom */}
          <StyledLink to="/shop">
            {/* Div for Custom styling of Routus */}
            <Navtags>Shop</Navtags>
          </StyledLink>
          
          {/* Link from React Router Dom */}
          <StyledLink to="/product">
            {/* Div for Custom styling of Routus */}
            <Navtags>Product</Navtags>  
          </StyledLink>
        
          
          {/* Link from React Router Dom */}
          <StyledLink to="/cart">
            {/* Div for Custom styling of Routus */}
            <Navtags>Cart</Navtags>
          </StyledLink>
        
          
          {/* Link from React Router Dom */}
          <StyledLink to="/login">
            {/* Div for Custom styling of Routus */}
            <Navtags>Login</Navtags>
          </StyledLink>

        </NavLinks>
      </NavbarContainer>

      <FilterBar>
        <StyledLink to="/electronics">
          <FilterLink>
            Electronics  
          </FilterLink>
        </StyledLink>

        <StyledLink to="/clothing">
          <FilterLink>
              Clothing
          </FilterLink>
        </StyledLink>


        <StyledLink to="/groceries">
          <FilterLink>
            Groceries
          </FilterLink>
        </StyledLink>

        <StyledLink to="/medicals">
          <FilterLink>
            Medicals
          </FilterLink>
        </StyledLink>
      </FilterBar>
    </>
  )
}

export default Header