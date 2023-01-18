import React from 'react';
import './Menu.css';
import { Link ,NavLink} from 'react-router-dom';
import { useState } from 'react';
import MenuSidebar from './MenuSidebar';
import Beverages from './Menu/Beverages';
import Snacks from './Menu/Snacks';
import Delicacies from './Menu/Delicacies';

const Menu = () =>{
    // return <h1>Menu</h1>
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
    return <>
        <div className='container_'>
        <MenuSidebar />
        
        
        <div >
            <h1>Menu</h1>
            <Beverages />
            <Snacks />
            <Delicacies />
        </div>
        </div>
        
    
    </>
}

export default Menu ;