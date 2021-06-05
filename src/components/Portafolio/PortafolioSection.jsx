// este componente pinta toda una seccion perteneciente al apartado de mi portafolio

import React, { Component } from "react";
import Portafolios from "../Portafolio/Porfolios/OtrosPorfolios";
import PortafolioDesign from "../Portafolio/Porfolios/PortafolioDesign";
import Myskills from "../MySkills/skillsico/SkillsIcon.jsx";
import "./Portafolio.css";

class PortafolioSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="portafolio" id="Portafolio">
          <div className="grid1">
            <h2>PORTAFOLIO</h2>

            <div className=" info">
              <p>
                Como diseñador grafico, he realizado trabajos para negocios
                locales. Crando contenido publicitario y de branding, tanto web como impreso. <br></br>
                También podrás encontrar algunas de mis ilustraciones y matte
                painting que he hecho a lo largo del tiempo. Asi como mis diseños y paginas web creadas hasta ahora.
              </p>
            </div>
          </div>
          <div className="grid2">
            <div className="derecha">
              <div className="texto">
                <h3>BRANDING</h3>
              </div>
              <div className="parrafoBranding">
                <p>
                  Estas son algunas de las marcas con las que he trabajado o que
                  yo mismo he creado. <br/>
                  Aqui abajo encontraras mas contenido creado por mi. <i class="fas fa-arrow-down"></i>
                 </p>
              </div>
              <div className="portafolios">
                <Portafolios></Portafolios>
              </div>{" "}
            </div>
            <div className="cardsPorfolio">
              <PortafolioDesign></PortafolioDesign>
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
