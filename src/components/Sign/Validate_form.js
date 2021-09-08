import React,{useCallback} from 'react'
import "./form.style.css"
import { useState } from 'react';
import axios from 'axios';





//array
//xisi gia labels, stoixeiwn formas
    const inputs = [
        {
            id:'username',
            label:'username',
            name:'username',
            type:'text',
            
        
        },
        {
            id:"password",
            label:"password",
            name:"password",
            type:"password",
            
        },
        {   
            id:"email",
            label:"email",
            name:"email",
            type:"email",
            
        }
    ]


  //object
  //arxiki morfi username,passwords
  const initialState = {
    username: '',
    password: '',
    email: '',
};




function Validate_form() {

    //usestate gia input
    const [inputValues,setInputValues] = useState(initialState);

    //usestate gia elegxo input
    const [error,setError] = useState(false);

    //times gia username kai password
    //const {username,password,email} = inputValues;
    
   /* const conString = "postgres://postgres:267702677@localhost:5432/validationForm";*/
   
    
    const onSubmit = (e) =>{
       
        e.preventDefault();
        console.log('Form submitted');
        setInputValues(initialState);
        console.log(inputValues)
        alert(`Επιτυχής Εγγραφή μέλους ${inputValues.email}`);
        setError("");
        //http://localhost/php_labs/contact.php
        
        /*fetch('http://localhost/php_labs/contact.php')
            .then(response => response.text())
            .then(inputValues => ({username:inputValues.username,
            password:inputValues.password,email:inputValues.email
        }),console.log("egine"));*/
       
       /* const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...inputValues }),
            mode:'cors'
        };

        fetch('http://localhost/php_labs/contact.php',requestOptions ) */
        	

        /*axios.post(`${contact.php}`,{
            username:inputValues.username,
            password:inputValues.password,
            email:inputValues.email,

        }).then(res=>{console.log(res.inputValues)})*/
        axios({
            method: 'post',
            url: "http://localhost/php_labs/contact.php",
            data: setInputValues(initialState),
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        }
       
    const onChange= useCallback((e) => {
        
        setError("");
        const {name,value} = e.target;

        if (value.length<4 && name==="password"){
            setError(name);
        }
     
        
        setInputValues({...inputValues,[name]:value});


        
       
    },[inputValues]);

   // console.log(data);



    return (
        <section>
        <div className="Form" action="C:/xampp/htdocs/arisphp/htdocs/php_labs/contact.php" method={'POST'}>
            <h1>CREATE ACCOUNT</h1>
            <form onSubmit={onSubmit} >
                {inputs.map((input,index)=>{
                    return (
                        <div key={index}>
                            
                                <label className="label">{input.label}</label>
                            
                           
                            <p>
                                <input onChange={onChange}
                                className="input"  
                                type={input.type}
                                name={input.name}
                                id={input.id}
                                value={inputValues[input.name]}
                                
                                
    
                                
                               
                                />
                            </p>
                            <div style={{color:"red" , padding:"10px"}}>
                           {error===input.name && "Ο κωδικος πρέπει να έχει τουλάχιστον 8χαρακτήρες" } 
                           
                              

                            </div> 
                        </div>
                              
                    );
                })}
            <button disabled={error!==""} className="btn" type="submit">submit</button>
            </form>  
            
        </div>
        </section>
        
    )

    
}


export default Validate_form
