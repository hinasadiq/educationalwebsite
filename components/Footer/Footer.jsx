import React from 'react';
import './Footer.css'
import footer from '../../assets//img/footer.png'
function Footer() {
  return (
   <footer className='footer'>
<div className="container">
<div className="footer_wrapper">

<div className="footer_box">
<div className="logo">

  <div className="logo-img">
  <img src={footer} alt=''/>
  </div>
    <h2>Techflix </h2>
  </div>
  <p>
    Embrace the future of innovation and technology
     with our cutting-edge tech bussiness solutions.
  </p>
</div>



<div className="footer_box">
<h4 className='footer_title'>Company</h4>
  <ul className='footer_links'>
   <li>
   <a href=''>Our Programs</a> 

   </li>
<li>
 <a href=''> Our Plan </a> 
</li>
<li>

 <a href=''> Become A Member</a>
</li>

  </ul>
</div>
<div className="footer_box">
<h4 className='footer_title'>Quick Links</h4>
  <ul className='footer_links'>
   <li>
  <a href=''> About Us  </a>  

   </li>
<li>

 <a href=''> Contact Us</a> 
</li>

  <li>
<a href=''> Support</a> 
</li>

  </ul>
</div>

</div>

</div>

   </footer>
  );
}

export default Footer;
