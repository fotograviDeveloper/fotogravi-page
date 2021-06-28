//este compnente renderiza toda la pagina inicial de mi aplicacion
import React from "react";

//importo componentes
import AbautMe from "../components/AbautMe/AbautMe";
//import Navbar from "../components/navbar/Navbar";
import PortafolioSection from "../components/Portafolio/PortafolioSection";
import Welcome from "../components/welcome/welcome";
import Contacto from "../components/ContactoSecction/ContactoSecction";

function HomePage() {
  return (
    <React.Fragment>
      <Welcome></Welcome>
      <AbautMe></AbautMe>
      <PortafolioSection></PortafolioSection>
      <Contacto></Contacto>
    </React.Fragment>
  );
}

export default HomePage;
