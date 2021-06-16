import React from "react";
import "./contactoSeccion.css";

import IconSocialList from "../icons/Socialmedia/socaliconList";
class Contacto extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="seccionContacto" id="Contactame">
          {" "}
          <div className="container contenedor">
            <div className="info">
              <h2>Contactame</h2>
              <p className="parrafo">
                Si te gusto mi trabajo y deseas contratarme, puedes contactarme
                por medio de mis distintas redes sociales. También puedes
                enviarme un correo directo.
              </p>
            </div>
            <div className="icons">
              <IconSocialList></IconSocialList>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contacto;
