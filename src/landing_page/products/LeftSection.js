import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="container" style={{ paddingTop: "7rem", marginBottom: "3rem" }}>
      <div className="row align-items-center">
        
       
        <div className="col-12 col-md-7 mb-4 mb-md-0">
          <img src={imageURL} className="img-fluid" alt="product" />
        </div>
     
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
          <h3 className="mb-4">{productName}</h3>
          <p style={{ lineHeight: "2rem" }}>{productDescription}</p>

         
          <div className="d-flex flex-column flex-md-row gap-3 mb-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          
          <div className="d-flex flex-column flex-md-row align-items-center gap-3">
            <a href={googlePLay}>
              <img className="img-fluid" src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img className="img-fluid" src="media/images/appStoreBAdge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
