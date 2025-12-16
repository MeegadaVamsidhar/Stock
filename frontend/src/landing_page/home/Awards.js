import React from 'react'

function Awards() {
    return (
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-lg-6 p-4'>
                    <img src='media/images/largestBroker.svg' alt='Largest Broker' style={{ width: "100%" }} />
                </div>
                <div className='col-lg-6 p-4'>
                    <h1 className='fs-2 mb-4'>Largest stock broker in India</h1>
                    <p className='mb-5 text-muted'>2+ million Stock Matters clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul className='text-muted'>
                                <li className='mb-3'>Futures and Options</li>
                                <li className='mb-3'>Commodity derivatives</li>
                                <li className='mb-3'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className='text-muted'>
                                <li className='mb-3'>Stocks & IPOs</li>
                                <li className='mb-3'>Direct mutual funds</li>
                                <li className='mb-3'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='Press Logos' style={{ width: "90%" }} className='mt-4' />
                </div>
            </div>
        </div>
    )
}

export default Awards;