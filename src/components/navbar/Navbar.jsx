import React, { Component } from "react";
import img1 from "../../assets/svg/Logo2.png";
import {Link} from "react-router-dom"
import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="barra">
       <nav className="navbar navbar-expand-lg ">
          
            <Link className="navbar-brand ml-auto" to="/">
              <img className="img"src={img1} alt="logotipo de mi marca"></img>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"><i class="fas fa-hamburger"></i></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end m-5"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav text-end">
                <Link className="nav-item nav-link " to="/">
                  Inicio <span className="sr-only"></span>
                </Link>
                <Link className="nav-item nav-link" to="/Conoceme">
                  Conoceme
                </Link>
                <Link className="nav-item nav-link" to="/Portafolio">
                  Portafolio
                </Link>
                {/* <a className="nav-item nav-link" href="#Servicios">
                  Servicios
                </a>*/}
                <Link className="nav-item nav-link" to="/Contacto">
                  Contactame
                </Link>
                {/*  <a className="nav-item nav-link" href="/MyBlog">
                  <Blog></Blog>
                </a>*/}
              </div>
              <div className="d-flex justify-content-end socialMedia ">
                {" "}
                <a
                  className="navbar-brand"
                  href="https://www.facebook.com/Garces.fotogravi"
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
}
export default Navbar;
