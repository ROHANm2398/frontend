import React from 'react'
import playstore from "../../../images/play.jpg";
import appstore from "../../../images/app.png";
import "./Footer.css";

const footer = () => {
  return (
      <footer id="footer">
          <div class="leftFooter">
            <h4>download our apps</h4>
        <img src={playstore} alt="playstore"/>
        <img src={appstore} alt="appstore"/>
            

        
          </div>
          <div class="midFooter">
            <h1><p>GRAPHIC DESIGNERS HUB</p></h1>
            <h4>High quality is our first priority</h4>


              
          </div>
          <div class="rightFooter">
              
          </div>
      </footer>
  )
}

export default footer