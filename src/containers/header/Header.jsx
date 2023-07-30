import React from 'react'
import './header.css';
const Header = () => {
  return (
    <div className="project_header" id="home">
      <div className="project_header content">
        <h1 className="gradient__text">Level Up Your Web Development Skills with React</h1>
        <p>React is a popular JavaScript library used for building user interfaces, particularly for web applications By utilizing a virtual DOM, React efficiently updates only the necessary parts of the actual DOM, boosting performance and rendering speed.Learning React opens up a world of possibilities for web development, allowing developers to create dynamic, fast, and user-friendly applications</p>
        <div className="project_content-input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div> 
        <div className="project_content-people">
          <img src={people}/>
        </div> 
      </div>
    </div>
  )
}

export default Header