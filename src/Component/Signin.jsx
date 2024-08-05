import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Signin_Signup() {
    const history = useHistory();
    const handleClick = () =>{
        history.push('/UserPortal');
    }
  return (
    <div className='main-signin'>
        <div className="signin-second">
            <div className="logo-div">
                <div className="logo-content">
                    <Link to='HomePage'><h1>Banker.</h1></Link>
                    <p>Where Your Wealth Finds Confidence</p>
                </div>
                <div className="foot-signin">
                    <div className='follow'>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i style={{fontSize: '18px', marginRight: '40px', marginBottom: '30px'}} className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <i style={{fontSize: '18px', marginRight: '40px', marginBottom: '30px'}} className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i style={{fontSize: '18px', marginRight: '40px'}} className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <i style={{fontSize: '18px'}} className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <p style={{fontSize: '8px', color: 'white'}}>Copyright ©2023 All rights reserved | This template is made by Abdullah Tahir</p>
                </div>
            </div>
            <div className="form">
                <form action="">
                    <h2>Sign in</h2>
                    <input
                    className='sui-input'
                    required
                    type="text"
                    placeholder="Username"
                    /><br />
                    <input
                    className='sui-input'
                    required
                    type="password"
                    placeholder="Password"
                    /><br />
                    <Link className='Link' to='Signup'>Create an account</Link><br />
                    <button className='sui-button' onClick={handleClick}>Sign in</button>
                </form>
            </div>
        </div>
    </div>
  );
}