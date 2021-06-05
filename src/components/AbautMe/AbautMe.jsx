import React, { Component } from "react";


import pdf from "../../assets/pdf/curriculum vitae.pdf"
import FotoDeMi from "../../assets/image/mi foto.png";
import WOW from "wowjs";

import "./abautme.css";
class AbautMe extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <React.Fragment>
        <div className="abaut" id="abautme">
          <div className="ico">
            <a href={pdf} download="Curriculum Vitae Raul Garces">
       
              <span>
                <h4>Descarga mi cv</h4>{" "}
                <i className="fas fa-download" alt="Descarga mi Cv"></i>
              </span>
            </a>
          </div>
          <div className="p-4  mr-auto grid">
            <div className="box1">
              <div className="information">
                <h2> HOLA. YO SOY RAÚL GARCÉS</h2>
                <br />
                <p className="my">
                  Tengo 23 años. Soy de monterrey N.L. México. Y soy diseñador
                  gráfico y programador web freelance.
                </p>
              </div>
              <div className="img">
                {" "}
                <img src={FotoDeMi} alt="mi foto de perfil" srcset="" />
              </div>
            </div>
            <div className="box2">
              <div className="info1">
                <p>
                  Desde hace mas de 4 años me interese por el diseño grafico.
                  Esto me llevo a aprender y desarrollar múltiples habilidades
                  que me han ayudado a llegar hasta este punto.{" "}
                </p>
              </div>
              <div className="info2">
                <p>
                  Cree mi marca personal <b>Fotogravi Studio.</b> <br></br>Para
                  ofrecer mis servicios como diseñador gráfico, programador y
                  agente digital
                </p>
              </div>
              <div className="info3">
                <p>
                  Busco ayudar a pequeños negocios a lograr ese crecimiento y
                  posicionamiento de marca que desean.
                </p>
              </div>
              <div className="info4">
                <p>
                  Gracias a mi experiencia en múltiples profesiones puedo
                  brindarte una solución acorde a tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AbautMe;
