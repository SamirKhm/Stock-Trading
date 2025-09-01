import React from "react";

function Team() {
  return (
    <div className="container">

      <div className="row text-center">
        <div className="col-12">
          <h3>People</h3>
        </div>
      </div>

  
      <div
        className="row pb-3 mb-5 pt-5 align-items-center"
        style={{ lineHeight: "1.8rem" }}
      >
       
        <div className="col-12 col-md-6 p-4 text-center mb-4 mb-md-0">
          <img
            src="media/images/nithinkamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid"
            style={{ width: "60%", borderRadius: "50%" }}
          />
          <h3 className="mt-4 fs-4">Nithin Kamath</h3>
          <h4 className="fs-6">Founder, CEO</h4>
        </div>

        
        <div className="col-12 col-md-6 p-4">
          <p className="about-p">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            <br /><br />
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            <br /><br />
            Playing basketball is his zen.
            <br /><br />
            Connect on 
            <a href="#" style={{ textDecoration: "none", margin: "0 5px" }}>Homepage</a> / 
            <a href="#" style={{ textDecoration: "none", margin: "0 5px" }}>TradingQnA</a> / 
            <a href="#" style={{ textDecoration: "none", margin: "0 5px" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
