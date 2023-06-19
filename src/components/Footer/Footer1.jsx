import React from "react";
import { InlineIcon } from '@iconify/react'; // For general icons
import './Footer1.css'

function Footer1() {
  return (
    <div className="container-fluid" style={{ position: "relative" ,margin:0,padding:0,zIndex:2}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      >
        <path
          fill="#0099ff"
          fillOpacity="0.6"
          d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,101.3C672,85,768,75,864,69.3C960,64,1056,64,1152,96C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 350" style={{width:"100%", margin: 0,padding:0 }}>
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,400L1360,400C1280,400,1120,400,960,400C800,400,640,400,480,400C320,400,160,400,80,400L0,400Z"
        ></path>
      </svg>
      <div className="row d-flex" style={{margin:0}}>
        <div className="col-md-4" style={{ backgroundColor: "#0099FF", color: "white",margin:0 }}>
          <div className="container-fluid d-flex align-content-center justify-content-center p-0"style={{width:"165px",height:"127px"}} >
          <img className="img-fluid" src="./logo-final000.png" alt="Logo" />
          </div>
        </div>

        <div className="col-md-4"style={{ backgroundColor: "#0099FF", color: "white",margin:0 }}>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ backgroundColor: "#0099FF", color: "white",margin:0 }}
          >
     <div className="flex-column mt-5 " >
  <div style={{ fontFamily: 'Tropican', fontSize: '15px' }}>
    <InlineIcon icon="mdi:email" width="30" height="30" inline={false} /> jap23@cnot.org.tn
  </div>
  <div style={{ fontFamily: 'Tropican', fontSize: '15px' }}>
    <InlineIcon icon="mdi:phone" width="30" height="30" inline={false} /> Tel: +216 71 767 681 | Fax: +216 71 767 289
  </div>
  <div style={{ fontFamily: 'Tropican', fontSize: '15px' }}>
    <InlineIcon icon="mdi:map-marker" width="30" height="30" inline={false} /> Centre Culturel et sportif de la Jeunesse El MEnzah VI -2091 Tunis
  </div>
</div>

            
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center align-content-center"style={{ backgroundColor: "#0099FF", color: "white",margin:0 , width:"100%"}}>
        <div className="d-flex justify-content-center align-content-center align-items-center">
              <a
                href="https://www.facebook.com/CNOTunisie"
                className="social-link"
              >
                <i className="fab fa-facebook white-text mr-3"style={{ fontSize: "24px" }}></i>
              </a>
              <a
                href="https://instagram.com/cnotunisien?igshid=NTc4MTIwNjQ2YQ=="
                className="social-link"
              >
                <i className="fab fa-instagram white-text mr-3"style={{ fontSize: "24px" }}></i>
              </a>
              <a
                href="https://www.linkedin.com/company/comit%C3%A9-national-olympique-tunisien/"
                className="social-link"
              >
                <i className="fab fa-linkedin-in white-text"style={{ fontSize: "24px" }}></i>
              </a>
            </div>
          
          </div>

      </div>
    </div>
  );
}

export default Footer1;
