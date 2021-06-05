//este compnente renderiza toda la pagina inicial de mi aplicacion
import React from "react";

//importo componentes
import AbautMe from "../components/AbautMe/AbautMe";
import Navbar from "../components/navbar/Navbar";
import PortafolioSection from "../components/Portafolio/PortafolioSection";
import Welcome from "../components/welcome/welcome"


function HomePage() {
  return (

    <React.Fragment>
    <Navbar></Navbar>
    <Welcome></Welcome>
<AbautMe></AbautMe>
<PortafolioSection></PortafolioSection>

    </React.Fragment>
  );
}

export default HomePage;
