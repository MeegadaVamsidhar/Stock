import React from 'react'

function CreateTicket() {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <h1 className='fs-3 text-center mb-5'>To create a ticket, select a relevant topic</h1>
                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-3'><i className="fa-solid fa-circle-plus"></i> Account Opening</h4>
                    <a href='#' style={{ lineHeight: "2.5" }}>Getting started</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Online</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Offline</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Charges</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Company, Partnership and HUF</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Non Resident Indian (NRI)</a>
                </div>
                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-3'><i className="fa-solid fa-user"></i> Your Stock Matters Account</h4>
                    <a href='#' style={{ lineHeight: "2.5" }}>Login credentials</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Your Profile</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Account modification and segment addition</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>CMR & DP ID</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Nomination</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Transfer and conversion of shares</a>
                </div>
                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-3'><i className="fa-solid fa-chart-simple"></i> Trading and Markets</h4>
                    <a href='#' style={{ lineHeight: "2.5" }}>Trading FAQs</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Kite</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Margins</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Product and order types</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Corporate actions</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Kite features</a>
                </div>
                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-3'><i className="fa-solid fa-wallet"></i> Funds</h4>
                    <a href='#' style={{ lineHeight: "2.5" }}>Fund withdrawal</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Adding funds</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Adding bank accounts</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>eMandates</a>
                </div>
                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-3'><i className="fa-brands fa-bitcoin"></i> Console</h4>
                    <a href='#' style={{ lineHeight: "2.5" }}>IPO</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Portfolio</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Funds statement</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Profile</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Reports</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Referral program</a>
                </div>
                <div className='col-lg-4 p-4 mb-3'>
                    <h4 className='mb-3'><i className="fa-solid fa-coins"></i> Coin</h4>
                    <a href='#' style={{ lineHeight: "2.5" }}>Understanding mutual funds and Coin</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Coin app</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Coin web</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>Transactions and reports</a><br />
                    <a href='#' style={{ lineHeight: "2.5" }}>National Pension Scheme (NPS)</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;