import React from "react";
import "./Beverages.css";
import Button from '../Button';
import {useState} from 'react';

const Beverages = () => {
    const [currSize,setSize] = useState(true)
    const resizeWindow = () =>{
        if (window.innerWidth <= 1200){
            setSize(false)
        }
        else{
            setSize(true);
        }
    }
    window.addEventListener('resize',resizeWindow);
  return (
    <>
      <div>  
          <ul className="bev-container">
            <li><button>Hot coffee</button></li>
            <li><button>Cold coffee</button></li>
            <li><button>Slow coffee</button></li>
            <li><button>Smoothies and Shakes</button></li> 
          </ul>
        
      </div>
    </>
  );
};

export default Beverages;
