import React from 'react'
import './SearchBox.css'
import Img5 from '../assests/img5.jpg'
import { Link } from 'react-router-dom'
import {BiHome} from 'react-icons/bi'
import {RiArrowLeftSLine} from 'react-icons/ri'
import {RiArrowRightSLine} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'

const SearchBox = () => {
  return (
    <>
    <div class="container1">
        <div>
        <Link class="link" to="/"><BiHome /></Link>
        </div>
        <label class="link">
        <input type="text" placeholder="Type here to search"   /><BsSearch />
        </label>
        <p class="link">Showing 5 results....</p>
        <div class="box">
            <img src={Img5} />
            <h2>Lorem Ipsum</h2>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="box">
            <img src={Img5} />
            <h2>Lorem Ipsum</h2>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="box">
            <img src={Img5} />
            <h2>Lorem Ipsum</h2>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <ul class="link">
            <li><RiArrowLeftSLine /><RiArrowRightSLine /></li>
    

        </ul>
    </div>
    </>

  )
}

export default SearchBox