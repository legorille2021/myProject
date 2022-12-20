import React from 'react';
import './WorkCard.css';




const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="weather_Image" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                  <div className="pro-btns">
                    <a href={props.view}  className="work-btn">View</a>
                  </div>
                </div>
            </div>
  )
}

export default WorkCard;