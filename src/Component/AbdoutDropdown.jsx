import React from 'react';
import { Link } from 'react-router-dom';

export default function AbdoutDropdown({ handleClick }) {
  const handleOptionClick = (title) => {
    localStorage.setItem('selectedOption', title);
    if (typeof handleClick === 'function') {
      handleClick(title);
    } else {
      console.error('handleClick is not a function');
    }
  };

  return (
    <div className='navbar-dropdown'>
      <div className='submenu'>
        <li><Link className='submenu-item-first' onClick={() => handleOptionClick('Online Banking')} to='Online'>Online Banking</Link></li>
        <li><a href='#working' className='submenu-item'>Mobile App</a></li>
        <li><Link className='submenu-item' onClick={() => handleOptionClick('Credit Cards')} to='Cards'>Credit Cards</Link></li>
        <li><a href='#working' className='submenu-item'>Financial Planning</a></li>
        <li><Link className='submenu-item' onClick={() => handleOptionClick('Loans')} to='Loan'>Loans</Link></li>
      </div>
    </div>
  );
}