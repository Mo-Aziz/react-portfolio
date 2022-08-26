import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import {
  AiFillHome,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from 'react-icons/ai'

import {
  FaEnvelope,
  FaUserAlt
} from 'react-icons/fa'
 
import MyLogo from '../../assets/images/malogo.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={MyLogo} alt="mylogo" />
      </Link>
      {/* nav section */}

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <AiFillHome color="#7a8888" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FaUserAlt  color="#7a8888" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FaEnvelope  color="#7a8888" />
        </NavLink>
      </nav>
      <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aziz-2021/"
            >
              <AiFillLinkedin className='linked-in' />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aziz-2021/"
            >
              <AiFillGithub className='github'  />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aziz-2021/"
            >
              <AiFillYoutube className='youtube'/>
            </a>
          </li>
          <li></li>
        </ul>
    </div>
  )
}

export default Sidebar
