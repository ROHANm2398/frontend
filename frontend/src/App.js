import logo from './logo.svg';
import './App.css';
import Header from "./component/layout/Header.js";
import Footer from "./component/layout/footer/Footer.js";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import webfont from "webfontloader"



function App() {
  React.useEffect(()=>{
    webfont.load({
      google :{
  
        families:["Roboto","Droid Sans" , "Chilanka"]
      }
    });
  }, [])
  
  return (
    <Router>
      <Header />

      <Footer/>
    </Router>

  );
}

export default App;
