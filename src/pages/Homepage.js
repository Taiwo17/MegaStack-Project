import React from 'react';
import Navbar from '../components/Navbar';
import './homepage.css';

function Homepage() {
  return (
    <>
      <Navbar />
      <div className='hero-container'>
        <div className='hero-section'>
          <h1 className='hero-title'>
            Your partner in building amazing
            <br /> digital products
          </h1>
          <p className='hero-content'>
            We are a software development agency leveraging design
            <br /> thinking framework to help our clients meet their <br />{' '}
            increasing revenue with best users experience.
          </p>
          <button className='hero-btn'>Let's Talk</button>
        </div>
      </div>
      <div className='main-container'>
        <h2 className='main-content'>Our Process</h2>
        <div className='card-section'>
          <div className='image-card'>
            <img
              className='user-img'
              src='/images/User research.png'
              alt='User research'
            />
            <h3 className='card-text'>Detailed UX Research</h3>
            <p className='card-description'>
              We focus on understanding user behaviors, needs, and motivations
              through observation techniques, task analysis, and other feedback
              methodologies
            </p>
          </div>
          <div className='image-card'>
            <img
              className='user-img'
              src='/images/Component 4.png'
              alt='User research'
            />
            <h3 className='card-text'>Interactive User interface</h3>
            <p className='card-description'>
              Our design prioritizes the user's visual experience. Creating
              functional, reliable, and enjoyable UI designs.
            </p>
          </div>
          <div className='image-card'>
            <img
              className='user-img'
              src='/images/Pair programming.png'
              alt='User research'
            />
            <h3 className='card-text'>Software Development </h3>
            <p className='card-description'>
              Our activities are dedicated to the processes of creating,
              designing, deploying and supporting software to its optimum level.
            </p>
          </div>
        </div>

        {/* Image Section  */}
        <div className='big-container'>
          <div className='services'>
            <h3 className='service-title'>Our Services</h3>
            <p className='service-content'>We create notable occurences</p>
          </div>
          <div className='big-card-image'>
            <div className='big-card-container'>
              <h3 className='image-content'>User Research & Experiences</h3>
              <img src='/images/Rectangle 19.png' alt='' className='big-card' />
            </div>
            <div className='big-card-container'>
              <h3 className='image-content'>Web & Mobile Design</h3>
              <img src='/images/Rectangle 21.png' alt='' className='big-card' />
            </div>
            <div className='big-card-container'>
              <h3 className='image-content'>Software Development</h3>
              <img src='/images/Rectangle 22.png' alt='' className='big-card' />
            </div>
            <div className='big-card-container'>
              <h3 className='image-content'>Brand Management</h3>
              <img src='/images/Rectangle 23.png' alt='' className='big-card' />
            </div>
          </div>
        </div>

        <h3 className='work-title'>Our Client Work</h3>
        <p className='work-description'>We have worked with diverse brands</p>

        <div className='second-image-section'>
          <div className='image-first-section'>
            <img
              className='big-img-cards'
              src='/images/Rectangle 34.png'
              alt='Cocacola'
            />
            <p className='work-content'>The Cocacola Company</p>
          </div>
          <div className='image-second-section'>
            <img
              className='big-img-cards'
              src='/images/Rectangle 35.png'
              alt='Red Bull'
            />
            <p className='work-content'>Red Bull </p>
          </div>
          <div className='image-second-section'>
            <img
              className='big-img-cards'
              src='/images/Rectangle 36.png'
              alt='MacDonalds'
            />
            <p className='work-content'>Macdonalds </p>
          </div>
          <div className='image-second-section'>
            <img
              className='big-img-cards'
              src='/images/Rectangle 37.png'
              alt='Google'
            />
            <p className='work-content'>Google</p>
          </div>
        </div>
        <div className='parralex'>
          <div className='parralex-section'>
            <h2 className='parralex-title'>
              Let’s Build Amazing Digital Products Together
            </h2>
            <p className='parralex-content'>
              We are equipped to help clients meet their business goal of
              increasing their revenue while
              <br /> giving their users the best experience.
            </p>
            <button className='parralex-btn'>Reach Out</button>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-logo'>
            <img src='/images/Logo-9 1.png' alt='Footer Logo' />
          </div>
          <div className='footer-contact'>
            <p className='contact-text'>Contact</p>
            <div className='contact-menu'>
              <img src='/images/facebook.png' alt='' className='menu-img' />
              <p className='stack-text'>Megastacktech</p>
            </div>
            <div className='contact-menu'>
              <img src='/images/instagram.png' alt='' className='menu-img' />
              <p className='stack-text'>Megastacktech</p>
            </div>
            <div className='contact-menu'>
              <img src='/images/whatsapp.png' alt='' className='menu-img' />
              <p className='stack-text'>Megastacktech</p>
            </div>
            <div className='contact-menu'>
              <img src='/images/message.png' alt='' className='menu-img' />
              <p className='stack-text'>Info.Megastacktech@gmail.com</p>
            </div>
          </div>
          <div className='footer-service'>
            <p className='contact-text footer-text-desc'>Services</p>
            <p className='text-footer'>User Research Experience</p>
            <p className='text-footer'>Web and Mobile Design</p>
            <p className='text-footer'>Brand Management</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
