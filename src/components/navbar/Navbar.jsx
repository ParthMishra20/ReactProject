import React,{useState} from 'react'
import {RiMenu3Line , RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu=()=>(
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#whatPROJECT'>What is React?</a></p>
  <p><a href='#possibility'>React.dev</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)



const Navbar = () => {
  const[toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className="project_navbar">
      <div className="project_navbar-links">
        <div className="project_navbar-logo">
          <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="project_navbar-container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatPROJECT'>What is React?</a></p>
          <p><a href='#possibility'>React.dev</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='project_navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className='project_navbar-menu'>
        {toggleMenu
          ?<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className="project_navbar-menu-container">
           <div className='project_navbar-menu-container-links'>
            <Menu />
              <div className='project_navbar-menu-container-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar