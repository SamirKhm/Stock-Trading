import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5 p-5'>
            <div className='row'>
                <div className='col-12 col-md-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Awards img' className='img-fluid'></img>
                </div>
                <div className='col-12 col-md-6 '>
                    <h1 className='mt-5'>Largest Stock broker in India</h1>
                    <p></p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currendy derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct Mutual Funds</p></li>
                                <li><p>Bonds and Govt. securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='Image' style={{width:'80%'}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;
