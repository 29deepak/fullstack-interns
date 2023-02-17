import React from 'react'
import './About.css'
import imgHome from '../assests/img1.jpg'
import { Link } from 'react-router-dom'
import {BiHome} from 'react-icons/bi'
import {ImArrowRight} from 'react-icons/im'
const About = () => {
  return (
    <>
    
    <div class="container6">
    <Link to="/"><BiHome /></Link>
        <img src={imgHome} alt="imgHome" />
        <div class="text">
          <ul class="parent">
            <li class='p1'>
              <Link to='/module1'>Module1</Link>
            </li>
            <li class='p1'>
              <Link to='/module2'>Module2</Link>
            </li>
            <li class='p1'>
              <Link to='/module3'>Module3</Link>
            </li>
            <li class='p1'>
              <Link to='/module4'>Module4</Link>
            </li>
            <li class='p1'>
              <Link to='/module5'>Module5</Link>
            </li>
            
           
          </ul>
        
        
        </div>
        <button className="icon-arrow"> Select Module<ImArrowRight/></button>
    </div>
    </>
  )
}

export default About