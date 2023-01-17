import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { countries } from "./Data";
import Imgcarousel from "./Imgcarousel";


const Layout = (props) =>{

    function image_render(imager){
        return <>
            <img src={imager.image} alt=""/>
        </>
    }

    return <Fragment className='background'>
        <Navbar />
        <main className='main'>{props.children}</main>
        <Footer />
    </Fragment>
}
export default Layout ;

