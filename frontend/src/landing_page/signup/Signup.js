import React from 'react'

function Signup() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row p-5'>
                <div className='col-lg-6 col-xs-12 text-center'>
                    <img src='media/images/signup.png' style={{ width: "80%" }} alt='Signup' />
                </div>
                <div className='col-lg-6 col-xs-12 p-5'>
                    <h1 className='fs-2 mb-3'>Sign up with Stock Matters</h1>
                    <p className='text-muted fs-5 mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>+91</span>
                        <input type='text' className='form-control' placeholder='Your mobile number' />
                    </div>

                    <button className='btn btn-primary fs-5 px-5 py-2 mt-2 w-100' style={{ borderRadius: '4px' }}>Continue</button>
                    <p className='text-muted mt-3' style={{ fontSize: "12px" }}>I authorise Stock Matters to contact me even if my number is registered on DND. I authorise Stock Matters to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>
                    <p className='text-muted mt-3' style={{ fontSize: "12px" }}>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
                </div>
            </div>
        </div>
    );
}

export default Signup;