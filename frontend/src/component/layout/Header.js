import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../images/logo.png"


const Header = () => {
  return (
  <ReactNavbar 
  navColor1=" black"
  burgerColor= "violet"
  burgerColorHover = "red"
  nav1Transition="0.8"
  logo={logo}
  logoWidth="10vmax"
  logoHoverSize= "10 px"
  logoHoverColor= "blue"
  link1Text="Home"
  link2Text="register"
  link3Text="Login"
  link4Text="Contact us"
  link5Text="Register"
  link1Url="/Home"
  link2Url="/Register"
  link3Url="/login"
  link4Url="Contact us"
  link1Color="white"
  link2Color="white"
  link3Color="white"
  link4Color="white"
  nav1justifyContent="flex-end"
  nav2justifyContent="flex-end"
  nav3justifyContent="flex-start"
  link1Margin="1vmax"
  link3Margin="0vmax"
  link4Margin="1vmax"
  link1Size="2vmax"
  profileIconColor="blue"
  searchIconColor="rgba(35,35,35,0.8)"
  cartIconColor="rgba(35,35,35,0.8)"
  

  />


  )
}

export default Header
