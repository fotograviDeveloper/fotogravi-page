import React from "react";
//esta pagina renderiza solo el componente Portafolio section
import PortadaImg2 from "../components/Portadas/portada2/PortadaImg2";
import PortafolioSection from "../components/Portafolio/PortafolioSection";

function Portafolio () {
  
    return (
      <React.Fragment>
        <PortadaImg2 
        img="https://images.pexels.com/photos/8548383/pexels-photo-8548383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        titulo="Mi portafolio "/>
<PortafolioSection>

</PortafolioSection>
      </React.Fragment>
    );
  
}
export default Portafolio;
