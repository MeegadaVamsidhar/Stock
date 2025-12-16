import React from 'react'

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' style={{ width: '70%', margin: '0 auto' }} />
                <h1 className='mt-5 fs-1'>Invest in everything</h1>
                <p className='fs-5 text-muted mt-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <div className='mt-4 mb-5'>
                    <a href='/signup' className='btn btn-primary fs-5 px-5 py-3' style={{ borderRadius: '4px' }}>Sign up for free</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;