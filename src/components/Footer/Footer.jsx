
import React, { useState } from "react";
import {  BrowserRouter } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Button } from 'react-bootstrap'
import GenralMap from '../../screens/Map/GenralMap';


import './Footer.css'

const Footer = () => {



//    const [status, setStatus] = useState("Submit");
//    const handleSubmit = async (e) => {
//      e.preventDefault();
//      setStatus("Sending...");
//      const { name, email, message } = e.target.elements;
//      let details = {
//        name: name.value,
//        email: email.value,
//        message: message.value,
//      };
//      let response = await fetch("http://localhost:5244/contact", {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json;charset=utf-8",
//        },
//        body: JSON.stringify(details),
//      });
//      setStatus("Submit");
//      let result = await response.json();
//      alert(result.status);
//    };




    return (
        <BrowserRouter>
            <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
                <div className=" bg-success ">
                    <MDBContainer>
                        <MDBRow className="py-4 d-flex align-items-center">
                            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 " style={{ color: "white" }}>Rejoignez-nous sur les réseaux sociaux</h6>
                            </MDBCol>
                            <MDBCol md="6" lg="7" className="text-center text-md-right">
                                
              

                <a href="https://www.facebook.com/CNOTunisie" className="fb-ic ml-0">
                    <i class="fab fab fa-facebook  white-text mr-lg-4  "/>
                                </a>
               
                   <a href="https://instagram.com/cnotunisien?igshid=NTc4MTIwNjQ2YQ==" className="fb-ic ml-0">
                       <i class="fab fa-instagram white-text mr-lg-4 fa-fw"/></a>

                     <a href="https://www.linkedin.com/company/comit%C3%A9-national-olympique-tunisien/"  className="fb-ic ml-0">
                    <i class="fab fa-linkedin-in  white-text mr-lg-4 "/></a>
                  
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                <MDBContainer className="mt-5 mb-4 xl-8 text-center text-md-left">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="3" xl="5" className="mb-4 dark-grey-text">
                           
                        <GenralMap />

                        </MDBCol>
                        
                        <MDBCol md="3" lg="3" xl="4" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <a href="https://www.google.com/maps/place/Centre+Culturel+et+Sportif+des+Jeunes+d'El+Menzah+6+%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%81%D9%8A+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%E2%80%AD/@36.8469034,10.1686084,15z/data=!4m14!1m7!3m6!1s0x12fd3358f2e6e33d:0xcfc282230f057e24!2zQ2VudHJlIEN1bHR1cmVsIGV0IFNwb3J0aWYgZGVzIEpldW5lcyBkJ0VsIE1lbnphaCA2INin2YTZhdix2YPYsiDYp9mE2KvZgtin2YHZiiDYp9mE2LHZitin2LbZig!8m2!3d36.8469034!4d10.1686084!16s%2Fg%2F1tf8j6gx!3m5!1s0x12fd3358f2e6e33d:0xcfc282230f057e24!8m2!3d36.8469034!4d10.1686084!16s%2Fg%2F1tf8j6gx">
                            <p><i className="fa fa-home mr-3 text-success " /> Centre Culturel et sportif de la Jeunesse El MEnzah VI -2091 Tunis </p> </a>
                            <p><i className="fa fa-envelope mr-3 text-success" /> jap23@cnot.org.tn </p>
                            <p><i className="fa fa-phone mr-3 text-success" /> T: +216 71 767 681 || F: +216 71 767 289 </p>
                        
                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong> Contactez nous </strong>
                            </h6>
                            <Form  >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Une adresse e-mail  </Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} type="text"  />
                                </Form.Group>
                                <Button variant="primary" type="submit"> Envoyer  </Button>
                            </Form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        Centre Culturel et sportif de la Jeunesse
                </MDBContainer>
                </div>
            </MDBFooter>
        </BrowserRouter>
    )
}

export default Footer
