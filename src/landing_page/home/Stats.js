import React from 'react';

function Stats() {
  return ( 
    <div className='container mt-5'>
      <div className='row p-3 p-md-5 align-items-center'>
        
        {/* Left Column: Text */}
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <h2 className='fs-2 mb-5' style={{fontWeight:'450'}}>Trust with confidence</h2>

          <h3 className='fs-4 mb-2' style={{fontWeight:'400'}}>Customer-first always</h3>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h3 className='fs-4 mb-2' style={{fontWeight:'400'}}>No spam or gimmicks</h3>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

          <h3 className='fs-4 mb-2' style={{fontWeight:'400'}}>The Zerodha universe</h3>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h3 className='fs-4 mb-2' style={{fontWeight:'400'}}>Do better with money</h3>
          <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>

        {/* Right Column: Image + Links */}
        <div className='col-12 col-md-6 text-center'>
          <img 
            src='media/images/ecosystem.png' 
            alt='ecosystem' 
            className='img-fluid mb-4' 
            style={{objectFit:'cover'}}
          />
          <div>
            <a href='/Explore' className='d-inline-block mx-3 mb-2' style={{textDecoration:'none'}}>
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <br/>
            <a href='/kiteDemo' className='d-inline-block' style={{textDecoration:'none'}}>
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
