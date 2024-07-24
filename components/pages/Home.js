
import React from 'react';
import { Component } from 'react';
import meta from '../../assets//img/meta1.avif'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import '../pages/Home/Home.css';
import Courses from '../pages/Courses/Courses'; // Fixed import path
//import Community from './Community/Community';

function Home() 
{
  const handleClick = () => {
    window.open("https://www.w3schools.com/")
  }
  return (
    <>             
    <section>
     <div className="container">
     <div className="home-container">
      <div className="home-content">
      <h2 className='section_titile'>Learn Everything For Free!!</h2>
      <p>Master Trending Technologies With Techflix AI,Invest Your Time and return Skills</p>
       <div className='home-btns'>
        <button className='register-btn'onClick={handleClick}>Get Started</button>
        <button className='register-btn'onClick={handleClick}>Watch Now</button>
       </div>

      </div>
      <div className="home-img">
       <div className='home-img-wrapper'>
        <div className="box-01">
        <div className="box-img">
            <img src={meta} alt=""/>
          </div>
          </div>
           <div className='whatsapp-container'>
            <h5>500+ Students</h5>
          <AiOutlineWhatsApp color='green' />
           </div>
           <div className='support'>
            <h5>Active Support</h5>
           </div>
          </div>      
          
          </div>

       </div>
       

      </div>
    



</section>
<Courses />
{/* <Community /> */}
</>
  );
}

export default Home;

