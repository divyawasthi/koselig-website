

import React from 'react';
import './Contacts.css';

const Contacts = () =>{
    
    return (<>

<div class="image">
    <div class="form">
    
    
    <div class="content">
    <h1>Question For Us ?</h1>
    <p> Reserve a table, ask for today's special or just send us a message &#128540; :</p>
    </div>
    <div className='divider-content'>
    <form>
    <ul className='list-items'>
    
    <li>
        <input type="text" name="name" id="name" placeholder="YOUR NAME" required />
    </li>
    <li>
        <input type="email" name="email" id="email" placeholder="EMAIL ID" required />
    </li>
    <li>
        <input type="number" name="phoneno" id="phoneno" placeholder="PHONE NO" required />
    </li>
    <li>
        <textarea  id="message" name="message" rows="4" placeholder="MESSAGE?/SPECIAL REQUIREMENT  &#9993;"></textarea>
    </li>
    <li>
    <button value="Send Mail"onclick="sendMail()" id="btn" type="submit">Send Email</button>
    </li>
</ul>
</form>
<ul className='list-items2'>
    <h2>General Inquiries</h2>
    <li>ADDRESS : 104 international business centre piplod,
Surat, India, Gujarat
</li>
        <li>
            TEL : 095378 58025
        </li>
        <li>EMAIL : Koseligsurat@gmail.com</li>
        <li>
        <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=452&amp;height=620&amp;hl=en&amp;q=koselig surat&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div><style>.mapouter{'position:relative;text-align:right;width:452px;height:320px'}.gmap_canvas {'overflow:hidden;background:none!important width:452px;height:320px'}.gmap_iframe {'width:452px!important height:320px!important'}</style></div>
        </li>
</ul>

</div>






    
    
    
    
    
    </div> 
    </div> 
    </>)
}

export default Contacts ;