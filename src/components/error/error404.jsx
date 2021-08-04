import React, { Component } from 'react';
import Error404 from "../../assets/svg/404.svg"
import BotonHome from '../Botones/home/homeBoton';
import Navbar from '../navbar/Navbar';

import "./error.css"
class error404 extends Component {
    render() {
        return (
            <div>
<div><Navbar></Navbar></div>
             
            <div className="Error">
               
                <img className="E404"src={
                    Error404
                } alt="asdasda" />
                <div className="homeBotton"> <a href="/">Vuelve al inicio  <BotonHome></BotonHome></a> </div>
       
            </div></div>
        );
    }
}

export default error404;