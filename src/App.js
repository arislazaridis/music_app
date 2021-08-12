

import Validate from './components/Validate';
import Nav from './components/Nav';
import Home from './components/Home';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Lemonade from './components/Lemonade';
import HappierBillie from './components/HappierBillie';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import Infinite from './components/Infinite';

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
