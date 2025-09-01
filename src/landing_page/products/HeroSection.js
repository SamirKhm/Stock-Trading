import React from "react";

function HeroSection() {
  return (
    <div className="container border-bottom" style={{ paddingBottom: "6rem" }}>
      <div className="row text-center mt-5 mb-2 opacity-90">
        <div className="col-12">
          <h3>Zerodha Products</h3>
        </div>
      </div>
      <div className="row text-center mb-3" style={{ opacity: "0.8" }}>
        <div className="col-12">
          <h5>Sleek, modern, and intuitive trading platforms</h5>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12">
          <p>
            Check out our Check out our{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://zerodha.com/investments"
            >
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
