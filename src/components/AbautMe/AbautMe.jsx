import React from "react";

import pdf from "../../assets/pdf/curriculum vitae.pdf";
import FotoDeMi from "../../assets/image/Raul_Garces1.png";


import "./abautme.css";
import { BrowserRouter, Route } from "react-router-dom";

import VerMasDeMi from "../Botones/verMasdemi/verMasDeMi";

function AbautMe() {


  return (
    <React.Fragment>
      <BrowserRouter>

        <div className="abaut" id="abautme">
          <div className="botonDescargaCV">
            {" "}

            <div className="ico">
              <a href={pdf} download="Curriculum Vitae Raul Garces">
                <span>

                  <i className="fas fa-download" alt="Descarga mi Cv" title="Descarga mi CV">

                  </i>
                </span>
              </a>
            </div>
          </div>

          <div className=" grid">
            <div className="information">
              <h2> YO SOY RAÚL GARCÉS</h2>
              <br />
              <p className="my">
                Tengo 23 años. Soy de monterrey N.L. México. Y soy diseñador
                gráfico y programador web freelance.
              </p>
            </div>
            <div className="img">
              {" "}
              <img src={FotoDeMi} alt="mi foto de perfil" />
            </div>

            <div className="parrafo">
              <p className="pr1">
                Desde hace más de 4 años me interese por el diseño grafico. Esto me llevo a aprender y desarrollar múltiples habilidades que me ayudaron a llegar hasta este punto.{" "}
              </p>
            </div>
            <div className="parrafo">
              <p>
                Cree mi marca personal <b>Fotogravi Studio.</b> <br/>Para
                ofrecer mis servicios como diseñador gráfico, programador y
                agente digital
              </p>
            </div>
            <div className="parrafo">
              <p>
                Busco ayudar a pequeños negocios a lograr ese crecimiento y
                posicionamiento de marca que desean.
              </p>
            </div>
            <div className="parrafo">
              <p>
                Gracias a mi experiencia en múltiples profesiones puedo
                brindarte una solución acorde a tus necesidades.
              </p>
             

 <div className="containe">
                <Route exact path="/" component={VerMasDeMi} /></div>
            </div>
          </div>

        </div>
      </BrowserRouter>
    </React.Fragment>
  );

}
export default AbautMe;
