import React from 'react'
import header from "../assets/disk3.jpg"
import "./header.css"

function Header() {
    return (
        <div>
        <h1 style={{color:"black" , backgroundColor:"white",alignItems:"center",textAlign:"center" ,width:"100%",fontFamily:"Brush Script MT, Brush Script Std, cursive",fontSize:"60px"}}>Vinyl Shop</h1>
        <div id="wrapperHeader">
            
            <div id="header">
                    <img src={header} width="1000" height="200" alt="logo" />
                    
            </div> 
    </div>
    </div>
    )
}

export default Header
