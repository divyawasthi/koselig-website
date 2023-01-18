import React from 'react';
import './Food-items.css';
import { Link } from 'react-router-dom';
const Snacks = () =>{
    return <>
    <div className='menu-container1'>
     <fieldset>
            <h2>Snacks</h2>
                <ul className='snacks-menu'>
                <li className='li-food'>
                <Link to='/Menu/Cookies' exact><img className='food' src='https://i1.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/09/Oatmeal-Chocolate-Chip-Cookies-4.jpg?resize=1360%2C2040&ssl=1'
                alt='something'/></Link>
                <figcaption>Cookies</figcaption>
            </li>
            <li className='li-food'>
                <Link to='/Menu/Sandwhich'exact><img className='food' src='https://th.bing.com/th/id/OIP.avCPgaAchFkkm0MNFG9pLQHaHa?pid=ImgDet&rs=1'
                alt='something'/></Link>
                <figcaption>Sandwhich & Toast</figcaption>
            </li>
            <li className='li-food'>
               <Link to='/Menu/Bagel' exact><img className='food' src='https://foodsguy.com/wp-content/uploads/2020/04/Freeze-Croissants.jpg'
                alt='something'/></Link>
                <figcaption>Bagel & Crossiant</figcaption>
            </li>
                </ul>
          
            </fieldset>
    </div>
    </>

}

export default Snacks ;