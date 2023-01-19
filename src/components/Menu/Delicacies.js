import React from 'react';
import './Food-items.css';
import { Link } from 'react-router-dom';

const Delicacies = () =>{
    return <>
    <div className='menu-container1'>
        <fieldset>
        <h2>Our Delicacies</h2>
            <ul className='del-menu'>
            <li className='li-food'><Link to='/Menu/Soul'>
                <img className='food' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQH49waX_-KXhT09Z5dF19nv292n22KbwZQ&usqp=CAU'
                alt='something'/></Link>
                <figcaption>Soul Food</figcaption>
            </li>
            <li className='li-food'>
                <Link to='/Menu/Salads'>
                <img className='food' src='https://th.bing.com/th/id/OIP.xiJ8WAb_SxNAaOysCw3KkwHaE6?pid=ImgDet&rs=1'
                alt='something'/></Link>
                <figcaption>Salads</figcaption>
            </li>
            <li className='li-food'>
                <Link to='/Menu/Italian'>
                <img className='food' src='https://th.bing.com/th/id/OIP.BMK-RP6OgbSvDIl0_8eFuAHaFj?pid=ImgDet&rs=1'
                alt='something'/></Link>
                <figcaption>Italian</figcaption>
            </li>
            <li className='li-food'>
                <Link to ='/Menu/Plates'>
                <img className='food' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkGDKdt_lKgUzhsMw3SHurTAwMxMuMoxXoA&usqp=CAU'
                alt='something'/></Link>
                <figcaption>Little Plates</figcaption>
            </li>
            </ul>
        </fieldset>
    </div>
    </>
}

export default Delicacies ;
