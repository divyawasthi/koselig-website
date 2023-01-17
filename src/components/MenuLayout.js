import React, { Fragment } from 'react';
import Menu from './Menu';
import './MenuList.css';

const MenuLayout = (props) =>{
    return <Fragment>
        <div className='containers'>
        <Menu />
        {props.children}  
        </div>
    </Fragment>
}

export default MenuLayout ;