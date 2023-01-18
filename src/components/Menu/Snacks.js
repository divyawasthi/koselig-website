import React from 'react';
import './Food-items.css';

const Snacks = () =>{
    return <>
    <div className='menu-container1'>
     <fieldset>
            <h2>Snacks</h2>
                <ul className='snacks-menu'>
                <li className='li-food'>
                <img className='food' src='https://i1.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/09/Oatmeal-Chocolate-Chip-Cookies-4.jpg?resize=1360%2C2040&ssl=1'
                alt='something'/>
                <figcaption>Cookies</figcaption>
            </li>
            <li className='li-food'>
                <img className='food' src='https://th.bing.com/th/id/OIP.avCPgaAchFkkm0MNFG9pLQHaHa?pid=ImgDet&rs=1'
                alt='something'/>
                <figcaption>Sandwhich & Toast</figcaption>
            </li>
            <li className='li-food'>
                <img className='food' src='https://foodsguy.com/wp-content/uploads/2020/04/Freeze-Croissants.jpg'
                alt='something'/>
                <figcaption>Bagel & Crossiant</figcaption>
            </li>
                </ul>
          
            </fieldset>
    </div>
    </>

}

export default Snacks ;