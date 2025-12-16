import React, { useState } from "react";

function Brokerage() {
    const [activeTab, setActiveTab] = useState("equities");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-12 p-4">
                    <h3 className="fs-5 mb-4">Charges</h3>

                    <ul className="nav nav-tabs justify-content-center mb-4">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "equities" ? "active" : ""}`}
                                onClick={() => handleTabClick("equities")}
                            >
                                Equities
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
                                onClick={() => handleTabClick("currency")}
                            >
                                Currency
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "commodities" ? "active" : ""}`}
                                onClick={() => handleTabClick("commodities")}
                            >
                                Commodities
                            </button>
                        </li>
                    </ul>

                    <div className="table-responsive">
                        <table className="table border">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-muted fs-6"></th>
                                    {activeTab === "equities" && (
                                        <>
                                            <th scope="col" className="text-muted fs-6">Equity delivery</th>
                                            <th scope="col" className="text-muted fs-6">Equity intraday</th>
                                            <th scope="col" className="text-muted fs-6">F&O - Futures</th>
                                            <th scope="col" className="text-muted fs-6">F&O - Options</th>
                                        </>
                                    )}
                                    {activeTab === "currency" && (
                                        <>
                                            <th scope="col" className="text-muted fs-6">Currency futures</th>
                                            <th scope="col" className="text-muted fs-6">Currency options</th>
                                        </>
                                    )}
                                    {activeTab === "commodities" && (
                                        <>
                                            <th scope="col" className="text-muted fs-6">Commodity futures</th>
                                            <th scope="col" className="text-muted fs-6">Commodity options</th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-muted">Brokerage</td>
                                    {activeTab === "equities" && (
                                        <>
                                            <td className="text-muted">Zero Brokerage</td>
                                            <td className="text-muted">0.03% or Rs. 20/executed order whichever is lower</td>
                                            <td className="text-muted">0.03% or Rs. 20/executed order whichever is lower</td>
                                            <td className="text-muted">Flat Rs. 20 per executed order</td>
                                        </>
                                    )}
                                    {activeTab === "currency" && (
                                        <>
                                            <td className="text-muted">0.03% or ₹ 20/executed order whichever is lower</td>
                                            <td className="text-muted">₹ 20/executed order</td>
                                        </>
                                    )}
                                    {activeTab === "commodities" && (
                                        <>
                                            <td className="text-muted">0.03% or ₹ 20/executed order whichever is lower</td>
                                            <td className="text-muted">₹ 20/executed order</td>
                                        </>
                                    )}
                                </tr>
                                <tr>
                                    <td className="text-muted">STT/CTT</td>
                                    {activeTab === "equities" && (
                                        <>
                                            <td className="text-muted">0.1% on buy & sell</td>
                                            <td className="text-muted">0.025% on the sell side</td>
                                            <td className="text-muted">0.0125% on sell side</td>
                                            <td className="text-muted">0.0625% on sell side (on premium)</td>
                                        </>
                                    )}
                                    {activeTab === "currency" && (
                                        <>
                                            <td className="text-muted">No STT</td>
                                            <td className="text-muted">No STT</td>
                                        </>
                                    )}
                                    {activeTab === "commodities" && (
                                        <>
                                            <td className="text-muted">0.01% on sell side (Non-Agri)</td>
                                            <td className="text-muted">0.05% on sell side</td>
                                        </>
                                    )}
                                </tr>
                                <tr>
                                    <td className="text-muted">Transaction charges</td>
                                    {activeTab === "equities" && (
                                        <>
                                            <td className="text-muted">NSE: 0.00335%, BSE: 0.00375%</td>
                                            <td className="text-muted">NSE: 0.00335%, BSE: 0.00375%</td>
                                            <td className="text-muted">NSE: 0.0019%, BSE: 0.00375%</td>
                                            <td className="text-muted">NSE: 0.0505% (on premium), BSE: 0.0325% (on premium)</td>
                                        </>
                                    )}
                                    {activeTab === "currency" && (
                                        <>
                                            <td className="text-muted">NSE: 0.0009% | BSE: 0.00022%</td>
                                            <td className="text-muted">NSE: 0.035% | BSE: 0.001% (on premium)</td>
                                        </>
                                    )}
                                    {activeTab === "commodities" && (
                                        <>
                                            <td className="text-muted">MCX: 0.0021%</td>
                                            <td className="text-muted">MCX: 0.0418%</td>
                                        </>
                                    )}
                                </tr>
                                <tr>
                                    <td className="text-muted">GST</td>
                                    {activeTab === "equities" && (
                                        <>
                                            <td className="text-muted">18% on (brokerage + SEBI + TC)</td>
                                            <td className="text-muted">18% on (brokerage + SEBI + TC)</td>
                                            <td className="text-muted">18% on (brokerage + SEBI + TC)</td>
                                            <td className="text-muted">18% on (brokerage + SEBI + TC)</td>
                                        </>
                                    )}
                                    {activeTab === "currency" && (
                                        <>
                                            <td className="text-muted">18% on (brokerage + SEBI + TC)</td>
                                            <td className="text-muted">18% on (brokerage + SEBI + TC)</td>
                                        </>
                                    )}
                                    {activeTab === "commodities" && (
                                        <>
                                            <td className="text-muted">18% on (brokerage + SEBI + TC)</td>
                                            <td className="text-muted">18% on (brokerage + SEBI + TC)</td>
                                        </>
                                    )}
                                </tr>
                                <tr>
                                    <td className="text-muted">SEBI charges</td>
                                    {activeTab === "equities" && (
                                        <>
                                            <td className="text-muted">₹10 / crore</td>
                                            <td className="text-muted">₹10 / crore</td>
                                            <td className="text-muted">₹10 / crore</td>
                                            <td className="text-muted">₹10 / crore</td>
                                        </>
                                    )}
                                    {activeTab === "currency" && (
                                        <>
                                            <td className="text-muted">₹10 / crore</td>
                                            <td className="text-muted">₹10 / crore</td>
                                        </>
                                    )}
                                    {activeTab === "commodities" && (
                                        <>
                                            <td className="text-muted">₹10 / crore</td>
                                            <td className="text-muted">₹10 / crore</td>
                                        </>
                                    )}
                                </tr>
                                <tr>
                                    <td className="text-muted">Stamp charges</td>
                                    {activeTab === "equities" && (
                                        <>
                                            <td className="text-muted">0.015% or ₹1500 / crore on buy side</td>
                                            <td className="text-muted">0.003% or ₹300 / crore on buy side</td>
                                            <td className="text-muted">0.002% or ₹200 / crore on buy side</td>
                                            <td className="text-muted">0.003% or ₹300 / crore on buy side</td>
                                        </>
                                    )}
                                    {activeTab === "currency" && (
                                        <>
                                            <td className="text-muted">0.0001% or ₹10 / crore on buy side</td>
                                            <td className="text-muted">0.0001% or ₹10 / crore on buy side</td>
                                        </>
                                    )}
                                    {activeTab === "commodities" && (
                                        <>
                                            <td className="text-muted">0.002% or ₹200 / crore on buy side</td>
                                            <td className="text-muted">0.003% or ₹300 / crore on buy side</td>
                                        </>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-4">
                    <a href="">
                        <h3 className="fs-5">Brokerage calculator</h3>
                    </a>
                    <ul
                        style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
                        className="text-muted"
                    >
                        <li>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                            GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contract notes, if required, shall be charged
                            ₹20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                            equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be
                            charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>
                <div className="col-4 p-4">
                    <a href="">
                        <h3 className="fs-5">List of charges</h3>
                    </a>
                    <ul
                        style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
                        className="text-muted"
                    >
                        <li>
                            <a href="" className="text-decoration-none">
                                Account charges
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-decoration-none">
                                GST
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-decoration-none">
                                Securities transaction tax
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-decoration-none">
                                Exchange transaction charges
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-decoration-none">
                                Stamp charges
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-decoration-none">
                                Investor protection fund
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;