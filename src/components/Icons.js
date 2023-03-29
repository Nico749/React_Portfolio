import React from 'react'
import '../styles/Icons.css'
import { FaReact } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { DiHeroku } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { SiPandas, SiSequelize, SiTableau } from 'react-icons/si'
import { SiPwa } from 'react-icons/si'
import { SiApollographql } from 'react-icons/si'
import { SiHandlebarsdotjs } from 'react-icons/si'
import { SiGoogleanalytics } from 'react-icons/si'
import { SiGoogletagmanager } from 'react-icons/si'



export default function Icons() {
    return (
        <div >
            <h1 id="skills">Skills</h1>
            <p id="icons">
            <div class="grid-container">
                
                    <div>
                       <div class = 'centered-label'><SiTableau id="icon" color="white" size="4rem" /> Tableau</div>
                       <div class = 'centered-label'><SiSequelize id="icon" color="#2069fa" size="4rem" /> Sequelize</div>
                       <div class = 'centered-label'><DiMongodb id="icon" color="green" size="4rem" /> MongoDB</div>
                       
                    </div> 
                    <div>
                       <div class = 'centered-label'><SiGoogletagmanager id="icon" color="blue" size="4rem" />Tag Manager</div>  
                       <div class = 'centered-label'><SiPandas id="icon" color="darkblue" size="4rem" />Python Pandas</div>                       
                       <div class = 'centered-label'><FaNode id="icon" color="green" size="4rem" /> NodeJS</div>
                       <div class = 'centered-label'><FaCss3Alt id="icon" color="blue" size="4rem" /> CSS</div>
                       
                    </div>  
                    <div>
                       <div class = 'centered-label'><SiGoogleanalytics id="icon" color="orange" size="4rem" />Google Analytics </div> 
                       <div class = 'centered-label'><FaGithub id="icon" color="white" size="4rem" /> GitHub</div>
                       <div class = 'centered-label'><FaJsSquare id="icon" color="yellow" size="4rem" /> JS</div>
                       <div class = 'centered-label'><FaHtml5 id="icon" color="red" size="4rem" /> HTML</div>
                       
                    </div>  
                    <div>
                       <div class = 'centered-label'><DiMysql id="icon" color="orange" size="4rem" /> MySQL</div>
                       <div class = 'centered-label'><FaGit id="icon" color="white" size="4rem" /> Git</div>                   
                       <div class = 'centered-label'><FaReact id="icon" color="lightblue" size="4rem" /> React</div>
                        {/* <FaNpm id="icon" color="red" size="4rem" /> */}
                        {/* <SiPwa id="icon" color="white" size="4rem" /> */}
                        {/* <SiHandlebarsdotjs id="icon" color="white" size="4rem" /> */}
                        {/* <SiApollographql id="icon" color="white" size="4rem" /> */}
                        {/* <DiHeroku id="icon" color="purple" size="4rem" /> */}                        
                    </div>
               
            </div>  </p>      
        </div>
    );
  }