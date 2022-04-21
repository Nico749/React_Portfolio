import React from 'react';
import Footer from './Footer'
import 'bulma/css/bulma.min.css';
import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import '../styles/Projects.css'
import '../styles/PortfolioContainer.css'
import weatherScreen from '../Demo_photos/Weather_Screenshot.png'
import petScreen from '../Demo_photos/pet_homepage.png'
import sqlScreen from '../Demo_photos/Screenshot_sql.png'
import musicScreen from '../Demo_photos/Event_finder.png'


export default function Projects() {
  return (
    <div >
      <h1 id="tit" className='lineUp'>PROJECTS</h1>

      <Columns id ="col">

        <Columns.Column>
          <Card style={{ width: 300, margin: 'auto' }}>
            <Card.Image className=" card-image"
              size="16by9"
              src={petScreen}
            />

            <Card.Content >
            
                <a href="https://p-e-t-finder.herokuapp.com/" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black'> PET <br></br> FINDER </a>
             
              <p id='cardbody' className="is-size-5 has-text-black">
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
             
                <a href="https://findthemusic.herokuapp.com" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black'>FIND THE MUSIC</a>
             
              <p id='cardbody' className="is-size-5 has-text-black">
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
            
                <a href="https://github.com/Nico749/Weather_Dashboard" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black'>WEATHER DASHBOARD</a>
           
              <p id='cardbody' className="is-size-5 has-text-black">
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
          
                <a href="https://drive.google.com/file/d/1NCzj-cHnNf8OwPI1rGV62xxY-93ejvKu/view" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black'>EMPLOYEE TRACKER  </a>
             
              <p id='cardbody' className="is-size-5 has-text-black">
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
      <Footer />
    </div>
  );
}
