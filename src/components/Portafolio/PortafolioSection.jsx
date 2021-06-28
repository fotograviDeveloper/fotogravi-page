// este componente pinta toda una seccion perteneciente al apartado de mi portfolio

import React, { Component } from "react";
import Portafolios from "../Portafolio/Porfolios/OtrosPorfolios";
import Branding from "./Porfolios/PortafoliosBranding";
import Myskills from "../MySkills/skillsico/SkillsIcon.jsx";
import "./Portafolio.css";

class PortafolioSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="portafolio" id="Portafolio">
          <div className="grid1">
            <h2>PORTAFOLIO BRANDING</h2>
            <div className=" info">
           
              <p>
                  Estas son algunas de las marcas con las que he trabajado o que
                  yo mismo he creado. <br />
                  Aqui abajo encontraras mas contenido creado por mi.{" "}
                  <i className="fas fa-arrow-down"></i>
                </p>
            </div>
  
          <Branding></Branding>
          </div>
          <div className="grid2">
         
              
              <div className="parrafoBranding">
                <div className="textoD">
                 <p>
                Como diseñador grafico, he realizado trabajos para negocios
                locales. Crando contenido publicitario y de branding, tanto web
                como impreso. <br></br>
                También podrás encontrar algunas de mis ilustraciones y matte
                painting que he hecho a lo largo del tiempo. Asi como mis
                diseños y paginas web creadas hasta ahora.
              </p></div>
              </div>
                <div className="portafolios">
       <Portafolios></Portafolios>
              </div>
              <div className="skills">
              <Myskills></Myskills>
            </div>
            </div>

           
          </div>
      
      </React.Fragment>
    );
  }
}
export default PortafolioSection;
