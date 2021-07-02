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
       

                Distintas personas han confiado en mí para la elaboración de su identidad grafica.
                Estas son algunos de mis mejores trabajos que he hecho a lo largo del tiempo, te explicare como fue que cree estas marcas y sus identidades graficas. <br />
                Así conocerás un poco más mis habilidades.           <i className="fas fa-arrow-down"></i>
           
              </p>
            </div>

            <Branding></Branding>
          </div>
          <div className="grid2">


            <div className="parrafoBranding">
              <div className="textoD">
                <p>
                 
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
