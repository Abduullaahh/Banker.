import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navdrop from './navdrop';
import Footdrop from './footdrop';


function OnlineBanking() {
  const location = useLocation();
  const [visibleDiv, setVisibleDiv] = useState('fund-transfer');
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
              <Link to="#fund-transfer" onClick={() => handleNavClick('fund-transfer')} className={location.hash === '#fund-transfer' ? 'active' : ''}>
                Fund Transfer
              </Link>
            </li>
            <li>
              <Link to="#account-management" onClick={() => handleNavClick('account-management')} className={location.hash === '#account-management' ? 'active' : ''}>
                Account Management
              </Link>
            </li>
            <li>
              <Link to="#legal-compliance" onClick={() => handleNavClick('legal-compliance')} className={location.hash === '#legal-compliance' ? 'active' : ''}>
                Legal & Compliance
              </Link>
            </li>
            <li>
              <Link to="#Security-Support" onClick={() => handleNavClick('Security-Support')} className={location.hash === '#Security-Support' ? 'active' : ''}>
                Security & Support
              </Link>
            </li>
          </ul>
        </nav>
      </header>
        <div style={{ display: visibleDiv === 'fund-transfer' ? 'flex' : 'none' }} id='fund-transfer'>
          <div className="text-of-online">
            <div className="policies">
                <h2>Fund Transfer & Payments</h2>
                <strong>Internal Transfers:</strong>
                <ul>
                <li><strong>Between Own Accounts:</strong> Customers can easily transfer funds between their own accounts within the same bank, such as from checking to savings accounts.</li>
                <li><strong>Within the Bank's Network:</strong> Transfers to accounts held by the same bank but possibly in different branches or regions.</li>
                </ul>

                <strong>External Transfers:</strong>
                <ul>
                <li><strong>To Other Banks:</strong> Facilitating payments or transfers to accounts held at different financial institutions.</li>
                <li><strong>Domestic or International Transfers:</strong> Enabling customers to send money domestically or across borders.</li>
                </ul>

                <strong>Bill Payments:</strong>
                <ul>
                <li><strong>Utilities:</strong> Allowing customers to pay their utility bills, such as electricity, water, gas, etc., directly through their bank accounts.</li>
                <li><strong>Credit Cards:</strong> Option to pay credit card bills seamlessly through the banking platform.</li>
                </ul>

                <strong>Online Purchases:</strong>
                <ul>
                <li><strong>E-commerce Transactions:</strong> Integrations with online shopping platforms to facilitate secure payments for goods and services.</li>
                </ul>
            </div>
            <div className="pic-of-online">
                <img src="fund-transfers.jpg" alt="" />
            </div>

          </div>
        </div>

        <div style={{ display: visibleDiv === 'account-management' ? 'flex' : 'none' }} id="account-management" className="text-of-online">
            <div className="policies">
                <h2>Account Management</h2>
                <strong>Understanding Account Management</strong>
                <ul>
                    <li><strong>Purpose:</strong> Account management involves maintaining relationships with clients or customers, ensuring satisfaction and loyalty.</li>
                    <li><strong>Components:</strong> It comprises strategizing, communication, and problem-solving to meet client needs effectively.</li>
                </ul>
                <strong>Key Responsibilities in Account Management</strong>
                <ul>
                    <li><strong>Relationship Building:</strong> Establishing trust and rapport with clients through regular communication and understanding their requirements.</li>
                    <li><strong>Account Growth:</strong> Identifying opportunities for upselling or cross-selling to maximize account value.</li>
                </ul>
                <strong>Strategies for Effective Account Management</strong>
                <ul>
                    <li><strong>Personalization:</strong> Tailoring solutions to individual client needs for a more personalized experience.</li>
                    <li><strong>Communication:</strong> Maintaining open lines of communication to address concerns promptly and build strong relationships.</li>
                </ul>
                <strong>Tools and Technologies in Account Management</strong>
                <ul>
                    <li><strong>CRM Systems:</strong> Leveraging Customer Relationship Management software to track interactions and manage client data efficiently.</li>
                    <li><strong>Analytical Tools:</strong> Using data analytics to understand client behavior and preferences, aiding in strategic decision-making.</li>
                </ul>
            </div>
            <div className="pic-of-online">
                <img src="acc-manages.jpg" alt="" />
            </div>
        </div>
        
        <div style={{ display: visibleDiv === 'legal-compliance' ? 'flex' : 'none' }} id="legal-compliance" className="text-of-online">
            <div className="policies">
                <h2>Legal Framework in Business</h2>
                <strong>Understanding Account Management</strong>
                <ul>
                    <li><strong>Regulatory Compliance:</strong> Ensuring adherence to laws and regulations governing the industry or region of operation.</li>
                    <li><strong>Contractual Obligations:</strong> Managing agreements with clients, suppliers, and partners while ensuring legal enforceability.</li>
                </ul>
                <strong>Compliance Management Strategies</strong>
                <ul>
                    <li><strong>Risk Assessment:</strong> Identifying potential legal risks and implementing measures to mitigate them.</li>
                    <li><strong>Training and Education:</strong> Providing staff with proper training on compliance protocols to prevent legal issues.</li>
                </ul>
                <strong>Data Privacy and Security</strong>
                <ul>
                    <li><strong>Compliance with Data Laws:</strong> Ensuring data handling aligns with relevant privacy laws (e.g., GDPR, CCPA).</li>
                    <li><strong>Cybersecurity Measures:</strong> Implementing protocols to protect sensitive information from breaches or unauthorized access.</li>
                </ul>
                <strong>Regulatory Updates and Adaptation</strong>
                <ul>
                    <li><strong>Monitoring Changes:</strong> Keeping abreast of evolving laws and regulations impacting the business.</li>
                    <li><strong>Adapting Policies:</strong> Modifying internal policies and practices to align with new legal requirements promptly.</li>
                </ul>
            </div>
            <div className="pic-of-online">
                <img src="legals.jpg" alt="" />
            </div>
        </div>
        
        <div style={{ display: visibleDiv === 'Security-Support' ? 'flex' : 'none' }} id="Security-Support" className="text-of-online">
            <div className="policies">
                <h2>Security & Support</h2>
                <strong>Security Infrastructure</strong>
                <ul>
                    <li><strong>Network Security:</strong> Implementing firewalls, encryption, and intrusion detection systems to safeguard data.</li>
                    <li><strong>Physical Security Measures:</strong> Securing premises, servers, and equipment to prevent unauthorized access</li>
                </ul>
                <strong>Support Protocols</strong>
                <ul>
                    <li><strong>24/7 Monitoring:</strong> Continuous surveillance and real-time response to potential security threats.</li>
                    <li><strong>Training and Education:</strong> Providing staff with proper training on compliance protocols to prevent legal issues.</li>
                </ul>
                <strong>User Training and Awareness</strong>
                <ul>
                    <li><strong>Security Education:</strong> Conducting regular training to educate employees about security best practices.</li>
                    <li><strong>Phishing Awareness:</strong> Educating users to recognize and avoid phishing attempts and social engineering tactics.</li>
                </ul>
                <strong>Compliance and Audits</strong>
                <ul>
                    <li><strong>Regulatory Compliance:</strong> Ensuring adherence to industry standards and legal requirements.</li>
                    <li><strong>Regular Security Audits:</strong> Conducting assessments to identify vulnerabilities and maintain a proactive security posture.</li>
                </ul>
            </div>
            <div className="pic-of-online">
                <img src="secures.jpg" alt="" />
            </div>
        </div>
        <Footdrop/>
    </div>
  );
}

export default OnlineBanking;