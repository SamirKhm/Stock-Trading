import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row align-items-center'>
                
                {/* Text Column */}
                <div className='col-12 col-md-6 mb-4 mb-md-0'>
                    <h2 className='mb-3' style={{fontWeight:'450'}}>Unbeatable pricing</h2>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='/pricing' className='d-inline-block' style={{textDecoration:'none'}}>
                        See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                {/* Image Column */}
                <div className='col-12 col-md-6'>
                    <img src='media/images/pricing.jpg' alt='pricing' className='img-fluid' />
                </div>
                
            </div>
        </div>
     );
}

export default Pricing;
