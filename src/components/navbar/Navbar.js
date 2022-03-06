import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "./navlogo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open === false) document.body.classList.add("noscroll");
    else document.body.classList.remove("noscroll");

    setOpen(!open);
  };

  const closeIt = () => {
    setOpen(false);
    document.body.classList.remove("noscroll");
  };
  return (
    <>
      <header className={open ? "header open" : "header"}>
        <div // onClick={handleOlay}
          className={open ? "overlay fade-in" : "overlay has-fade fade-out"}
        ></div>

        <nav className="hide-for-mobile" id="upnavbody">
          <div className="container">

            <div className="flex flex-jc-end flex-ai-c">
              <p>Connect with us on </p>
              <div className="upnav_social">
                <a href="#" id="fb">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title>facebook</title><path fill="#FFF" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" /></svg>
                </a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"><title>Instagram</title><path fill="#FFF" d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" /></svg>
                </a>
                <a href="#">
                  <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Telegram</title>
                    <path d="M21 1.96973L10 13.8586" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 1.96973L14 23.5859L10 13.8586L1 9.5354L21 1.96973Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </a>
                <a href="#">
                  <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">  
                  <title>Whatsapp</title>
                  <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </nav>



        <div id="navbody">
          <div className="container">
            <nav className="flex container--px  flex-jc-sb flex-ai-c">
              <a href="/" className="header__logo">
                <img src={Logo} alt="NRI Logo" />
                <div className="logo_text">
                  <span className="nriin">NRI INSTITUTE</span>
                  <span className="affto">Affliated to Banglore University </span>
                </div>
              </a>

              <a
                href="#"
                onClick={handleOpen}
                className="header__toggle  hide-for-desktop"
              >
                <span></span>
                <span></span>
                <span></span>
              </a>

              <div className="header__toggle header__links  hide-for-mobile">
                <NavLink exact="true" to="/">
                  Home
                </NavLink>
                <NavLink exact="true" to="/services">
                  Academics
                </NavLink>
                <NavLink exact="true" to="/about">
                  About Us
                </NavLink>
                <NavLink exact="true" to="/blog">
                  Blog
                </NavLink>
                <NavLink exact="true" to="/contact">
                  Contact
                </NavLink>
                <NavLink exact="true" to="/contact">
                  Sitemap
                </NavLink>
              </div>

              {/* <a href="#" className="button header__cta hide-for-mobile" >
    Login
</a> */}
            </nav>
          </div>
        </div>
        {/* className="header__menu has-fade" */}
        <div
          className={open ? "fade-in header__menu " : "has-fade header__menu"}
        >
          <NavLink exact="true" onClick={closeIt} to="/">
            Home
          </NavLink>
          <NavLink exact="true" onClick={closeIt} to="/about">
            Academics
          </NavLink>
          <NavLink exact="true" onClick={closeIt} to="/about">
            AboutUs
          </NavLink>
          <NavLink exact="true" onClick={closeIt} to="/blog">
            Blog
          </NavLink>
          <NavLink exact="true" onClick={closeIt} to="/contact">
            Contact
          </NavLink>
          <NavLink exact="true" onClick={closeIt} to="/services">
            Sitemap
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Navbar;
