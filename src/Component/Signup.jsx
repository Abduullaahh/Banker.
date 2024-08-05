import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
  
    const history = useHistory();
    const handleClick = () =>{
        history.push('/Signin');
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const firstName = e.target[0].value;
      const lastName = e.target[1].value;
      const userEmail = e.target[2].value;
      const userFullName = `${firstName} ${lastName}`;
      setFullName(userFullName);
      setEmail(userEmail);
      window.alert(`Dear ${userFullName}, a mail will be sent at ${userEmail} for further processing of the account.`);
    };
  return (
    <div className='main-signin'>
        <div className="signin-second">
            <div className="form">
                <form action="http://localhost:4000/signup" method="post" onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <input
                    className='sui-input'
                    required
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    /><br />
                    <input
                    className='sui-input'
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    /><br />
                    <input
                    className='sui-input'
                    required
                    type="email"
                    placeholder="Email"
                    name="email"
                    /><br />
                    <input
                    className='sui-input'
                    required
                    type="CNIC"
                    placeholder="CNIC"
                    name="Cnic"
                    /><br />
                    <input
                    className='sui-input'
                    required
                    type="phone"
                    placeholder="Phone"
                    name="phone"
                    /><br />
                    <input
                    className='sui-input'
                    required
                    type="text"
                    placeholder="Username"
                    name="username"
                    /><br />
                    <input
                    className='sui-input'
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                    /><br />
                    <Link className='Link' to='Signin'>Already have an account?</Link><br />
                    <button className='sui-button' onClick={handleClick}>Sign up</button>
                </form>
            </div>
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
        </div>
    </div>
  );
}