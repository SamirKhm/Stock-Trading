import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-5">
          <h4>
            Want to know more about our technology stack? Check out the
            Zerodha.tech blog.
          </h4>
        </div>
        <div className="col-12 my-3 text-center">
          <h3>The Zerodha Universe</h3>
        </div>
        <div className="col-12 my-3 text-center">
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <img
            src="media/images/zerodhaFundHouse.png"
            className="img-fluid product-img"
          ></img>
          <p className=" mb-5 product-content text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            src="media/images/sensibullLogo.svg"
            className="img-fluid product-img"
          ></img>
          <p className="product-content text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <img
            src="media/images/goldenpiLogo.png"
            className="img-fluid product-img"
          ></img>
          <p className=" mb-5 product-content text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            src="media/images/streakLogo.png"
            className="img-fluid product-img"
          ></img>
          <p className="product-content text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <img
            src="media/images/smallcaseLogo.png"
            className="img-fluid product-img"
          ></img>
          <p className=" mb-5 product-content text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
          <img
            src="media/images/dittoLogo.png"
            className="img-fluid product-img"
          ></img>
          <p className="product-content text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="col-12 text-center my-5">
        <button className="btn btn-primary w-25 fs-6">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
