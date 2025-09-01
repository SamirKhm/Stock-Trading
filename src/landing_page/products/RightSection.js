import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="container py-5 ">
      <div className="row align-items-center">
        {/* Left content (text) */}
        <div className="col-12 col-md-5  text-md-start mb-4 mb-md-0">
          <h3 className="mb-3">{productName}</h3>
          <p className="mb-4" style={{ lineHeight: "1.8rem" }}>
            {productDescription}
          </p>
          <div>
            <a
              href={learnMore}
              className="btn btn-link p-0"
              style={{ textDecoration: "none" }}
            >
              Learn More{" "}
              <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Right content (image) */}
        <div className="col-12 col-md-7 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
