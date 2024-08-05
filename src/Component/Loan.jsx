import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navdrop from './navdrop';
import Footdrop from './footdrop';

function Loans() {
  const location = useLocation();
  const [visibleDiv, setVisibleDiv] = useState('Mortgage-Loans');
  const handleNavClick = (id) => {
    setVisibleDiv(id);
  };
  return (
    <div>
        <Navdrop/>
        <header>
        <nav>
          <ul>
            <li>
              <Link to="#Mortgage-Loans" onClick={() => handleNavClick('Mortgage-Loans')} className={location.hash === '#Mortgage-Loans' ? 'active' : ''}>
                Mortgage Loans
              </Link>
            </li>
            <li>
              <Link to="#Personal-Loans" onClick={() => handleNavClick('Personal-Loans')} className={location.hash === '#Personal-Loans' ? 'active' : ''}>
                Personal Loans
              </Link>
            </li>
            <li>
              <Link to="#Small-Business-Loans" onClick={() => handleNavClick('Small-Business-Loans')} className={location.hash === '#Small-Business-Loans' ? 'active' : ''}>
                Small Business Loans
              </Link>
            </li>
          </ul>
        </nav>
      </header>
        <div style={{ display: visibleDiv === 'Mortgage-Loans' ? 'flex' : 'none' }} id='Mortgage-Loans'>
          <div className="text-of-online">
            <div className="policies">
              <h2>Mortgage Loans</h2>
              <ul>
                <li><strong>Flexible Interest Rates:</strong> Providing options for fixed-rate and adjustable-rate mortgages.</li>
                <li><strong>Various Loan Terms:</strong> Offering loan terms ranging from 15 to 30 years, catering to different financial needs.</li>
                <li><strong>Down Payment Assistance:</strong> Programs that aid borrowers in making a down payment, especially for first-time homebuyers.</li>
                <li><strong>Mortgage Insurance:</strong> Options for private mortgage insurance (PMI) for borrowers with less than a 20% down payment.</li>
                <li><strong>Online Mortgage Applications:</strong> Streamlined digital processes for applying and tracking mortgage applications.</li>
                <li><strong>Refinancing Options:</strong> Opportunities for existing homeowners to refinance their mortgages for better rates or terms.</li>
                <li><strong>Pre-Approval Services:</strong> Pre-approval to help customers understand their budget before house hunting.</li>
                <li><strong>Educational Resources:</strong> Providing resources and guides to educate borrowers on the mortgage process and responsibilities.</li>
              </ul>
            </div>
            <div className="pic-of-online">
                <img src="Mor.jpeg" alt="" />
            </div>

          </div>
        </div>

        <div style={{ display: visibleDiv === 'Personal-Loans' ? 'flex' : 'none' }} id="Personal-Loans" className="text-of-online">
            <div className="policies">
                <h2>Personal Loans</h2>
                <ul>
                  <li><strong>Competitive Interest Rates:</strong> Offering competitive rates based on credit history and income.</li>
                  <li><strong>Unsecured Loans:</strong> Providing loans without collateral requirements for eligible applicants.</li>
                  <li><strong>Quick Approvals:</strong> Fast approval processes, enabling customers to access funds promptly.</li>
                  <li><strong>Debt Consolidation Loans:</strong> Options for combining multiple debts into one loan for easier management.</li>
                  <li><strong>Customizable Loan Amounts:</strong> Allowing borrowers to select loan amounts based on their financial needs.</li>
                  <li><strong>Flexible Repayment Plans:</strong> Offering flexible repayment schedules based on income and financial situations.</li>
                  <li><strong>No Prepayment Penalties:</strong> Allowing borrowers to pay off the loan early without extra charges.</li>
                  <li><strong>Financial Counseling:</strong> Guidance and financial planning assistance for borrowers to manage their loans effectively.</li>
                </ul>
            </div>
            <div className="pic-of-online">
                <img src="Per.jpeg" alt="" />
            </div>
        </div>
        
        <div style={{ display: visibleDiv === 'Small-Business-Loans' ? 'flex' : 'none' }} id="Small-Business-Loans" className="text-of-online">
            <div className="policies">
                <h2>Small Business Loans</h2>
                <ul>
                  <li><strong>Startup Financing:</strong> Providing funding options for new businesses or startups.</li>
                  <li><strong>Equipment Financing:</strong> Loans for purchasing equipment or machinery crucial for business operations.</li>
                  <li><strong>Lines of Credit:</strong> Access to credit lines for managing short-term cash flow or unforeseen expenses.</li>
                  <li><strong>SBA Loan Programs:</strong> Facilitating Small Business Administration (SBA) loans for eligible businesses.</li>
                  <li><strong>Low-Interest Rates:</strong> Offering competitive rates to assist small businesses with financial growth.</li>
                  <li><strong>Expansion Financing:</strong> Supporting existing businesses in expanding their operations or market reach.</li>
                  <li><strong>Industry-Specific Loans:</strong> Tailored loans for specific industries with unique financial needs.</li>
                  <li><strong>Business Advisory Services:</strong> Providing advisory services to aid in business planning and strategy.</li>
                </ul>
            </div>
            <div className="pic-of-online">
                <img src="Buss.jpeg" alt="" />
            </div>
        </div>
        <Footdrop/>
    </div>
  );
}

export default Loans;