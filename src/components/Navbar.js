import React,{useState} from 'react';
import {NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import Button from './Button';
import About from './About';


const Navbar = () =>{
    const [click,setclick] = useState(false)
    const handleClick = () => setclick(!click);
    const closeMobilemenu = () => setclick(false);
    const [button,setButton] = useState(true);

    const showButton = () =>{
        if (window.innerWidth <=960){
            setButton(false)
        }
        else{
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton)


    return <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobilemenu}>Koselig </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click?'fas fa-times':'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                        {/* <Button>Sign</Button> */}
                        <NavLink to='/About' className='nav-links'
                        onClick={closeMobilemenu}>About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/Menu' className='nav-links' onClick={closeMobilemenu}>Menu</NavLink>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contact' className='nav-links' onClick={closeMobilemenu}>Contacts</Link>
                    </li>
                    <li className='nav-item'>
                        <Button to='/Login' onClick={closeMobilemenu}>Login</Button>
                    </li>
                    
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            </div>
            
        </nav>
    </>
} 

export default Navbar ;