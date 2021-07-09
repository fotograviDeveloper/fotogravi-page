//mvo es el componente que engloba la informacion de 
//mision
//vision
//objetivo de la la marca

import React, { Component } from 'react';
import misionImg from "../../assets/svg/mision.svg"
import visionImg from "../../assets/svg/vision.svg"
import objetivoImg from "../../assets/svg/objetivo.svg"
import "./mvo.css"
class MVO extends Component {
    render() {
        return (
            <React.Fragment>
                 <div className="marca" id="mision">
         <div className="titulo">
            <h2>Mision</h2>
          </div>
        <div className="marcaGrid">
         
          <div className="imgMarca">

            <img src={misionImg} alt="" />
          </div>
        </div>
        <div className="container marcaText">
          <p>Brindar soluciones de diseño a todo aquel que lo necesite. Principalmente a emprendedores, negocios medianos y pequeños que no cuentan con un gran presupuesto como las grandes compañias.
<br /> 
<br></br>Dando les asi la oportunidad de lograr el cresimiento que quieren y haciendolos llegar a mas personas a traves de nuestros diseños.
          </p>
        </div>
      </div>
      
      <div className="marca vision">
        <div className="titulo">
            <h3>Vision</h3>
          </div>
      <div className="marcaText">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aperiam consequatur dicta impedit ex corrupti adipisci maiores delectus quae voluptatem. Cum magni deserunt animi ea ad repellat repudiandae et sunt!</p>
        </div>
        <div className="marcaGrid">
          
          <div className="imgMarca">

            <img src={visionImg} alt="" />
          </div> 
         
          </div>
        </div>
        
        <div className="marca">
        <div className="titulo">
            <h2>mision</h2>
          </div>
        <div className="marcaGrid">
         
          <div className="imgMarca">

            <img src={objetivoImg} alt="" />
          </div>
        </div>
        <div className="container marcaText">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aperiam consequatur dicta impedit ex corrupti adipisci maiores delectus quae voluptatem. Cum magni deserunt animi ea ad repellat repudiandae et sunt!</p>
        </div>
        </div>
            </React.Fragment>
        );
    }
}



export default MVO;