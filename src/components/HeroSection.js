import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

        <video src="https://player.vimeo.com/progressive_redirect/playback/629172467/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=18a82a968da9e33c9a8575c699c083b9a02e6593f20f4c738b19879e9ffdad26" autoPlay loop muted />

        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>

        <div className='hero-btns'>

            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> GET STARTED </Button>

            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> WATCH TRAILER <i className='far fa-play-circle'>  </i> </Button>


        </div>

        {/* <video src='https://github.com/briancodex/react-website-v1/blob/master/public/videos/video-1.mp4' autoPlay loop muted /> */}
      
    </div>
  )
}

export default HeroSection
