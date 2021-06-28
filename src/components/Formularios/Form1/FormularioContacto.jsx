import React, { Component } from "react";
import "./FormularioContacto.css";
import textarea from "../../../assets/svg/Textarea.svg";
import FormContact from "../formContact/FormContact";
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
                <br /> Solo tienes que llenar el sigiente dormulario
              </p>
            </div>
            <div className="FormContainer">
              <FormContact></FormContact>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default FormularioContacto;
