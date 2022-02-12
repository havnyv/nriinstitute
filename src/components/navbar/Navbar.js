import React, { useState } from 'react'
import  './Navbar.scss'
import Logo from "./navlogo.svg"
import {NavLink} from 'react-router-dom'


function Navbar() {
  const [open,setOpen]=useState(false);
  const handleOpen=()=>{        
      if(open===false)
      document.body.classList.add('noscroll');
      else
      document.body.classList.remove('noscroll');
      
      setOpen(!open);
  }

  const closeIt=()=>{
      setOpen(false);
      document.body.classList.remove('noscroll');
  }
  return (<>
<nav className="hide-for-mobile" id='upnav'>
<div className="container">

    <a href="tel:+911231231231" className="phone">
        Call us at
    </a>
    <span>
        Affliated to Bangalore University
    </span>
</div>
</nav>

<header 
   className={open? 'header open container' :'header container'}>

<div // onClick={handleOlay}
className={open? "overlay fade-in" : "overlay has-fade fade-out"}></div>

<nav className="hide-for-mobile" id='upnav'>
    <a href="tel:+911231231231" className="phone">
        Call us at
    </a>
    <span>
        Affliated to Bangalore University
    </span>
</nav>

<nav className="flex container--pall flex-jc-sb flex-ai-c">

    <a href='/' className="header__logo">
    <img src={Logo} alt="Sarovar Groups Logo" />
    <div className="logo_text">
        NRI <br /> Institute
    </div> 
    </a> 

    <a href="#"
    onClick={handleOpen}
    className="header__toggle  hide-for-desktop"
    >

    <span></span>
    <span></span>
    <span></span>
    </a>

<div className="header__toggle header__links  hide-for-mobile">
    <NavLink exact="true"   to="/" >Home</NavLink>
    <NavLink exact="true"   to="/services" >Academics</NavLink>
    <NavLink exact="true"   to="/about" >About Us</NavLink>
    <NavLink exact="true"   to="/blog" >Blog</NavLink>
    <NavLink exact="true"   to="/contact" >Contact</NavLink>
    <NavLink exact="true"   to="/contact" >Sitemap</NavLink>

</div>


{/* <a href="#" className="button header__cta hide-for-mobile" >
    Login
</a> */}


</nav>
{/* className="header__menu has-fade" */}
<div 
className={open?"fade-in header__menu ":"has-fade header__menu"}
>


 <NavLink exact="true"  onClick={closeIt} to="/" >Home</NavLink>
    <NavLink exact="true"  onClick={closeIt} to="/about" >Academics</NavLink>
    <NavLink exact="true"  onClick={closeIt} to="/about" >AboutUs</NavLink>
    <NavLink exact="true"  onClick={closeIt} to="/blog" >Blog</NavLink>
    <NavLink exact="true"  onClick={closeIt} to="/contact" >Contact</NavLink>
    <NavLink exact="true"  onClick={closeIt} to="/services" >Sitemap</NavLink>

</div>

</header>
  </>)
}

export default Navbar