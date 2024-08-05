import React from 'react';
import {Link} from 'react-router-dom'


function Footdrop() {
  return (
    <div className="foot">
        <div className='follow'>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i style={{fontSize: '25px', marginRight: '40px', marginBottom: '30px'}} className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i style={{fontSize: '25px', marginRight: '40px', marginBottom: '30px'}} className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i style={{fontSize: '25px', marginRight: '40px'}} className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i style={{fontSize: '25px'}} className="fab fa-linkedin"></i>
            </a>
        </div>
        <p style={{fontSize: '10px', color: 'white'}}>Copyright ©2023 All rights reserved | This template is made by Abdullah Tahir</p>
    </div>
  );
}

export default Footdrop;