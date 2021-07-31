//mvo es el componente que engloba la informacion de
//mision
//vision
//objetivo de la la marca

import React, { Component } from "react";
import misionImg from "../../assets/svg/mision.svg";
import visionImg from "../../assets/svg/vision.svg";
import objetivoImg from "../../assets/svg/objetivo.svg";
import "./mvo.css";
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
            <p>
              Brindar soluciones de diseño a todo aquel que lo necesite.
              Principalmente a emprendedores, negocios medianos y pequeños que
              no cuentan con un gran presupuesto como las grandes compañias.
              <br />
              <br></br>Dando les asi la oportunidad de lograr el cresimiento que
              quieren y haciendolos llegar a mas personas a traves de nuestros
              diseños.
            </p>
          </div>
        </div>

        <div className="marca">
          <div className="titulo">
            <h3>Vision</h3>
          </div>
          <div className="marcaText">
            <p>
              <b style={{ fontSize: "30px" }}> +</b> Convertir a{" "}
              <b> FOTOGRAVI STUDIO DESIGN </b> en una gran agencia de diseño,
              que se dedique a brindar soluciones creativas y resolver los
              porblemas de nuestros clientes, de una forma unica.
              <br /> <br />
              <b style={{ fontSize: "30px" }}> +</b> Crear una academia de
              cursos gratuitos y carreras tecnicas para poder brindar educacion
              a jovenes diseñadores y a todo aquel que desee aprender la
              profecion. <br /> <br />
              <b style={{ fontSize: "30px" }}> +</b> Llegar a ser una marca
              reconocida en latinoamerica por brindar edicacion online de diseño
              grafico y programacion.
            </p>
          </div>
          <div className="marcaGrid">
            <div className="imgMarca">
              <img src={visionImg} alt="" />
            </div>
          </div>
        </div>

        <div className="marca">
          <div className="titulo">
            <h2>Objetivo</h2>
          </div>
          <div className="marcaGrid">
            <div className="imgMarca">
              <img src={objetivoImg} alt="" />
            </div>
          </div>
          <div className="container marcaText">
            <p>
              {" "}
              <b style={{ fontSize: "30px" }}> +</b> Crear una comunidad de
              jovenes diseñadores Jr, que esten empezando, para poder
              trasmitirles el conocimiento y la experiencia de aquellos
              creativos que ya la tienen. <br></br>
              <b style={{ fontSize: "30px" }}> +</b> Expandir la plantilla de
              colavoradores creativos de la marca, para poder ayudar a mas
              emprendedores y negocios pequeños que requieran ayuda grafica.{" "}
              <br />
              <b style={{ fontSize: "30px" }}> +</b> Lograr que el nombre <b>FOTOGRAVI STUDIO DESIGN</b> sea
              sinonimo de d
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MVO;
