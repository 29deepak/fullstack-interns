import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Pagination.css'
import {BiHome} from 'react-icons/bi'

const renderData = data =>{
    return(
        <ul>
            {data.map((each)=>{
                return (<ul class="pag1">
                    <li key={each.id}>{each.link}</li>
                    </ul>
                )
            })}
        </ul>
    )
}
const data=[
    {
        id:1,
        link:<Link to="/about">1</Link>
    },
    {
        id:2,
        link:<Link to="/module1">2</Link>
    },
    {
        id:3,
        link:<Link to="/module2">3</Link>
    },
    {
        id:4,
        link:<Link to="/module3">4</Link>
    },
    {
        id:5,
        link:<Link to="/module4">5</Link>
    },
    {
        id:6,
        link:<Link to="/module5">6</Link>
    },
    {
        id:7,
        link:<Link to="/search">7</Link>
    },

]
const Pagination = () => {
  return (
    <div class="page">
    <Link to="/"><BiHome /></Link>
    {renderData(data)}
    </div>
  )
}

export default Pagination