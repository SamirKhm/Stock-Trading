import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row mb-4'>
                <div className='col-12'>
                    <h3>Charges explained</h3>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-12 col-md-6'>
                    <p className='pricing-content text-muted'>
                       Securities/Commodities transaction tax<br/><br/>

Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

<br/><br/>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.

<br/><br/>Transaction/Turnover Charges

<br/><br/>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

<br/><br/>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

<br/><br/>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.

<br/><br/>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

<br/><br/>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.

<br/><br/>Call & trade

<br/><br/>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.

<br/><br/>Stamp charges

<br/><br/>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.

<br/><br/>NRI brokerage charges

<br/><br/>₹100 per order for futures and options.
<br/>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).
<br/>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
<br/>₹500 + GST as yearly account maintenance charges (AMC) charges.
<br/><br/>Account with debit balance

<br/><br/>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.

<br/><br/>Charges for Investor's Protection Fund Trust (IPFT) by NSE

<br/><br/>Equity and Futures - ₹10 per crore + GST of the traded value.
<br/>Options - ₹50 per crore + GST traded value (premium value).
<br/>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.
<br/><br/>Margin Trading Facility (MTF)

<br/><br/>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.
<br/>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
<br/>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN. 
                    </p>
                </div>
                <div className='col-12 col-md-6'>
                    <p className='pricing-content text-muted '>
                        GST

<br/><br/>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)

<br/><br/>SEBI Charges

<br/><br/>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.

<br/><br/>DP (Depository participant) charges

<br/><br/>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.

<br/><br/>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.

<br/><br/>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.

<br/><br/>Pledging charges

<br/><br/>₹30 + GST per pledge request per ISIN.

<br/><br/>AMC (Account maintenance charges)

<br/><br/>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here

<br/><br/>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here

<br/><br/>Corporate action order charges

<br/><br/>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.

<br/><br/>Off-market transfer charges

<br/><br/>₹25 per transaction.

<br/><br/>Physical CMR request

<br/><br/>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.

<br/><br/>Payment gateway charges

<br/><br/>₹9 + GST (Not levied on transfers done via UPI)

<br/><br/>Delayed Payment Charges

<br/><br/>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.

<br/><br/>Trading using 3-in-1 account with block functionality

<br/><br/>Delivery & MTF Brokerage: 0.5% per executed order.
<br/>Intraday Brokerage: 0.05% per executed order.
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;