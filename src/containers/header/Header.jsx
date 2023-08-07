import React from 'react'
import './header.css';
import people from "../../assets/people.png";


const Header = () => {
  return (
    <div className="project_header" id="home">
      <div className="project_header-content">
        <h1 className="gradient__text">Taj Hotels: Luxury Hotels & Resorts in India & the World</h1>
        <p>Taj Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited, headquartered in Mumbai, India. Incorporated by Jamsetji Tata in 1902, the company is a part of the Tata Group. The company employed over 20,000 people in the year 2010.</p>
        <div className="project_content-input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div> 
        <div className="project_content-people">
          <img src={people}/> <p>1600 ppl have registred</p>
        </div> 
      </div>
    </div>
  )
}

export default Header