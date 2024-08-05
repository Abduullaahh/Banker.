import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navdrop from './navdrop';
import Footdrop from './footdrop';


function Cards() {
  const location = useLocation();
  const [visibleDiv, setVisibleDiv] = useState('Regular-Cards');
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
              <Link to="#Regular-Cards" onClick={() => handleNavClick('Regular-Cards')} className={location.hash === '#Regular-Cards' ? 'active' : ''}>
                Regular Card
              </Link>
            </li>
            <li>
              <Link to="#Premium-Card" onClick={() => handleNavClick('Premium-Card')} className={location.hash === '#Premium-Card' ? 'active' : ''}>
                Premium Card
              </Link>
            </li>
            <li>
              <Link to="#Student-Card" onClick={() => handleNavClick('Student-Card')} className={location.hash === '#Student-Card' ? 'active' : ''}>
                Student Card
              </Link>
            </li>
          </ul>
        </nav>
      </header>
        <div style={{ display: visibleDiv === 'Regular-Cards' ? 'flex' : 'none' }} id='Regular-Cards'>
          <div className="text-of-online">
            <div className="policies">
              <h2>Regular Card</h2>
              <ul>
							<li>
							  <strong>Higher Credit Limits:</strong> Suitable for individuals with average to good credit, offering higher credit limits.
							</li>
							<li>
							  <strong>Versatile Rewards:</strong> Rewards programs covering a wide range of categories, including cashback, travel, and shopping.
							</li>
							<li>
							  <strong>Balance Transfer Offers:</strong> Options for transferring balances from other cards at lower introductory rates.
							</li>
							<li>
							  <strong>Annual Fees:</strong> Might have moderate annual fees, often offset by rewards and benefits.
							</li>
							<li>
							  <strong>Interest Rates:</strong> Variable interest rates based on creditworthiness, typically lower than student cards.
							</li>
							<li>
							  <strong>Enhanced Security Features:</strong> Additional security layers, such as fraud protection and identity theft monitoring.
							</li>
							<li>
							  <strong>Travel and Purchase Protections:</strong> Comprehensive travel insurance and purchase protections like extended warranties.
							</li>
							<li>
							  <strong>Concierge Services:</strong> Access to concierge services for travel and entertainment reservations.
							</li>
						  </ul>
            </div>
            <div className="pic-of-online">
                <img src="cards2.jpg" alt="" />
            </div>

          </div>
        </div>

        <div style={{ display: visibleDiv === 'Premium-Card' ? 'flex' : 'none' }} id="Premium-Card" className="text-of-online">
            <div className="policies">
                <h2>Premium Card</h2>
                <ul>
                <li>
                  <strong>High Credit Limits:</strong> Tailored for individuals with excellent credit, offering higher credit limits.
                </li>
                <li>
                  <strong>Luxury Rewards:</strong> Premium rewards including exclusive access to events, airport lounges, and elite memberships.
                </li>
                <li>
                  <strong>Elite Travel Benefits:</strong> Extensive travel benefits like complimentary upgrades, priority boarding, and airline fee credits.
                </li>
                <li>
                  <strong>Annual Fees:</strong> Higher annual fees, justified by premium benefits and rewards.
                </li>
                <li>
                  <strong>Low Interest Rates:</strong> Competitive interest rates for premium customers.
                </li>
                <li>
                  <strong>Elite Services:</strong> Dedicated customer support, personalized account management, and tailored financial services.
                </li>
                <li>
                  <strong>Exclusive Access:</strong> Access to exclusive events, VIP lounges, and luxury hotel programs.
                </li>
                <li>
                  <strong>Comprehensive Insurances:</strong> Robust insurance coverage including travel, car rental, and premium purchase protections.
                </li>
                </ul>
            </div>
            <div className="pic-of-online">
                <img src="cards3.jpg" alt="" />
            </div>
        </div>
        
        <div style={{ display: visibleDiv === 'Student-Card' ? 'flex' : 'none' }} id="Student-Card" className="text-of-online">
            <div className="policies">
                <h2>Student Cards</h2>
                <ul>
                  <li>
                    <strong>Lower Credit Limits:</strong> Tailored for students with limited income, offering lower credit limits.
                  </li>
                  <li>
                    <strong>Simplified Application:</strong> Streamlined application process considering factors like part-time income or educational status.
                  </li>
                  <li>
                    <strong>Student-Focused Rewards:</strong> Rewards customized for students, such as cashback on school supplies or dining discounts.
                  </li>
                  <li>
                    <strong>Building Credit History:</strong> Aimed at helping students establish a credit history responsibly.
                  </li>
                  <li>
                    <strong>No/Low Annual Fees:</strong> Accessible with no or minimal annual fees for affordability.
                  </li>
                  <li>
                    <strong>Financial Education Resources:</strong> Provision of financial literacy tools to educate students on responsible credit use.
                  </li>
                  <li>
                    <strong>Introductory APR:</strong> Offers lower or 0% interest rates for a limited duration.
                  </li>
                  <li>
                    <strong>Travel Benefits:</strong> Limited travel benefits like reduced foreign transaction fees or travel insurance for study abroad programs.
                  </li>
                </ul>
            </div>
            <div className="pic-of-online">
                <img src="cards1.jpg" alt="" />
            </div>
        </div>
        <Footdrop/>
    </div>
  );
}

export default Cards;