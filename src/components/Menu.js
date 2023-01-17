import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


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
    <div className='containers'>
        {/* <h2 className='menu-header'>Menu</h2> */}
        <ul className={currSize?'menu' : 'menu-active'}>
            {/* <h2>Menu</h2> */}
            <li className='li-food'>
                <Link to='/Menu/Beverages' className='food-link'><img className='food' src='https://scontent.fblr1-4.fna.fbcdn.net/v/t39.30808-6/280492408_145163211399442_7943104624919328190_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Si4d406kkYYAX_u2KDS&_nc_ht=scontent.fblr1-4.fna&oh=00_AfCbaipJ6pS9uZBEapzOuG02AgowY7uCUGOkqWvA01nIeA&oe=63C7EEA6'
                alt='something'/>
                </Link><figcaption>Beverages</figcaption>
            </li>
            <li className='li-food'>
                <Link to='/'><img className='food' src='https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/318197676_195798489681328_3252276186439912837_n.jpg?stp=c0.112.1349.1349a_dst-jpg_s851x315&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=myab1oAxby4AX8kXsZI&tn=xMHyFYDXD06hEBwv&_nc_ht=scontent.fblr1-7.fna&oh=00_AfDFKLOSHUyrKhXlY4p6pomjPcWH6w3nb6yKX4Svrux0mQ&oe=63C78340'
                alt='something'/>
                </Link><figcaption>Snacks</figcaption>
            </li>
            <li className='li-food'>
                <Link to='/'><img className='food' src='https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-6/293520665_163674849548278_5692095946488488106_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=mZ16PuZ9_jgAX_ZnHqN&_nc_ht=scontent.fblr1-6.fna&oh=00_AfBsdOt0r4N9dWywV5__F8TCLhbWkZFRQGBisOJIiN4hkw&oe=63C83C4E'
                alt='something'/>
                </Link><figcaption>Salads</figcaption>
            </li>
            <li className='li-food'>
                <Link to='/'><img className='food' src='https://scontent.fblr1-3.fna.fbcdn.net/v/t39.30808-6/277460519_133402359242194_2381358761536650115_n.jpg?stp=dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=eh2e_M50xbgAX8Y9ksC&_nc_ht=scontent.fblr1-3.fna&oh=00_AfBHKQNMdNlhykahWUWCWVcIEVuWXWw7KV5FivlYvta8Fw&oe=63C8646C'
                alt='something'/>
                </Link><figcaption>Soul food</figcaption>
            </li>
            <li className='li-food'>
                <Link to='/'><img className='food' src='https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/284193008_150272494221847_9076553842616572802_n.jpg?stp=dst-jpg_s851x315&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=7c0QLSrOmREAX9aKxAv&_nc_ht=scontent.fblr1-7.fna&oh=00_AfDxrrBH1kWKbN23WeuH56z4uIl8Mp_Kf2UToiM_TlYlPw&oe=63C7B580'
                alt='something'/>
                </Link><figcaption>Fast Food</figcaption>
            </li>
            <li className='li-food'>
                <Link to='/'><img className='food' src='https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-6/277555549_133402702575493_2790068271376171213_n.jpg?stp=dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=jyfqxsKqKkoAX-79dhM&_nc_ht=scontent.fblr1-6.fna&oh=00_AfDab7EJua4kT27052gf7vPgHN4ekMZ3yZ--gZIfcnb8Dw&oe=63C832E2'
                alt='something'/>
                </Link><figcaption>hello</figcaption>
            </li>
            
        </ul>
        
    </div>
    </>
}

export default Menu ;