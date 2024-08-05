import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AbdoutDropdown from './AbdoutDropdown';

function Navdrop() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const storedTitle = localStorage.getItem('selectedOption');
    if (storedTitle) {
      setTitle(storedTitle);
    }
  }, []);

  return (
    <div className="nav">
      <div className="logo-terms">
        <Link style={{ textDecoration: 'none' }} to="/HomePage">
          <p>Banker.</p>
        </Link>
      </div>
      <h4 style={{color:'white', marginRight:'auto', marginTop:'10px'}}>{title}</h4>
      <Link to="/HomePage">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Navdrop;