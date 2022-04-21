import React from 'react';
import AnimatedText from 'react-animated-text-content';
import '../styles/About.css'

export default function About() {
  return (
    <div>


<AnimatedText
  type="words" // animate words or chars

  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={1.3}
  tag="p"
  className="animated-paragraph white"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
  ABOUT
</AnimatedText>;

      <section class="hero is-fullheight has-background-black ">
                {/* <h1 class="wavy center">
                    <span style="--i:1">A</span>
                    <span style="--i:2">B</span>
                    <span style="--i:3">O</span>
                    <span style="--i:4">U</span>
                    <span style="--i:5">T</span>
                    
                </h1> */}
            <div class=" hero-body">
                <div class="columns">
                    <div class="column is-6 is-offset-3 has-text-white is-size-5">
                    My name is Nico and I am a Junior Web Developer.
                    Even if I have always been interested in coding and programming, my background is a bit uncommon 
                    because during the first years of university I studied economics and then I graduated from University of Bologna in 2018 with a
                    Master's Degree in Finance. After that I started my journey in Australia where
                    I achieved a Master in Business Administration at Kaplan Business School, Melbourne.
                    During the Master, I got into project managment aspects that fascinated me so whilst there 
                    I completed various extra courses regarding that, in a way to combine
                    economics and management skills.
                    Once the Master was over, I decided to fulfill my old passion and I dove into coding
                     by enrolling at the Monash University Coding Bootcamp.
    </div>
    
    
                </div>
    
              
            </div>
    </section>
    
    </div>
  );
}
