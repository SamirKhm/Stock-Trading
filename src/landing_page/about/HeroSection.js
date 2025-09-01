import React from 'react';

function HeroSection() {
    return ( 
        <div className='container mt-5'>
            
          
            <div className='row'>
                <div className='col-12'>
                    <h3 className='mt-5 fs-4 text-center fw-medium opacity-75'>
                        We pioneered the discount broking model in India.<br />
                        Now, we are breaking ground with our technology.
                    </h3>
                </div>
            </div>

            
            <div 
                className='row border-top border-bottom mt-5 pt-5 pb-3 mb-5' 
                style={{lineHeight:'1.8rem'}}
            >
               
                <div className='col-12 col-md-6 mb-4 mb-md-0'>
                    <p className='about-p'>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                        <br /><br />
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        <br /><br />
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>

                
                <div className='col-12 col-md-6'>
                    <p className='about-p'>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                        <br /><br />
                        <a style={{textDecoration:'none'}} href='https://rainmatter.com/'>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                        <br /><br />
                        And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product <a href='https://zerodha.com/about/philosophy/' style={{textDecoration:'none'}}>philosophies</a>.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default HeroSection;
