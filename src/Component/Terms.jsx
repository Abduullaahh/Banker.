import React from 'react';
import {Link} from 'react-router-dom'
import Navdrop from './navdrop';
import Footdrop from './footdrop';


const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <Navdrop/>

      <div className="policy">
        <h1>Terms & Policy</h1>
    
        <strong>Account Opening and Usage:</strong>
        <ul>
        <li>Customers must provide accurate and complete information during the account opening process.</li>
        <li>"Banker." reserves the right to refuse or terminate an account at its discretion.</li>
        </ul>
        
        <strong>Online Banking Security:</strong>
        <ul>
        <li>Customers are responsible for maintaining the confidentiality of their login credentials.</li>
        <li>"Banker." employs security measures, but customers must also take steps to secure their devices and information.</li>
        </ul>
        
        <strong>Transactions and Charges:</strong>
        <ul>
        <li>Customers are responsible for all transactions made using their accounts.</li>
        <li>"Banker." will provide a schedule of fees and charges, subject to change with notice.</li>
        </ul>
        
        <strong>Privacy Policy:</strong>
        <ul>
        <li>"Banker." respects customer privacy and adheres to a strict privacy policy.</li>
        <li>Personal information is collected and processed in accordance with applicable laws and regulations.</li>
        </ul>
        
        <strong>Account Termination:</strong>
        <ul>
        <li>Customers may close their accounts at any time, subject to settlement of outstanding obligations.</li>
        <li>"Banker." may terminate accounts for violation of terms or suspicious activities.</li>
        </ul>
        
        <strong>Communication:</strong>
        <ul>
        <li>"Banker." may communicate important information to customers through email, messages, or other channels.</li>
        <li>Customers are responsible for regularly checking their communication channels for updates.</li>
        </ul>
        
        <strong>Changes to Terms:</strong>
        <ul>
        <li>"Banker." reserves the right to modify these terms and conditions with advance notice to customers.</li>
        <li>Continued use of services after changes implies acceptance of the modified terms.</li>
        </ul>
        
        <strong>Compliance with Laws:</strong>
        <ul>
        <li>Customers must use "Banker." services in compliance with all applicable laws and regulations.</li>
        <li>Illegal activities or violation of laws may result in account termination.</li>
        </ul>
        
        <strong>Intellectual Property:</strong>
        <ul>
        <li>The "Banker." name, logo, and other intellectual property are protected and may not be used without permission.</li>
        <li>Customers are granted a limited, non-exclusive license for the use of services.</li>
        </ul>
        
        <strong>Disclaimer:</strong>
        <ul>
        <li>"Banker." provides services "as is" without warranties of any kind.</li>
        <li>Customers use the services at their own risk, and "Banker." is not liable for any damages or losses.</li>
        </ul>
      </div>

      <Footdrop/>
    </div>
  );
};

export default TermsAndConditions;
