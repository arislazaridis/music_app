import React from 'react'
import {useState} from 'react';
import "./favorites.css"
import Slider from '../Slider';


function countInitial(){
    console.log("run function")
    return 0 
}

function Favorites() {
    const [count,setCount] = useState(countInitial)
    const [quantity,setQuantity] = useState(0)

    function decrementCount(){
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount(){
        setCount(prevCount => prevCount + 1)
    }


    function cart(){
        setQuantity(count)

    }


    return (
        <div>
            <div className="favorites">
                <button className="btndecr" disabled={count===0} onClick={decrementCount}>-</button>
                <span className="count">{count}</span>
                <button className="btnincr" onClick={incrementCount}>+</button>
                <button className="btnfav" onClick={cart}>Add to Cart</button>
                
                
                <div>
  
            </div>
                
            </div>
            
           
        </div>
        
    )
}

export default Favorites
