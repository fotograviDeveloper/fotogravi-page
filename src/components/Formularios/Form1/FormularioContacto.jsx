import React, { Component } from "react";
import "./FormularioContacto.css";
import textarea from "../../../assets/svg/Textarea.svg";
class FormularioContacto extends Component {
  render() {
    return (
      <React.Fragment>
        <div className=" form1">
          <div className="formGrid">
            {" "}
            <div className="image">
              <img
                src={textarea}
                alt="Esta imagen contiene una ilustracion de una chica"
              />
            </div>
            <div className="info">
              <p>
                Ey!! si te gusto mi trabajo enviame un correo electronico.{" "}
                <br/> Solo tienes que llenar el sigiente dormulario
              </p>
            </div>
            <div className="FormContainer">
              <form className="Dflex" method="post" href="">
                <input
                  type="text"
                  id="Nombre"
                  placeholder="¿Cual es tu nombre?"
                />
                <input
                  type="text"
                  id="apellido"
                  placeholder="¿Cual es tu apellido?"
                />
                <input
                  type="text"
                  id="correo"
                  placeholder="Coloca tu correo electonico  "
                />
                <input type="text" id="asunto" placeholder="Agrega un asunto" />
                <textarea
                  type="text"
                  className="textarea"
                  id="mensaje"
                  placeholder="Escribe aqui tu mensaje o duda. 
  "
                ></textarea>
                <button type="submit">ENVIAR</button>
              </form>
            </div>
           
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default FormularioContacto;
