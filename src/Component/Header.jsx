import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function Header() {
    const location = useLocation();
  return (
    <div>
        <header>        
        <nav>
          <ul>
            <li>
                <Link to="Online">Fund Transfer</Link>
            </li>
            <li>
                <Link to="Online1">Account Management</Link>
            </li>
            <li>
                <Link to="Online2">Legal & Compliance</Link>
            </li>
            <li>
                <Link to="Online3">Security & Support</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;