import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav, NavDropdown, Image, Form ,Button} from 'react-bootstrap';
import SearchModal from './SearchModal';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { borderRadius } from '@mui/system';


const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let elem = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elem.classList.add('menu-shrink');
        elem.classList.add('fixed-top');
      } else {
        elem.classList.remove('menu-shrink');
        elem.classList.remove('fixed-top');
      }
    });
    window.scrollTo(0, 0);
  }, []);

  const closeNavbar = () => {
    if (window.matchMedia('screen and (max-width: 991px)').matches) {
      document.getElementById('collaspe-btn').click();
    }
  };

  return (
    <React.Fragment>
      <Navbar
        id="navbar"
        variant="dark"
        expand="xxl"
        className="navbar navbar-expand-md navbar-dark"
        collapseOnSelect={true}
      >
        <LinkContainer to="/">
          <Navbar.Brand className="nav-cal">
          <Image width="100px" src="/badge-logo.png" style={{ marginTop: '-1px' }} />
          </Navbar.Brand>
        </LinkContainer>

        <Container>
          <Navbar.Toggle
             className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="collaspe-btn"
            style={{ backgroundColor: 'transparent' }}
          >
             {/* <span className="navbar-toggler-icon"></span> */}
                <MenuIcon className="tog-icon" style={{color:"blue", border:"1px solid blue",padding:"2px", borderRadius:"3px"}}/>

          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="navbar navbar-expand-sm navbar-dark">
              <LinkContainer style={{ color: '#001689' }} to="/">
                <Nav.Link className="nav-cal" onClick={closeNavbar}>
                  Accueil
                </Nav.Link>
              </LinkContainer>

              <NavDropdown style={{ color: '#001689' }} title="À propos" id="navDropdown" className="nav-cal">
                <LinkContainer to="/etablissement" class="dropdownitem">
                  <NavDropdown.Item>Historique</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/sal2019">
                  <NavDropdown.Item>Événements passés</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/organisation">
                  <NavDropdown.Item>Organisation</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Actualités" id="navDropdown" className="nav-cal">
                <NavDropdown.Item   href="http://www.cnot.org.tn/category/jap12/" target="_blank" style={{ color: '#000000' }}>
                  JAP
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.tap.info.tn/fr" target="_blank" style={{ color: '#000000' }}>
                  TAP
                </NavDropdown.Item>
              </NavDropdown>

              <LinkContainer style={{ color: '#001689' }} to="/cardMenu">
                <Nav.Link className="nav-cal" onClick={closeNavbar}>
                  Calendrier
                </Nav.Link>
              </LinkContainer>

              <LinkContainer style={{ color: '#001689' }} to="/services">
                <Nav.Link className="nav-cal" onClick={closeNavbar}>
                  Competition
                </Nav.Link>
              </LinkContainer>

              <NavDropdown
                style={{ color: '#001689' }}
                title="Les sites (venues)"
                id="navDropdown"
                className="nav-cal"
              >
                <LinkContainer to="/acit2">
                  <NavDropdown.Item>Le site de compétition</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/acit1">
                  <NavDropdown.Item>Le village des athlètes</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer style={{ color: '#001689' }} to="/activities">
                <Nav.Link className="nav-cal" onClick={closeNavbar}>
                  Médiathèque
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
