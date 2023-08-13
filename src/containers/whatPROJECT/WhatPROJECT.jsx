import React from 'react'
import './whatPROJECT.css'
import { Feature } from '../../components'
const WhatPROJECT = () => {
  return (
    <div className="project_section-margin" id="whatPROJECT">
      <div className="project-feature">
        <Feature title="Explore TAJ" text="Descend into a world that was once the sole preserve of royalty, step onto the soft, white sand beaches at a secluded island or discover the hidden secrets of mist-draped hills with Taj"/>
      </div>
      <div className="project_heading">
        <h1 className="gradient-text">i have to make a carasoul</h1>
      
      </div>
      <div className="project_container">
        <Feature title="BEACH RETREATS" text="Wake up to the sound of waves lapping lazily at the shore. Uncover serenity and marvel at the wealth of beauty within the glittering blue seas. Give in to the siren song of the sun, sand and surf with Beach Retreats."/> 
        <Feature title="HILL STATIONS" text="Gaze at the mist rolling in over the hill-tops from your luxurious villa. Marvel at glorious sunsets that will take your breath away from a private deck"/> 
        <Feature title="ROYAL INDIA" text="Wander through the storied halls of a fairy tale palace, where dreams come to life. Retreat into your majestic suite, inspired by elegance."/>   
      </div>
    </div>
  )
}

export default WhatPROJECT