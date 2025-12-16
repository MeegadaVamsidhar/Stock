import React from 'react'

function OpenAccount() {
    return (
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <h1 className='fs-2 mb-3'>Open a Stock Matters account</h1>
                <p className='text-muted fs-5 mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <div>
                    <a href='/signup' className='btn btn-primary fs-5 px-5 py-3' style={{ borderRadius: '4px' }}>Sign up for free</a>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;