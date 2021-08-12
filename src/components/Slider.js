import React from 'react'
import Beyonce from "../assets/beyonce.jpg";
import billie from "../assets/Billie-vinyl2.jpg";
import metallica from "../assets/metallica4.jpeg";
import deeppurple from "../assets/deeppurple.jpeg";
import "./slider.css";
import Favorites from './Favorites';
import axios from 'axios';
import Lemonade from './Lemonade';
import Infinite from './Infinite';
import HappierBillie from './HappierBillie';






const images = [
    {
        id: 1,
        imgUrl: `${Beyonce}`,
        ytLink:"https://www.youtube.com/watch?v=bnVUHWCynig",
        price:"33,20$",
        favorites:false,
        title:"Lemonade",
        singer:"Beyoncé",
        href:"./Lemonade"
        
    },  
    {
        id: 2,
        imgUrl: `${billie}`,
        ytLink:"https://www.youtube.com/watch?v=a_OidsYb3tc",
        price:"29,20$",
        favorites:false,
        title:"Happier Than Ever",
        singer:"Billie Eilish",
        href:"./HappierBillie"
        
    },
    {
        id: 3,
        imgUrl: `${deeppurple}`,
        ytLink:"https://www.youtube.com/watch?v=PfAWReBmxEs",
        price:"51,20$",
        favorites:false,
        title:"Infinite",
        singer:"Deep Purple",
        href:"./Infinite"
        
    },
    {
        id: 4,
        imgUrl: `${metallica}`,
        ytLink:"https://www.youtube.com/watch?v=tAGnKpE4NCI",
        price:"42,20$",
        favorites:false,
        title:"Death Magnetic",
        singer:"Metallica"
        
    }
]

const Slider = (props) => {
    const [position, setPosition] = React.useState(0)
    const [favorites,setFavorites] = React.useState()
    const [iconColor,setIconColor] = React.useState("white");

    const imageUrl = images[position].imgUrl
    

   

    const handleNext = () => {
        if(position === images.length - 1){
            return setPosition(0)
        } 
        setPosition(position + 1)
    }

    const handleBack = () => {
        if(position === 0){
            return setPosition(images.length - 1)
        } 
        setPosition(position - 1)
    }

    const handlequant =() => {
        
        setFavorites(images[position].favorites=true)
        let formData = new FormData();
        formData.append('title', images[position].title)
        formData.append('singer', images[position].singer)
       formData.append('price', images[position].price)

       console.log(formData);
       axios({
           method: 'post',
           url: 'http://localhost/php_labs/contact_fav.php',
           data: formData,
           config: { headers: { 'Content-Type': 'multipart/form-data' } }
       })
       
       console.log(images[position].title)

    }

   /*const Iconfav = ()=>{
        setIconColor("grey")
        
    } */
    
    console.log(images)
    

   
    return (
     

        <div className="slider">
            <div className="button_slider">
                




            </div>
            <figure className="photos">
                
                <a href={images[position].href} ><img className="photo" src= {imageUrl}  alt={images[position].id} /> </a>
                <div className="button_back">
                        <button onClick={handleBack}> {"<"} </button>
                        <a className="youtube" href={images[position].ytLink} class="rainbow rainbow-1">ΥουΤube</a>
                        <button onClick={handleNext}> {">"} </button>
                        
                        
                        
                       
                        
                        
                </div>
                         <h1 className="price">Price: {images[position].price}</h1>
                         
                         <button className="likeBtn" onClick={function(event){handlequant(event);  /*Iconfav(); */}} style={{backgroundColor:iconColor}} >Add to Favorites
                            
                         </button>
                         <Favorites/>
                         
                         

                
                
                
            </figure>
            	
           
            



        </div>
        
        
    )
}


export default Slider

