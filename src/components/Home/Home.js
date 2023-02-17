import React from 'react'
import './Home.css'
import imgHome from '../assests/img1.jpg'
import {Link} from 'react-router-dom'
import {HiArrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <>
    <div class="container4">
        <img src={imgHome} alt="imgHome" />
        <div class="text">
            <h1> perspiciatis unde omnis</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        
              
              <button className="icon-arrow"><Link to="/about" class="linkk">Enter Here</Link><HiArrowRight/></button>
          
        </div>
        
    </div>
    </>
  )
}

export default Home