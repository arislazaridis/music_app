import React from 'react'
import Slider from './Slider'
import "./lemonade.css"

function Lemonade() {
    return (
        <div className="lemonade">
            <table style={{color:"black" , background:"white"}}>
                 <h1>Lemonade [180 Gram Yellow Vinyl] (LP) [Explicit]</h1>
                <h2>Beyoncé</h2>
            </table>
            <table>
                
                <tr style={{color:"black"}}><td ><strong>Side A Titles</strong></td><td><strong>Artist</strong></td><td><strong>Length</strong></td></tr>
                <tr><td>1.Pray You Catch Me</td> <td>Beyoncé</td><td>03:16</td></tr>
                <tr><td>2.Hold Up</td><td>Beyoncé</td><td>03:41</td></tr>
                <tr><td>3.Don't Hurt Yourself</td><td>Beyoncé</td><td>03:54</td></tr>

                <tr style={{color:"black"}}><td ><strong>Side B Titles</strong></td><td><strong>Artist</strong></td><td><strong>Length</strong></td></tr>
                <tr><td>1.Sorry</td> <td>Beyoncé</td><td>03:53</td></tr>
                <tr><td>2.6 Inch</td><td>Beyoncé</td><td>04:20</td></tr>
                <tr><td>3.Daddy Lessons</td><td>Beyoncé</td><td>04:48</td></tr>
                
                <tr style={{color:"black"}}><td ><strong>Side C Titles</strong></td><td><strong>Artist</strong></td><td><strong>Length</strong></td></tr>
                <tr><td>1.Love Drought</td> <td>Beyoncé</td><td>03:57</td></tr>
                <tr><td>2.Sandcastles</td><td>Beyoncé</td><td>03:03</td></tr>
                <tr><td>3.Forward</td><td>Beyoncé</td><td>01:19</td></tr>
                <tr><td>4.Freedom</td><td>Beyoncé</td><td>04:50</td></tr>
                
                </table>
        </div>
    )
}

export default Lemonade
