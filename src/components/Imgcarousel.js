import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { countries } from "./Data";

  const Imgcarousel = () => {
    return (
        <div className="slide-container">
          <Fade>
            {countries.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img src={fadeImage.image} style={{objectFit : 'cover', height : '1000px', width: '100%'}}    />
                </div>
              </div>
            ))}
          </Fade>
        </div>
      )
}

export default Imgcarousel;