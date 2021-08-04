import React, { Component } from 'react';
import "./validate.css"
import axios from 'axios';


class Validate extends Component {
  constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
        email:'',
        error:'',
    }
  }

  


  
  handleFormSubmit(e){
    e.preventDefault();
    alert(`Επιτυχής Εγγραφή μέλους ${this.state.email}`);

    console.log(this.state);
    let formData = new FormData();
         formData.append('username', this.state.username)
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)

        console.log(formData);
        axios({
            method: 'post',
            url: 'http://localhost/php_labs/contact.php',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
      }
    /*axios({
        method: 'post',
        url: "http://localhost/php_labs/contact.php",
        data: {
          username:this.state.username,
          password:this.state.password,
          email:this.state.email,
        },
        headers: {'Content-Type': 'multipart/form-data'  }*/
        
        //content-type': 'application/json
        //'Content-Type': 'multipart/form-data'
        /*
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }*/


   



  render() {
    return (
      <div className="App">
          <h2 style={{display:"flex", height:'10%'}}>REGISTER FORM</h2>
          <form action="contact.php">
                <label>Username</label>
                <input type="text" id="username" name="username" placeholder="username" value={this.state.username} onChange={e=>this.setState({username:e.target.value})}/>
                <div style={{color:"white" , padding:"10px"}}> 
                  {this.state.username==="" && "*Παρακαλώ συμπληρώστε το πεδίο"}
                </div>
                <label>Password</label>
                <input type="password" id="password" name="password" placeholder="password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/>
                <div style={{color:"white" , padding:"10px"}}> 
                  {this.state.password==="" && "*Παρακαλώ συμπληρώστε το πεδίο"}
                </div>
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="email"  value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
                <div style={{color:"white" , padding:"10px"}}> 
                  {this.state.email==="" && "*Παρακαλώ συμπληρώστε το πεδίο"}
                </div>

          </form>
          

        <input type="submit" disabled={this.state.username === ""} 
        onClick={e=>this.handleFormSubmit(e)} value="Submit"/>
        </div>
    );
  }
}

export default Validate;