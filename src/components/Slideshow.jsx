import React, { useState, useEffect } from 'react';
import '../assets/css/slideshow.css'; 

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="slideshow-container hidden">
      <button className="button" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="slide active">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="image_slideshow" />
      </div>
    
      <button className="button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
