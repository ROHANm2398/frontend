import React from 'react'
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/appstore.png";
import "./Footer.css";

const footer = () => {
  return (
      <footer id="footer">
          <div class="leftFooter">
            <h4>download our apps</h4>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appstore"/>
            

        
          </div>
          <div class="midFooter">
          <h4 >GRAPHIC DESIGNERS HUB</h4>
            <h5>High quality is our first priority</h5>


              
          </div>
          <div class="rightFooter">
            <a href="www.youtube.com">Follow us</a><br/>
            <a href="www.instagram.com">instagram</a><br/>
            <a href="www.facebook.com">facebook</a><br/>
            <a href="www.youtube.com">youtube</a><br/>
          </div>
      </footer>
  )
}

export default footer