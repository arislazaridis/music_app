import React from 'react'
import "./nav.css"
import App from '../App'
import { Link } from 'react-router-dom'

const Nav = ({categories}) => {
    const navStyle = {
        color:'white'
    }
    return (
            <nav className="container">
                <div > 
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhgiUcgUeQhwIxI7ydWx-6q8Q0qsIvyhq-Q&usqp=CAU" alt="logo"></img>
                </div>

                <div className="items">
                    {categories.map((i, index)=> <Link style={navStyle} to={`/${i}`} key={index} className="item" >{i}</Link> )} 
                    {/* <div className="item">Home</div>
                    <div className="item" >About</div>
                    <div className="item">Sign up</div> */}
                </div>
                

            </nav>
    )
}

export default Nav;
