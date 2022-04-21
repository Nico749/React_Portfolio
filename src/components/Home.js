import React from 'react';
import '../styles/Home.css';
import personalPhoto from '../Demo_photos/personal-photo-modified.png'
const styles = {
  img: {
    maxWidth:  '400px',
  }
};


export default function Home() {
  return (
    <div className='has-background-black'>
    <div className="hero is-fullheight ">
              
        <div className=" hero-body">
            <div className="container">
              <div className='img-cont'>
                <figure className="image center">
                    <img src={personalPhoto} alt="" style={styles.img}/>
                </figure>
              </div>
            </div>

            
        </div>
        <div className="container ">
            <h1 className="center is-size-1 has-text-white has-text-weight-bold is-family-sans-serif">Nico Pasqualini
            </h1>
            <h2 className="center has-text-white">Junior Web Developer</h2>
        </div>
        <div>

        </div>


    </div>
    </div>
  );
}
