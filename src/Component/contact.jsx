import React from 'react'
// import {Link} from 'react-router-dom'

export default function Contact() {
  return (
    <div className='main-contact' id='contact'>
        <h1 style={{fontWeight: 'bold', color: '#FD7E14'}}>Contact Us</h1>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10%', margin: '50px 0px', justifyContent: 'center', alignItems: 'center'}}>
            <div className='address' style={{maxWidth: '300px'}}>
                <i className="fas fa-map-marker-alt" style={{marginBottom: '10px', color: '#FD7E14', fontSize:'30px', marginRight:'10px'}}></i>
                <br />Milad Street B Block, Faisal Town, Lahore
            </div>
            <div className='phone' style={{maxWidth: '300px'}}>
                <i className="fas fa-phone" style={{marginBottom: '10px', color: '#FD7E14', fontSize:'30px', marginRight:'10px'}}></i>
                <br />+11122233344
            </div>
            <div className='email' style={{maxWidth: '300px'}}>
                <i className="fas fa-envelope" style={{marginBottom: '10px', color: '#FD7E14', fontSize:'30px', marginRight:'10px'}}></i>
                <br /><a style={{color: 'black'}} href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">hafizabdullahtahir@gmail.com</a>
            </div>
        </div>
        <form action="">
            <p style={{textAlign: 'left', fontSize: '30px', marginLeft: '70px'}}>Contact Form</p>
            <div className='names'>
                <input style={{marginRight: '15px'}} placeholder='First Name' type="text" id="first-name" name="first-name" required/>
                <input placeholder='Second Name' type="text" id="last-name" name="last-name" required/>
            </div>
            <div className='remaining'>
                <input placeholder='Email' type="email" id="email" name="email" required/>
                <input placeholder='Subject' type="text" id="subject" name="subject" required/>
                <textarea placeholder='Enter your message here....' id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}