import React, { Fragment } from "react"
import "./Home.css"
import Designer from "./Designer.js"
//import { CgMouse } from "react-icons/all";
const designer={
 image:[{url:"https://1.bp.blogspot.com/-eStF23X3syc/Tj38pD7dybI/AAAAAAAAA_E/3oUBv-OQvCA/s1600/164795_189082627770806_187230631289339_734007_6743270_n+%2528Copy%2529.jpg"}],
  name:"Anna",
  qualification:"Degree in  designing",
  experience :"2 years",
  specialization: "logo designing"
};
const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <h1>Welcome to GRAPHIC DESIGNERS HUB</h1>
       <p> <h3>Find your desired graphic designs designed by us</h3></p>
        <a  href= "#container">
        <button>
                Scroll 
              </button>
              </a>
        </div>
        <h2 className="homeHeading" >Featured products</h2>
        <div className="container" id="container">
          <Designer designer ={designer} />
          <Designer designer ={designer} />
          <Designer designer ={designer} />
          <Designer designer ={designer} />
          <Designer designer ={designer} />
          <Designer designer ={designer} />
          <Designer designer ={designer} />
          
        </div>
      
    </Fragment>
  )
  
}

export default Home;
