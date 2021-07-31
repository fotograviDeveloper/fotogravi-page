import React from "react";
import img1 from "../../../assets/svg/Logo2.png";
import "../navbar.css";

const NavbarHome = ()=> {

  
    
    return (
      <React.Fragment>
       {
         
   }
        <div className="barra" id="navbar">
          <nav className="navbar  navbar-expand-lg ">
            <a className="navbar-brand ml-auto" href="/">
              <img className="img"src={img1} alt="logotipo de mi marca"></img>
            </a>
            <button
              className="navbar-toggler"
              id="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"><i className="fas fa-hamburger"></i></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end m-5"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav  text-center" id="item">
                <a className="nav-item nav-link " href="#inicio" >
                  Inicio <span className="sr-only"></span>
                </a>
            
                <a className="nav-item nav-link" href="#Portafolio" id="item">
                  Portafolio
                </a> 
                   <a className="nav-item nav-link" href="#abautme" id="item" >
                  Conoceme
                </a>
                <a className="nav-item nav-link" href="#Servicios"id="item">
                  Servicios
                </a>
                <a className="nav-item nav-link" href="#Contactame">
                  Contactame
                </a>
                {/*  <a className="nav-item nav-link" href="/MyBlog">
                  <Blog></Blog>
                </a>*/}
              </div>
              <div className="d-flex justify-content-end socialMedia " id="item">
                {" "}
                <a
                  className="navbar-brand"
                  href="https://www.facebook.com/Fotogravi.Design"
                  target="_bank"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  className="navbar-brand"
                  href="https://www.linkedin.com/in/fotogravi-studio/"
                  target="_bank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }

export default NavbarHome;
