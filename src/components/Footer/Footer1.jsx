import React from 'react';

function Footer1() {
  return (
    <div style={{ position: 'relative' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      >
        <path
          fill="#0099ff"
          fillOpacity="0.6"
          d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,101.3C672,85,768,75,864,69.3C960,64,1056,64,1152,96C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          position: 'absolute',
          bottom: '1rem',
          width: '100%',
          zIndex: 10,
        }}
      >
        <a href="https://www.facebook.com/CNOTunisie" className="social-link">
          <i className="fab fa-facebook white-text mr-3"></i>
        </a>
        <a href="https://instagram.com/cnotunisien?igshid=NTc4MTIwNjQ2YQ==" className="social-link">
          <i className="fab fa-instagram white-text mr-3"></i>
        </a>
        <a href="https://www.linkedin.com/company/comit%C3%A9-national-olympique-tunisien/" className="social-link">
          <i className="fab fa-linkedin-in white-text"></i>
        </a>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,400L1360,400C1280,400,1120,400,960,400C800,400,640,400,480,400C320,400,160,400,80,400L0,400Z"
        ></path>
        <text
          x="50%"
          y="85%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="15px"
        >
          Centre Culturel et sportif de la Jeunesse El MEnzah VI -2091 Tunis
        </text>
        <text
          x="50%"
          y="90%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="16px"
        >
          jap23@cnot.org.tn
        </text>
        <text
          x="50%"
          y="95%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="10px"
        >
          Tel: +216 71 767 681 | Fax: +216 71 767 289
        </text>
      </svg>
    </div>
  );
}

export default Footer1;
