
import { Header,Headerlist, StyledLink } from './Nav.styled';
const Nav = () => {
  return (
    <Header> 
      <Headerlist>
    <li>
      <StyledLink to="/">Home</StyledLink>
    </li>
    <li>
      <StyledLink to="movies">Movies</StyledLink>
    </li>
  </Headerlist></Header>
   
  );
};
export default Nav;