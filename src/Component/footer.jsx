import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <div className='main-footer'>
            <div className='links'>
                <h4>Links</h4>
                <Link to='Terms'>Terms</Link><br/>
                <Link to='Terms'>Policy</Link><br/>
                <a href='#about'>About</a><br/>
                <a href='#working'>Working</a><br/>
                <a href='#contact'>Contact</a><br/>
            </div>
            <div className='links'>
                <h4>Services</h4>
                <Link to='Online'>Online Banking</Link><br/>
                <a href='#working'>Mobile App</a><br/>
                <Link to='Cards'>Credit Cards</Link><br/>
                <a href='#working'>Financial Planing</a><br/>
                <Link to='Loan'>Loans</Link><br/>
            </div>
            <div className="follow-news">
                <div className='follow'>
                    <h4 style={{marginBottom: '15px'}}>Follow Us</h4>
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
                <div className='footer-newsletter'>
                    <form>
                        <h4 style={{marginBottom: '15px'}}>Newsletter</h4>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <hr style={{width: '90%'}}/>
            <p style={{fontSize: '10px', color: 'white'}}>Copyright ©2023 All rights reserved | This template is made by Abdullah Tahir</p>
        </div>
    </div>
  )
}