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
import { SiSequelize } from 'react-icons/si'
import { SiPwa } from 'react-icons/si'
import { SiApollographql } from 'react-icons/si'
import { SiHandlebarsdotjs } from 'react-icons/si'


export default function Icons() {
    return (
        <div >
            <h1 id="skills">Skills</h1>
            <p id="icons">
            <div class="grid-container">
                
                    <div>
                        <FaGithub id="icon" color="white" size="4rem" />
                        <FaGit id="icon" color="white" size="4rem" />
                        <FaHtml5 id="icon" color="red" size="4rem" />
                        <FaCss3Alt id="icon" color="blue" size="4rem" />
                        <FaJsSquare id="icon" color="yellow" size="4rem" />
                        <FaNode id="icon" color="green" size="4rem" />
                        <FaNpm id="icon" color="red" size="4rem" />
                        <DiMysql id="icon" color="orange" size="4rem" />
                        <SiSequelize id="icon" color="#2069fa" size="4rem" />
                        <SiHandlebarsdotjs id="icon" color="white" size="4rem" />
                        <FaReact id="icon" color="lightblue" size="4rem" />
                        <SiPwa id="icon" color="white" size="4rem" />
                        <DiMongodb id="icon" color="green" size="4rem" />
                        <SiApollographql id="icon" color="white" size="4rem" />
                        <DiHeroku id="icon" color="purple" size="4rem" />
                    </div>
               
            </div>  </p>      
        </div>
    );
  }