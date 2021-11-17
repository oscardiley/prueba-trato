import Logo from '../../images/logo-trato.png'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
} from './Navbar.elements';

function Navbar() {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <Img>
                <img src={Logo} alt="logo"/>
              </Img>
            </NavLogo>
          </NavbarContainer>
        </Nav>
    </>
  );
}

export default Navbar;
