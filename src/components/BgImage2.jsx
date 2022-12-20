import React from 'react';
import './BgImage2.css';


const BgImage2 = (props) => {
  return (
    <div className="bg-img2">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
   
  )
}

export default BgImage2;
