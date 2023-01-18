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
                <img className='food' src='https://scontent.fblr1-3.fna.fbcdn.net/v/t39.30808-6/277460519_133402359242194_2381358761536650115_n.jpg?stp=dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=eh2e_M50xbgAX8Y9ksC&_nc_ht=scontent.fblr1-3.fna&oh=00_AfBHKQNMdNlhykahWUWCWVcIEVuWXWw7KV5FivlYvta8Fw&oe=63C8646C'
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
                <img className='food' src='https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/284193008_150272494221847_9076553842616572802_n.jpg?stp=dst-jpg_s851x315&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=7c0QLSrOmREAX9aKxAv&_nc_ht=scontent.fblr1-7.fna&oh=00_AfDxrrBH1kWKbN23WeuH56z4uIl8Mp_Kf2UToiM_TlYlPw&oe=63C7B580'
                alt='something'/></Link>
                <figcaption>Little Plates</figcaption>
            </li>
            </ul>
        </fieldset>
    </div>
    </>
}

export default Delicacies ;