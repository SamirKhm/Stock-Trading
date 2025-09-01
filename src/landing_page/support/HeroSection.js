import React from "react";

function HeroSection() {
  return (
    <div className="support mb-5 p-5 bg-light" style={{ backgroundColor: "lightgrey" }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1 style={{fontWeight:'normal'}}>Support Portal</h1>
          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Eg: How do i open my account, How do i activate F&O..."
                aria-label="Search"
              />
              <button className="btn btn-secondary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
