import React from 'react';
import 'bulma/css/bulma.min.css';
import { Columns } from 'react-bulma-components';
import {Notification} from 'react-bulma-components';

export default function Projects() {
  return (
    <div class="hero is-fullheight has-background-black ">
      <Columns>
        <Columns.Column>
          <Notification color="black"><article class="media notification has-background-black">
            <div class="media-content has-text-white">
              <div class="content">
                <h1 class="title is-size-4 cen" > <a id="ptitle" href="https://nico749.github.io/Weather_Dashboard/" target="_blank" rel="noopener noreferrer">Weather Dashboard</a></h1>
                <p class="is-size-5">
                  Worried about the weather? With this intuitive app anyone can
                  search for a city and the weather for that location is
                  displayed with also the forecast for the following days.
                  <a href="https://nico749.github.io/Weather_Dashboard/" target="_blank" rel="noopener noreferrer">Click</a> to see the
                  deployed version and the <a
                    href="https://github.com/Nico749/Weather_Dashboard" target="_blank" rel="noopener noreferrer">GitHub</a> repo!

                </p>
              </div>
            </div>
          </article></Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification color="black"> <article class="media notification has-background-black">

            <div class="media-content has-text-white">
              <div class="content">
                <h1 class="title is-size-4 cen"><a id="ptitle" href="https://findthemusic.herokuapp.com" target="_blank" rel="noopener noreferrer">Find The Music</a></h1>
                <p class="is-size-5">
                  Find The Music allows you to
                  insert and search for a location, displaying it on a map with a
                  list of music events that will take place around that specific area in the upcoming days.
                  The deployed version can be found
                  <a href="https://findthemusic.herokuapp.com" target="_blank" rel="noopener noreferrer">here</a>
                  while <a
                    href="https://github.com/Nico749/Find_The_Music" target="_blank" rel="noopener noreferrer">this</a> is the relative repo
                </p>
              </div>
            </div>
          </article></Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification color="black"><article class="media notification has-background-black">

            <div class="media-content has-text-white">
              <div class="content">
                <h1 class="title is-size-4 cen"><a id="ptitle" href="https://github.com/Nico749/SQL_Employee_Tracker" target="_blank" rel="noopener noreferrer">SQL Employee Management</a></h1>
                <p class="is-size-5">
                  The application allows to manage a company's database by viewing,
                  adding, updating and deleting data. The user is presented with a list
                  of choices that allows him to opt for: view all the departments, all
                  the roles, all the employees, update each of them and delete items from
                  them. This application is not deployed because merely backend based, however its
                  structure and usage can be viewed <a
                    href="https://github.com/Nico749/SQL_Employee_Tracker" target="_blank" rel="noopener noreferrer">here</a>
                </p>
              </div>
            </div>
          </article></Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification color="black"><article class="media notification has-background-black">


            <div class="media-content has-text-white">
              <div class="content">
                <h1 class="title is-size-4 cen"><a id="ptitle" href="https://stormy-anchorage-52853.herokuapp.com/" target="_blank" rel="noopener noreferrer">Find a Pet</a></h1>
                <p class="is-size-5">
                  Want to find the right pet for you?
                  Find-A-Pet is a noticeboard where users can view pets that are
                  available for adoption. While any user can view a gallery of available pets,
                  only registered and logged-in users can add a new pet, remove one they posted
                  before and see all the details. <a href="https://stormy-anchorage-52853.herokuapp.com/" target="_blank" rel="noopener noreferrer">Click here</a> for the
                  deployed version and <a
                    href="https://github.com/ekubik/find-a-pet" target="_blank" rel="noopener noreferrer">here for the GitHub</a> repo!
                </p>
              </div>
            </div>
          </article></Notification>
        </Columns.Column>
      </Columns>
    </div>
  );
}
