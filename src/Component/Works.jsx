import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);
  return (
    <div className="Work-Main" id='working'>
        <h1 style={{color:'#FD7E14', textAlign:'center', fontWeight:'bold', margin:'30px'}}>How it works ?</h1>
        <div className="carousels">
            <div className='Pictures'>
                <div className="work-carousel" onClick={nextSlide}>
                    <div className="work-carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        <div className="work-carousel-slide">
                            <img src="online.jpg" alt="Online Bakning"/>
                        </div>
                        <div className="work-carousel-slide">
                            <img src="mobile.jpg" alt="Mobile Application"/>
                        </div>
                        <div className="work-carousel-slide">
                            <img src="cards.jpg" alt="Credit Card"/>
                        </div>
                        <div className="work-carousel-slide">
                            <img src="loan.jpg" alt="Loan Tracking"/>
                        </div>
                        <div className="work-carousel-slide">
                            <img src="planing.jpg" alt="Financial Stability Planning"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Explain'>
                <div className="work-carousel" onClick={nextSlide}>
                    <div className="work-carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        <div className="work-carousel-slide">
                            <h3>Online Banking Services</h3>
								<p>
									Experience the convenience and security of our online banking platform designed 
									for easy account management. Our platform allows you to access your finances securely 
									and efficiently. Whether you need to check your balance, transfer funds, or pay bills,
									our online banking services make it seamless. With state-of-the-art security measures, 
									you can trust that your financial information is safe. Enjoy the flexibility and control 
									that online banking provides, empowering you to manage your accounts on your terms.
								</p>
                        </div>
                        <div className="work-carousel-slide">
                            <h3>Mobile Banking App</h3>
								<p>
									Take your banking on the go with our user-friendly mobile banking app. 
									Our app provides a seamless and intuitive interface for all your banking needs. 
									From checking your account balances to making mobile deposits, our app offers a 
									range of features to make banking convenient. Experience the freedom of managing 
									your finances from the palm of your hand. Stay connected to your money, receive 
									real-time alerts, and enjoy the flexibility of banking whenever and wherever you are.
								</p>
                        </div>
                        <div className="work-carousel-slide">
                            <h3>Credit Card Services</h3>
                                <p>
                                    Discover our competitive credit card offerings designed with attractive rewards 
                                    and benefits. Our credit cards are crafted to enhance your financial experience, 
                                    providing you with exclusive perks and privileges. Enjoy the flexibility of making 
                                    secure transactions, earning rewards points, and accessing a range of benefits 
                                    tailored to your lifestyle. With transparent terms and competitive interest rates, 
                                    our credit card services are designed to meet your financial goals while offering 
                                    a rewarding credit experience.
                                </p>
                        </div>
                        <div className="work-carousel-slide">
                            <h3>Efficient Loan Tracking</h3>
								<p>
									Empower yourself with efficient loan tracking and analysis tools. Our comprehensive 
									suite of services allows you to stay informed about your loans, track payments, and 
									plan for the future. Whether you have a mortgage, personal loan, or car loan, our 
									tools provide clarity and transparency. Take control of your financial journey with 
									insights into your loan status, payment history, and potential savings. Make informed 
									decisions and optimize your loan management for a more secure financial future.
								</p>
                        </div>
                        <div className="work-carousel-slide">
                            <h3>Financial Stability Planning</h3>
								<p>
									Embark on a journey of long-term financial stability planning with our expert guidance. 
									Our services are designed to help you achieve financial success and security. From 
									retirement planning to investment strategies, we provide comprehensive solutions 
									tailored to your unique goals. Gain transparent insights into your financial health, 
									receive personalized advice, and build a roadmap for a secure financial future. With 
									a focus on your stability and prosperity, our financial stability planning services 
									ensure you have the tools and knowledge needed for a successful financial journey.
								</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}