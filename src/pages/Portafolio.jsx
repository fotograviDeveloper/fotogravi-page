import React from "react";
//esta pagina renderiza solo el componente Portafolio section
import PortadaImg from "../components/Portadas/Portada1/Portada1";
import PortafolioSection from "../components/Portafolio/PortafolioSection";

function Portafolio () {
  
    return (
      <React.Fragment>
        <PortadaImg 
        img="https://gesvin.files.wordpress.com/2018/07/portafolioevidencias10herramientaswebimplementarlos-artc3adculo-bloggesvin.jpg?w=640"
        titulo="Bienvenido"/>
<PortafolioSection></PortafolioSection>
      </React.Fragment>
    );
  
}
export default Portafolio;
