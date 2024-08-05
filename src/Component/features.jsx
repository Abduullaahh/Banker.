import React from 'react'
// import {Link} from 'react-router-dom'

export default function Features() {
  return (
    <div className='MF' id='services'>
        <h1 style={{color:'#FD7E14', textAlign:'center', fontWeight:'bold', marginBottom:'30px'}}>Our Services</h1>
      <div className='Amortization-Computation'>
            <img src="AmortizationComputation.jpg" alt="Amortization Computation" />
            <div className='text-feature'>
                <h3>Amortization Computation</h3>
                <p>
                    At Our Bank, we offer comprehensive amortization computation
                    services to help you understand and manage your loans, ensuring
                    a clear path to debt repayment and financial stability
                </p>
                <ul>
                    <li style={{listStyle: 'none', padding: 0, color: 'grey'}}>
                        <span style={{ display: 'inline-block', fontWeight: 'bolder', width: '1em', marginRight: '0.5em', color: 'orange' }}>
                            &#10003;
                        </span>
                        Precise Financial Planning
                    </li>
                    <li style={{listStyle: 'none', padding: 0, color: 'grey'}}>
                        <span style={{ display: 'inline-block', fontWeight: 'bolder', width: '1em', marginRight: '0.5em', color: 'orange' }}>
                            &#10003;
                        </span>
                        Optimized Debt Management
                    </li>
                    <li style={{listStyle: 'none', padding: 0, color: 'grey'}}>
                        <span style={{ display: 'inline-block', fontWeight: 'bolder', width: '1em', marginRight: '0.5em', color: 'orange' }}>
                            &#10003;
                        </span>
                        Financial Stability
                    </li>
                    <li style={{listStyle: 'none', padding: 0, color: 'grey'}}>
                        <span style={{ display: 'inline-block', fontWeight: 'bolder', width: '1em', marginRight: '0.5em', color: 'orange' }}>
                            &#10003;
                        </span>
                        Transparent Financial Insights
                    </li>
                    <li style={{listStyle: 'none', padding: 0, color: 'grey'}}>
                        <span style={{ display: 'inline-block', fontWeight: 'bolder', width: '1em', marginRight: '0.5em', color: 'orange' }}>
                            &#10003;
                        </span>
                        Efficient Loan Tracking and Analysis
                    </li>
                    <li style={{listStyle: 'none', padding: 0, color: 'grey'}}>
                        <span style={{ display: 'inline-block', fontWeight: 'bolder', width: '1em', marginRight: '0.5em', color: 'orange' }}>
                            &#10003;
                        </span>
                        Long-Term Financial Stability Planning
                    </li>
                </ul>
                {/* <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe Newsletter</button>
                </form> */}
            </div>
      </div>
      <div className='features-main'>
        {/* <hr style={{width: '90%'}}/> */}
        <div className='features'>
            <img src="cart.svg" alt="cart" />
            <h4>Online Purchasing</h4>
            <p>This is the first slide with some text. Click anywhere to advance.</p>
        </div>
        <div className='features'>
            <img src="wallet.svg" alt="wallet" />
            <h4>Savings</h4>
            <p>This is the first slide with some text. Click anywhere to advance.</p>
        </div>
        <div className='features'>
            <img src="credit-card.svg" alt="card" />
            <h4>Credit Card</h4>
            <p>This is the first slide with some text. Click anywhere to advance.</p>
        </div>
        <div className='features'>
            <img src="Financial-Management.svg" alt="cart" />
            <h4>Income Monitoring</h4>
            <p>This is the first slide with some text. Click anywhere to advance.</p>
        </div>
        <div className='features'>
            <img src="Insurance-Consulting.svg" alt="wallet" />
            <h4>Insurance Consulting</h4>
            <p>This is the first slide with some text. Click anywhere to advance.</p>
        </div>
        <div className='features'>
            <img src="Income-Monitoring.svg" alt="card" />
            <h4>Income Monitoring</h4>
            <p>This is the first slide with some text. Click anywhere to advance.</p>
        </div>
      </div>
    </div>
  )
}