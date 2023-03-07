import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { countries } from "./Data";
import './Img.css';
  const Imgcarousel = () => {
    return (
        <div className="slide-container">
          <Fade>
            {countries.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img className='img ' src={fadeImage.image} style={{objectFit : 'cover', height : 'auto', width: '100%' }} alt=''/>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      )
}

export default Imgcarousel;