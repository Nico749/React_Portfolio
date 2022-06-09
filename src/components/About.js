import React from 'react';
import Footer from './Footer'
import Icons from './Icons'
import '../styles/About.css'
import '../styles/PortfolioContainer.css'

export default function About() {
  return (
    <div>
      <h1 id="tit" className='lineUp'>ABOUT</h1>

      <section className="hero is-fullheight has-background-black ">

        <div className=" hero-body">
          <div className="columns">
            <div className="column is-6 is-offset-3 has-text-white is-size-5">
              Hi! I'm Nico and I am a Junior Web Developer.
              Even if I have always been interested in coding and programming, my background is a bit uncommon
              because during the first years of university I studied economics and then I graduated from University of Bologna in 2018 with a
              Master's Degree in Finance. After that I started my journey in Australia where
              I achieved a Master in Business Administration at Kaplan Business School, Melbourne.
              During the Master, I got into project managment aspects that fascinated me so whilst there
              I completed various extra courses regarding that, in a way to combine
              economics and management skills.
              Once the Master was over, I decided to fulfill my old passion and I dove into coding
              by accomplish the Monash University Coding Bootcamp. 
            </div>
          </div>
        </div>
        <Icons />
      </section>
      <Footer />
    </div>
  );
}
