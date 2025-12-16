import React from 'react'

function Universe() {
    return (
        <div className='container mt-5 p-3'>
            <div className='row text-muted text-center mt-5'>
                <h1>The Stock Matters Universe</h1>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3'>
                    <img src='media/images/Stock MattersFundhouse.png' alt='' style={{ width: "50%" }} />
                    <p className='text-small mt-2'>Asset management.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/sensibullLogo.svg' alt='' style={{ width: "60%" }} />
                    <p className='text-small mt-2'>Options trading platform.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/goldenpiLogo.png' alt='' style={{ width: "50%" }} />
                    <p className='text-small mt-2'>Bonds and trading platform.</p>
                </div>

                <div className='col-4 p-3'>
                    <img src='media/images/streakLogo.png' alt='' style={{ width: "50%" }} />
                    <p className='text-small mt-2'>Algo & strategy platform.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/smallcaseLogo.png' alt='' style={{ width: "55%" }} />
                    <p className='text-small mt-2'>Thematic investment platform.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/dittoLogo.png' alt='' style={{ width: "40%" }} />
                    <p className='text-small mt-2'>Insurance</p>
                </div>
                <button className='p-3 btn btn-primary fs-5 mt-5' style={{ width: "20%", margin: "0 auto" }} onClick={() => window.location.href = '/signup'}>Sign up for free</button>
            </div>

        </div>
    );
}

export default Universe;