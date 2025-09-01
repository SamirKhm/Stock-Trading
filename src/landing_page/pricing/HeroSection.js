import React from 'react';

function HeroSection() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
                <h3>Charges</h3>
            </div>
            <div className='row text-center mb-5'>
                <h4 className='text-muted'>List of all charges and taxes</h4>
            </div>
            <div className='row text-center mb-5'>
                <div className='col-12 col-md-4 mb-5'>
                    <img  className='pricing-img img-fluid' src='media/images/0.png'></img>
                    <h3 className='mb-4'>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-12 col-md-4 mb-5'>
                    <img className='pricing-img img-fluid' src='media/images/20.png'></img>
                    <h3 className='mb-4'>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-12 col-md-4 mb-5'>
                    <img className='pricing-img img-fluid' src='media/images/0.png'></img>
                    <h3 className='mb-4'>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default HeroSection;