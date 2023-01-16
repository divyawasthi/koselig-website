import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';


const Layout = (props) =>{
    return <Fragment className='background'>
        <Navbar />
        <main className='main'>{props.children}</main>
        <Footer />
    </Fragment>
}
export default Layout ;