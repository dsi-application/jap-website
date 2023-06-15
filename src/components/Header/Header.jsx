  

 import React, { Component } from 'react';
 import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';


import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav ,NavDropdown,Image,Form} from "react-bootstrap";
import SearchModal from "./SearchModal";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Header.css'; 


const Header = () => {

    



    const dispatch = useDispatch()


  

    const   componentDidMount= () => {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("menu-shrink");
                elem.classList.add("fixed-top");
            } else {
                elem.classList.remove("menu-shrink");
                elem.classList.remove("fixed-top");
            }
        });
        window.scrollTo(0, 0);
        
    
    }

    const  closeNavbar= () => {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }
  



    return (
        <React.Fragment>
            {/* Start Top Header */}
            <div className="top-header ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="address-bar">
                               
                                  <i class="fa fa-envelope text-success "/>  jap23@cnot.org.tn

                                  </div>

                                  <div className="address-bar">
                               
                                 <i class="fa fa-phone text-success " /> +216 71 767 681 
                                </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-5">
                            <div className="social-icons">
                                <ul className="list-inline   ">
                  


                   <li><a href="https://www.facebook.com/CNOTunisie" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook text-success  fa-fw "/></a></li>
                   
                   <li><a href="https://instagram.com/cnotunisien?igshid=NTc4MTIwNjQ2YQ==" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram text-success fa-fw"/></a></li>

                   <li> <a href="https://www.linkedin.com/company/comit%C3%A9-national-olympique-tunisien/"  rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-linkedin-in  fa-fw text-success"/></a></li>
                                </ul>

                            </div>
                      <div className="header-search" variant="primary">
                        <SearchModal />
                         </div>
                         
                        </div>
                    </div>

                  
                </div>
                
            </div>
            {/* End Top Header */}

            <Navbar
                id="navbar"
                bg="light"
                expand="xxl" 
                className="navbar navbar-expand-md navbar-light  "
                collapseOnSelect={true}
            >
                     <LinkContainer to="/">
                
                <Navbar.Brand className="nav-cal" >
                    <Image width="100px"src="/logo-final.png" />
                </Navbar.Brand>


            </LinkContainer>
                <Container >
                   

                    <Navbar.Toggle 
                        className="navbar-toggler" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        id="collaspe-btn"
                    />
                    <Navbar.Collapse 
                        id="navbarSupportedContent"
                    >
             
             <Nav class="navbar navbar-expand-sm bg-light navbar-light" >

                    <LinkContainer style={{color: '#78c2ad'}} to="/">
                    <Nav.Link className="nav-cal"> Accueil </Nav.Link>
                    </LinkContainer>
                    
                    
                    <NavDropdown  style={{color: '#78c2ad'}} title="À propos" id="navDropdown" >
                                
                                <LinkContainer to='/etablissement'>
                                    <NavDropdown.Item  > Historique </NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/sal2019'>
                                    <NavDropdown.Item   > Événements passés </NavDropdown.Item>
                                </LinkContainer>


                                <LinkContainer to='/organisation'>
                                    <NavDropdown.Item   >    Organisation   </NavDropdown.Item>
                                </LinkContainer>

                    </NavDropdown>

                    <NavDropdown  style={{color: '#78c2ad'}} title="Actualités" id="navDropdown" >

                    <Nav.Link href="http://www.cnot.org.tn/category/jap12/" target="_blank"> JAP </Nav.Link>
                    <Nav.Link href="https://www.tap.info.tn/fr" target="_blank"> TAP </Nav.Link>

                    </NavDropdown>


                    <LinkContainer style={{color: '#78c2ad'}} to="/cardMenu">
                    <Nav.Link className="nav-cal"> Calendrier </Nav.Link>
                    </LinkContainer>

                    <LinkContainer style={{color: '#78c2ad'}} to="/services">
                    <Nav.Link className="nav-cal">Competition</Nav.Link>
                    </LinkContainer>


                    <NavDropdown  style={{color: '#78c2ad'}} title="Les sites (venues) " id="navDropdown" >
                                
                                <LinkContainer to='/acit2'>
                                    <NavDropdown.Item  > Le site de compétition  </NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/acit1'>
                                    <NavDropdown.Item   > Le village des athlètes  </NavDropdown.Item>
                                </LinkContainer>
                    </NavDropdown>


                    <LinkContainer style={{color: '#78c2ad'}} to="/activities">
                    <Nav.Link className="nav-cal"> Médiathèque </Nav.Link>
                    </LinkContainer>   

                        </Nav>
                    </Navbar.Collapse>
                    




                </Container>
            </Navbar>
        </React.Fragment>
    );
  
}


export default Header;
