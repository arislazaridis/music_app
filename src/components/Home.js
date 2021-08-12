import React from 'react'
import Slider from './Slider'
import Favorites from './Favorites';
import './Home.css';

function Home() {
    return (
        <div>
               <table style={{color:"black" ,fontSize:"20px" }}> 


               Από το 1998, το <strong>Vinyl Shop</strong> αποτελεί τόπο συνάντησης των μουσικόφιλων της Αθήνας.
Στο Vinyl Shop  διαθέτουμε καινούργια βινύλια και cd, γι αυτούς που αγαπούν την rock, pop, jazz, soul, funk και blues μουσική και δεν κρύβουμε την ιδιαίτερη αδυναμία μας στην indie σκηνή.
Οι διαθέσιμοι τίτλοι μας σε βινύλιο και cd πωλούνται στο Vinyl Marketplace. Μπορείτε να δώσετε την παραγγελία σας εκεί, αλλά και κατευθείαν σε εμάς τηλεφωνικά ή με Email/ Social Media message, αφού δείτε τους τίτλους που σας ενδιαφέρουν παρακάτω:




</table>
           
            <div className="slider">
                <Slider/>
                
            </div>

      
                
                
        </div>
        
    )
}

export default Home
