import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='top'>
          <div className='item'>
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Writing & Translation</span>
            <span>Programming & Tech</span>
          </div>
          <div className='item'>
            <h2>For Clients</h2>
            <span>How Fichain Works</span>
            <span>Trust & Safety</span>
            <span>Quality Guide</span>
          </div>
          <div className='item'>
            <h2>For Freelancers</h2>
            <span>Become a Fichain Freelancer</span>
            <span>Community Hub</span>
            <span>Events</span>
          </div>
        </div>
        <hr/>
        <div className='bottom'>
          <div className='left'>
            <h2>fichain</h2>
            <span>© Fichain International Ltd. 2024</span>
          </div>
          <div className='right'>
            <div className='social'>
              <img src='img/twitter.png' alt=''/>
              <img src='img/facebook.png' alt=''/>
              <img src='img/linkedin.png' alt=''/>
              <img src='img/pinterest.png' alt=''/>
              <img src='img/instagram.png' alt=''/>
            </div>
            <div className='link'>
              <img src='./img/language.png' alt=''/>
              <span>English</span>
            </div>
            <div className='link'>
              <img src='./img/coin.png' alt=''/>
              <span>USD</span>
            </div>
            <img src='./img/accessibility.png' alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer