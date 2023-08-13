import React from 'react'
import './features.css';
const Feature = ({title,text}) => {
  return (
    <div className="features-container">
      <div className="features-title">
      <div />
      <h1>{title}</h1>
      </div>
      <div className="features-text">
        {text}
      </div>
    </div>
  )
}

export default Feature