import React, { Fragment } from 'react';
// import Menu from './Menu';
import './MenuList.css';
import MenuSidebar  from './MenuSidebar';

const MenuLayout = (props) =>{
    return <Fragment>
        <div className='containers'>
        <MenuSidebar />
        {/* <Menu /> */}
        {props.children}  
        </div>
    </Fragment>
}

export default MenuLayout ;