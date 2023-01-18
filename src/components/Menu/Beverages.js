import React from "react";
import "./Food-items.css";
import { Link } from "react-router-dom";
const Beverages = () => {
  return (
    <>
      
        <div className='menu-container1'>
        <fieldset >
        <h2>Beverages</h2>
        <ul className='beverages-menu'>
        
          {/* <h2>Menu</h2> */}
          <li className='li-food'>
              <Link to='/Menu/HotCoffee'><img className='food' src='https://www.yesware.com/blog/_next/image/?url=https:%2F%2Fwww.yesware.com%2Fwp-content%2Fuploads%2F2014%2F05%2Fhot-coffee.jpg&w=1280&q=75'
              alt='something'/></Link>
              <figcaption>Hot Coffee</figcaption>
          </li>
          <li className='li-food'>
              <Link to ='/Menu/ColdCoffee'><img className='food' src='https://i.pinimg.com/originals/df/f7/fb/dff7fb444c5439c7fa59f83bcba03cef.jpg'
              alt='something'/></Link>
              <figcaption>Cold Coffee</figcaption>
          </li>
          <li className='li-food'>
              <Link to='/Menu/Tea'><img className='food' src='https://i0.wp.com/www.cookingfromheart.com/wp-content/uploads/2018/07/Masala-Chai-5.jpg?resize=600%2C900'
              alt='something'/></Link>
              <figcaption>Tea</figcaption>
          </li>
          <li className='li-food'>
              <Link to='/Menu/HotChoc'><img className='food' src='https://i0.wp.com/frugalhausfrau.com/wp-content/uploads/2017/11/best-hot-chocolate.jpg?ssl=1'
              alt='something'/></Link>
              <figcaption>Hot Chocolate</figcaption>
          </li>
          <li className='li-food'>
              <Link to='/Menu/Smoothies'><img className='food' src='https://cdn.shopify.com/s/files/1/0069/6467/4613/files/shutterstock_272431886_1024x1024.jpg?v=1603148034'
              alt='something'/></Link>
              <figcaption>Smoothies</figcaption>
          </li>
          
      </ul>

        </fieldset>
        </div>
    </>
  );
};

export default Beverages;


