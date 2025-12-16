import React from 'react'

function Stats() {
    return (
        <div className='container p-5 mt-5'>
            <div className='row p-5'>
                <div className='col-lg-6 p-4'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>

                    <h2 className='fs-4 mb-3'>Customer-first always</h2>
                    <p className='text-muted mb-5'>That's why 1.6+ crore customers trust Stock Matters with ₹6+ lakh crores worth of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='fs-4 mb-3'>No spam or gimmicks</h2>
                    <p className='text-muted mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className='fs-4 mb-3'>The Stock Matters universe</h2>
                    <p className='text-muted mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4 mb-3'>Do better with money</h2>
                    <p className='text-muted mb-5'>With initiatives like <a href='#'>Nudge</a> and <a href='#'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-lg-6 p-4 text-center'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{ width: "90%" }} />
                    <div className='mt-4'>
                        <a href='/products' className='me-5' style={{ fontSize: "18px" }}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href='#' style={{ fontSize: "18px" }}>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;