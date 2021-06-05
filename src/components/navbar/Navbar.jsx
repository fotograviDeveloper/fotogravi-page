import React, { Component } from "react";
import img1 from "../../assets/svg/logo2.png";
import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="barra">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
              <img src={img1} alt="logotipo de mi marca"></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav  text-center">
                <a className="nav-item nav-link active" href="#inicio">
                  Inicio <span class="sr-only"></span>
                </a>
                <a className="nav-item nav-link" href="#abautme">
                  Conoceme
                </a>
                <a className="nav-item nav-link" href="#Portafolio">
                  Portafolio
                </a>
                <a className="nav-item nav-link" href="#Servicios">
                  Servicios
                </a>
                <a className="nav-item nav-link" href="#Contactame">
                  Contactame
                </a>
             {/*  <a className="nav-item nav-link" href="/MyBlog">
                  <Blog></Blog>
                </a>*/} 
              </div>
              <div className="d-flex justify-content-end text-center socialMedia ">
                {" "}
                <a class="navbar-brand" href="https://www.facebook.com/Garces.fotogravi" target="_bank">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a class="navbar-brand" href="https://www.linkedin.com/in/fotogravi-studio/" target="_bank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
export default Navbar;
