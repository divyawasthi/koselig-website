import React from 'react';
import './MenuSidebar.css';
import { NavLink } from 'react-router-dom';

const MenuSidebar = () =>{
    return <>
        <div className='menu-sidebar'>
            <ul>
                <li>
                    <h2><NavLink to='/Menu/Beverages' id='beve' activeClassName='active'>Beverages</NavLink></h2>
                    <ul>
                        <li><NavLink to='/Menu/HotCoffee' id='hot' activeClassName='active'>Hot Coffee</NavLink></li>
                        <li><NavLink to='/Menu/ColdCoffee' id='cold'>Cold Coffee</NavLink></li>
                        <li><NavLink to='/Menu/Tea' id='tea'>Tea</NavLink></li>
                        <li><NavLink to='/Menu/HotChoc'id='choc'>Hot Choclate</NavLink></li>
                        <li><NavLink to='/Menu/Smoothies' id='smooth'>Smoothies</NavLink></li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <h2><NavLink to='/Menu/Snacks' id='Snacks'>Snacks</NavLink></h2>
                    <ul>
                        <li><NavLink to='/Menu/Cookies' id='cook'>Cookies</NavLink></li>
                        <li><NavLink to='/Menu/Sandwhich'id='sand'>Sandwhich & Toast</NavLink></li>
                        <li><NavLink to='/Menu/Bagel' id='bag'>Bagel & Crossiant</NavLink></li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <h2><NavLink to='/Menu/Delicacies' id='delicacy'>Our Delicacies</NavLink></h2>
                    <ul>
                        <li><NavLink to='/Menu/Soul' id='soul'>Soul Food</NavLink></li>
                        <li><NavLink to='/Menu/Salads' id='salad'>Salads</NavLink></li>
                        <li><NavLink to='/Menu/Italian' id='it'>Italian</NavLink></li>
                        <li><NavLink to='/Menu/Italian' id='plates'>Little Plates</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    </>
}

export default MenuSidebar ;