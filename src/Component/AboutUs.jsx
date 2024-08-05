import React from 'react'
// import {Link} from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className="About-Main" id="about">
        <h1 style={{color:'#FD7E14', textAlign:'center', fontWeight:'bold', margin:'30px'}}>About Us</h1>
        <div className='About'>
            <img src="about1.jpg" alt="About" />
            <div className='text-feature'>
                <h3>We Solve Your Financial Problem</h3>
                <p>
                    Banker is a financial institution committed to empowering individuals 
                    and businesses on their financial journey. With a steadfast focus on 
                    customer-centric solutions, our bank strives to provide a seamless and 
                    secure banking experience. From innovative online services facilitating 
                    effortless transactions to personalized financial planning guidance, we 
                    prioritize the diverse needs of our clients. Our commitment extends 
                    beyond traditional banking, offering comprehensive solutions such as 
                    efficient loan tracking, transparent financial insights, and optimized 
                    debt management. Rooted in trust and integrity, Banker envisions a future 
                    where financial stability is attainable for all, fostering a community 
                    built on prosperity and sustainable growth.
                </p>
            </div>
        </div>
    </div>
    )
}