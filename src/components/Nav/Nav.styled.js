import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  height: 50px;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 5px 6px -6px #222;
  border-bottom: 1px solid #555;

  

`;

export const StyledLink = styled(NavLink)`
  color: #555;
  font-size: 17px;
  margin-left: 20px;
  text-decoration: none;
outline: none;
  &.active {
    color: orange;
  }
`;

export const Headerlist = styled.ul`
display: flex;
align-items: center;
list-style:none
`