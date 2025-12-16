import React from 'react'

function Pricing() {
    return (
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-lg-4 p-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/pricing' style={{ fontSize: "18px" }}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-lg-2'></div>
                <div className='col-lg-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col-4 p-4 border'>
                            <h1 className='mb-3 fs-2'>₹0</h1>
                            <p className='text-muted'>Free account<br />opening</p>
                        </div>
                        <div className='col-4 p-4 border'>
                            <h1 className='mb-3 fs-2'>₹0</h1>
                            <p className='text-muted'>Free equity delivery<br />and direct mutual funds</p>
                        </div>
                        <div className='col-4 p-4 border'>
                            <h1 className='mb-3 fs-2'>₹20</h1>
                            <p className='text-muted'>Intraday and<br />F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;