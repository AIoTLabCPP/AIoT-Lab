import React, { useState } from 'react';
import './Slideshow.css'; // Import the CSS file for styling

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slideshow-container">
      {/* Image */}
      {images.map((image, index) => (
        <div
          className={index === currentIndex ? 'slide active' : 'slide'}
          key={index}
        >
          <img src={image} alt={`Slide ${index}`} height="" className="image_slideshow" />
        </div>
      ))}
      {/* Previous Button */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Next Button */}
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
