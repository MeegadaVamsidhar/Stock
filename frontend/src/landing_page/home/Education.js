import React from 'react'

function Education() {
    return (
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-lg-6 p-4'>
                    <img src='media/images/education.svg' alt='Education' style={{ width: "100%" }} />
                </div>
                <div className='col-lg-6 p-4'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>

                    <p className='text-muted mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' className='mb-5 d-block' style={{ fontSize: "18px" }}>Varsity <i className="fa-solid fa-arrow-right"></i></a>

                    <p className='text-muted mb-3 mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' style={{ fontSize: "18px" }}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Education;