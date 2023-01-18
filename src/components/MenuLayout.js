import React, { Fragment } from 'react';
<<<<<<< HEAD
// import Menu from './Menu';
import './MenuList.css';
import MenuSidebar  from './MenuSidebar';
=======
import Menu from './Menu';
import './MenuList.css';
>>>>>>> maste

const MenuLayout = (props) =>{
    return <Fragment>
        <div className='containers'>
<<<<<<< HEAD
        <MenuSidebar />
        {/* <Menu /> */}
=======
        <Menu />
>>>>>>> maste
        {props.children}  
        </div>
    </Fragment>
}

export default MenuLayout ;