import React from 'react'
import './MyExperience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <div class="container container__experience">
        
        <div class="experience__frontend">
          <h3>What skills I have</h3>
          <h2>My experience as a Frontend Developer</h2>
          <div class="experience__content">
            <article class="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>  
              <div>
              <h4>HTML</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill className="experience__details-icon" /> 
              <div>
              <h4>CSS</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>  
              <div>
              <h4>Javascript</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>  
              <div>
              <h4>Boostrap</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>  
              <div>
              <h4>Sass</h4> 
              </div>
            </article>

            <article class="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>  
              <div>
              <h4>React</h4> 
              </div>
            </article>
          </div>
        </div>
        
        
      
      </div>
    
    </section>
  )
}

export default Experience
