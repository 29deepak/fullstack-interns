import React , {useState} from 'react'
import {BiHome} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import './Module5.css'
import Img15 from '../assests/img15.jpg'
import Img16 from '../assests/img16.jpg'
import Img17 from '../assests/img17.jpg'
import { Link } from 'react-router-dom'
const Module5 = () => {
    const [toggleState , setToggleState] =useState(1);
    const toggleTab =(index)=>{
        setToggleState(index)
    }
  return (
    <>
    <div className="container8">
        <nav class="link2">
        
        <Link to="/search"><BsSearch/></Link>
        <Link to="/"><BiHome /></Link>
        </nav>
        
    <h1>Module Five</h1>
        <div className="bloc-tabs">
            <button className={toggleState===1 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(1)}>Tab1</button>
            <button className={toggleState===2 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(2)}>Tab2</button>
            <button className={toggleState===3 ? "tabs active-tabs":"tabs"} onClick={()=>toggleTab(3)}>Tab3</button>
        </div>
        <div className="content-tabs">
            <div className={toggleState === 1 ? "content active-content" :"content"}>
            <img src={Img15} />
            <div className="text">
                <h2>standard Lorem Ipsum passage</h2>
                <hr />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            </div>
            <div className={toggleState === 2 ? "content active-content" :"content"}>
                <img src={Img16} />
                <div className="text">
                <h2>De Finibus Bonorum et Malorum</h2>
                <hr />
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                </div>
            </div>
            <div className={toggleState === 3 ? "content active-content" :"content"}>
                <img src={Img17} />
                <div className="text">
                <h2>de Finibus Bonorum et Malorum</h2>
                <hr />
                <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Module5