import React from 'react';
import 'bulma/css/bulma.min.css';
import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import { Media } from 'react-bulma-components';
import '../styles/Projects.css'
import weatherScreen from '../Demo_photos/Weather_Screenshot.png'
import petScreen from '../Demo_photos/pet_homepage.png'
import sqlScreen from '../Demo_photos/Screenshot_sql.png'
import musicScreen from '../Demo_photos/Event_finder.png'

import AnimatedText from 'react-animated-text-content';


export default function Projects() {
  return (
    <div >



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
        duration={.9}
        tag="p"
        className="animated-paragraph white"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        PROJECTS
      </AnimatedText>;


      <Columns>

      <Columns.Column>
          <Card style={{ width: 300, margin: 'auto' }}>
            <Card.Image className=" card-image"
              size="16by9"
              src={petScreen}
            />

            <Card.Content >
              <Media>
                <a href="https://p-e-t-finder.herokuapp.com/" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black'> PET FINDERRRRR </a>
              </Media>
              <p id='cardbody' class="is-size-5 has-text-black">
                Want to find the right pet for you?
                Pet Finder is a noticeboard where users can view pets that are
                available for adoption. While any user can view a gallery of available pets,
                only registered and logged-in users can add a new pet, remove one they posted
                before and see all the details. <a id="cardlink" href="https://p-e-t-finder.herokuapp.com/" target="_blank" rel="noopener noreferrer">Click here</a> for the
                deployed version and <a id="cardlink"
                  href="https://github.com/Nico749/Pet_Finder" target="_blank" rel="noopener noreferrer">here for the GitHub</a> repo!
              </p>
            </Card.Content>
          </Card>
        </Columns.Column>

        <Columns.Column>
          <Card style={{ width: 300, margin: 'auto' }}>
            <Card.Image className=" card-image"
              size="16by9"
              src={musicScreen}
            />

            <Card.Content >
              <Media>
                <a href="https://findthemusic.herokuapp.com" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black'>FIND THE MUSIC</a>
              </Media>
              <p id='cardbody' class="is-size-5 has-text-black">
                Find The Music allows you to
                insert and search for a location, displaying it on a map with a
                list of music events that will take place around that specific area in the upcoming days.
                The deployed version can be found {' '}
                <a id="cardlink" href="https://findthemusic.herokuapp.com" target="_blank" rel="noopener noreferrer">  here </a>
                {' '}while {' '} <a id="cardlink"
                  href="https://github.com/Nico749/Find_The_Music" target="_blank" rel="noopener noreferrer"> this </a> is the relative repo
              </p>
            </Card.Content>
          </Card>
        </Columns.Column>


        <Columns.Column >

          <Card style={{ width: 300, margin: 'auto' }}>
            <Card.Image className=" card-image"
              size="16by9"
              src={weatherScreen}
            />

            <Card.Content >
              <Media>
                <a href="https://github.com/Nico749/Weather_Dashboard" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black'>WEATHER DASHBOARD</a>
              </Media>
              <p id='cardbody' class="is-size-5 has-text-black">
                Worried about the weather? With this intuitive app anyone can
                search for a city and the weather for that location is
                displayed with also the forecast for the following days. <br></br>
                <a id="cardlink" href="https://nico749.github.io/Weather_Dashboard/" target="_blank" rel="noopener noreferrer">Click</a> to see the
                deployed version and the <a id="cardlink"
                  href="https://github.com/Nico749/Weather_Dashboard" target="_blank" rel="noopener noreferrer">GitHub</a> repo!

              </p>
            </Card.Content>
          </Card>
        </Columns.Column>

       
        <Columns.Column>
          <Card style={{ width: 300, margin: 'auto' }}>
            <Card.Image className=" card-image"
              size="16by9"
              src={sqlScreen}
            />

            <Card.Content >
              <Media>
                <a href="" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black'>EMPLOYEE TRACKER  </a>
              </Media>
              <p id='cardbody' class="is-size-5 has-text-black">
                The application allows to manage a company's database by viewing,
                adding, updating and deleting data. The user is presented with a list
                of choices that allows him to opt for: view all the departments, all
                the roles, all the employees, update each of them and delete items from
                them. This application is not deployed because merely backend based, however <a id="cardlink"
                  href="https://drive.google.com/file/d/1NCzj-cHnNf8OwPI1rGV62xxY-93ejvKu/view" target="_blank" rel="noopener noreferrer">this</a> is a short walkthrough video of the working application and 
                <a id="cardlink"
                  href="https://github.com/Nico749/SQL_Employee_Tracker" target="_blank" rel="noopener noreferrer"> this </a> is its structure and usage.
              </p>
            </Card.Content>
          </Card>
        </Columns.Column>

      
      </Columns>
    </div>
  );
}
