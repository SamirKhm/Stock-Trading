import React from "react";
function RaiseTicket() {
  return (
    <div className="container">
      {/* Account Opening */}
      <div className="row mb-2">
        <div className="col-12 mb-2 p-0">
          <div className="dropdown m-0 border">
            <button
              className="btn w-100 border  rounded-0"
              type="button"
              style={{textAlign:'left',height:'4rem'}}
              data-bs-toggle="collapse"
              data-bs-target="#links"
              aria-expanded="false"
              aria-controls="links"
            >
              <i className="fa-solid fa-plus"></i> Account Opening
            </button>

            <div id="links" className="collapse mt-2">
              <ul className="dropdown-menu show border-0 position-static w-100">
                <li><a className="text-primary mb-2 dropdown-item" href="#">Resident individual</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Minor</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Non resident Indian</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Company , Partnership , HUF</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Glossary</a></li>
              </ul>
            </div>
          </div>
        </div>
     

    
        <div className="col-12 mb-2  p-0">
          <div className="dropdown m-0 border">
            <button
              className="btn w-100 border rounded-0"

              type="button"
              style={{textAlign:'left',height:'4rem'}}
              data-bs-toggle="collapse"
              data-bs-target="#links2"
              aria-expanded="false"
              aria-controls="links2"
            >
              <i className="fa-solid fa-plus"></i> Your Zerodha Account
            </button>

            <div id="links2" className="collapse mt-2">
              <ul className="dropdown-menu show border-0 position-static w-100">
                <li><a className="text-primary mb-2 dropdown-item" href="#">Account Opening Process</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Documents Required</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Charges</a></li>
              </ul>
            </div>
          </div>
        </div>
    

     
        <div className="col-12 mb-2 p-0">
          <div className="dropdown m-0 border">
            <button
              className="btn w-100 border-bottom rounded-0"
              type="button"
                style={{textAlign:'left',height:'4rem'}}
              data-bs-toggle="collapse"
              data-bs-target="#links3"
              aria-expanded="false"
              aria-controls="links3"
            >
              <i className="fa-solid fa-plus"></i> Kite
            </button>

            <div id="links3" className="collapse mt-2">
              <ul className="dropdown-menu show border-0 position-static w-100">
                <li><a className="text-primary mb-2 dropdown-item" href="#">IPO</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Trading FAQs</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Margin Trading Facility</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Charts and Orders</a></li>
                <li><a className="text-primary mb-2 dropdown-item" href="#">Alerts and Nudges</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    
  );
}

export default RaiseTicket;
