import React from 'react';

function HeroSection() {
    return ( 
        <div className='container p-4 p-md-5 mb-5'>
            <div className='row text-center justify-content-center'>
                
                {/* Hero Image */}
                <div className='col-12'>
                    <img 
                        src='media/images/homeHero.png' 
                        alt='Hero Image' 
                        className='img-fluid mb-4 mb-md-5'
                    />
                </div>

                {/* Headline */}
                <div className='col-12'>
                    <h1 className='mt-3 mt-md-5 fs-3'>Invest in Everything</h1>
                    <p className='mt-2'>
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                </div>

                {/* Signup Button */}
                <div className='col-12'>
                    <button 
                        className='btn btn-primary mt-3 mt-md-4 px-4 py-2 fs-5'
                        style={{borderRadius:'5px', minWidth:'180px'}}
                    >
                        Signup Now
                    </button>
                </div>

            </div>
        </div>
    );
}

export default HeroSection;
