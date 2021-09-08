

import Validate from '././components/Sign/Validate'
import Nav from './components/Nav';
import Home from '././components/Pages/Home';
import Header from './components/Header';
import ContactForm from './components/./Contact_form/ContactForm';
import Lemonade from './components/./CDs/Lemonade';
import HappierBillie from './components/./CDs/HappierBillie';
import Infinite from './components/CDs/Infinite';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


function App() {
  return (
    <Router>
          <div className="App">
                  
                  <Header/>
                  <Nav categories = {["Home", "Contact", "Sign"]}/>
                  <Switch>
                    <Route path="/Home" exact component={Home} />
                    <Route path="/Contact" exact component={ContactForm} />
                    <Route path="/Sign" component={Validate}/>
                    <Route path="/Lemonade" component={Lemonade}/>
                    <Route path="/Infinite" component={Infinite}/>
                    <Route path="/HappierBillie" component={HappierBillie}/>

                  </Switch>
                  
                
            

            </div>


    </Router>
 
  );
}


export default App;
