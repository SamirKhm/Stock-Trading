import React from 'react';

function Education() {
  return (  
    <div className='container p-5'>
      <div className='row align-items-center'>
        
        {/* Left Column: Image */}
        <div className='col-12 col-md-6 p-3 p-md-5'>
          <img 
            src='media/images/education.svg' 
            alt='Education' 
            className='img-fluid'
          />
        </div>

        {/* Right Column: Text */}
        <div className='col-12 col-md-6'>
          <h2 className='mb-4' style={{fontWeight:'450'}}>
            Free and open market education
          </h2>

          <p>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a className='d-inline-block mb-3' href='/varsity' style={{textDecoration:'none'}}>
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className='mt-4'>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a className='d-inline-block' href='/trading' style={{textDecoration:'none'}}>
            Trading Q&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Education;
