import React from 'react'

function Hero() {
    return (
        <section className='container-fluid' style={{ backgroundColor: "#387ed1" }}>
            <div className='container p-5'>
                <div className='row text-white p-5'>
                    <h3 className='fs-1 mb-3'>Support Portal</h3>
                    <a href='#' className='fs-5 text-white mb-5'>Track tickets</a>
                </div>
                <div className='row text-white p-3 mb-5'>
                    <div className='col-lg-6 p-3 mb-5'>
                        <h1 className='fs-4 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                        <input
                            type='text'
                            placeholder='Eg: how to activate F&O, why is my order getting rejected ...'
                            className='form-control mb-3 p-3'
                            style={{ fontSize: "14px" }}
                        />
                        <div className='mt-3'>
                            <a href='#' className='text-white me-4'>Track account opening</a>
                            <a href='#' className='text-white me-4'>Track segment activation</a>
                            <a href='#' className='text-white me-4'>Intraday margins</a>
                            <a href='#' className='text-white'>Kite user manual</a>
                        </div>
                    </div>
                    <div className='col-lg-6 p-3'>
                        <h1 className='fs-4 mb-4'>Featured</h1>
                        <ol>
                            <li className='mb-2'><a href='#' className='text-white'>Current Buybacks - September 2024</a></li>
                            <li className='mb-2'><a href='#' className='text-white'>Offer for sale (OFS) - September 2024</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;