import React from 'react';
import './style.css';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div>
      {/* CSS imports */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap-grid.min.css"
        integrity="sha512-uzG4YY/dpwIEUrfjYud6T7ieVM06DwkHYiB28wgbtq0w4hSGx3XyDF2Oh/VaxB0hmyxyR3hYHNQc4Chb/dS1Sw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css"
        integrity="sha512-EaaldggZt4DPKMYBa143vxXQqLq5LE29DG/0OoVenoyxDrAScYrcYcHIuxYO9YNTIQMgD8c8gIUU8FQw7WpXSQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="card counter-card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="counter">
                      <CountUp start={0} end={1410} delay={0} duration={10} separator="">
                        {({ countUpRef }) => (
                          <span className="counter-value" ref={countUpRef} />
                        )}
                      </CountUp>
                      <h3>Athletes</h3>
                      <i className="fas fa-swimmer" style={{ color: '#001689' }}></i>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="counter">
                      <CountUp start={0} end={54} delay={0} duration={10} separator="">
                        {({ countUpRef }) => (
                          <span className="counter-value" ref={countUpRef} />
                        )}
                      </CountUp>
                      <h3>Total Countries Participating</h3>
                      <i className="fas fa-globe-africa" style={{ color: '#FDE021' }}></i>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="counter">
                      <CountUp start={0} end={16} delay={0} duration={10} separator="">
                        {({ countUpRef }) => (
                          <span className="counter-value" ref={countUpRef} />
                        )}
                      </CountUp>
                      <h3>Total Sports Number</h3>
                      <i className="fas fa-volleyball-ball" style={{ color: '#00B451' }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
