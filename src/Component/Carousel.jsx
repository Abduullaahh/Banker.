import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Change this if you have a different number of slides

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide(); // Automatically move to the next slide after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, [currentSlide]); // Reset the timer whenever the current slide changes

  return (
    <div className="carousel" onClick={nextSlide} id='home'>
      <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="carousel-slide">
          <h3>Online Banking</h3>
          <p>Experience the convenience and security of our online banking platform designed for easy account management</p>
        </div>
        <div className="carousel-slide">
          <h3>Mobile Application</h3>
          <p>Take your banking on the go with our user-friendly mobile banking app which keeps track of all transactions</p>
        </div>
        <div className="carousel-slide">
          <h3>Credit Cards</h3>
          <p>Discover our competitive credit card offerings designed with attractive rewards and benefits</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;