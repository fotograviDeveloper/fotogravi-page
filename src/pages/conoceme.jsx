import React from "react";
//esta pagina renderiza solo el componente Portafolio section
import PortadaImg from "../components/Portadas/Portada1/Portada1";
import AbautMe from "../components/AbautMe/AbautMe";

function Conoceme () {
  
    return (
      <React.Fragment>
        <PortadaImg 
        img="https://images.pexels.com/photos/4954713/pexels-photo-4954713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        titulo="Este soy yo"/>

<AbautMe></AbautMe>
<div className="container">
  <div className="info">
    <p>
      
    </p>
  </div>
</div>
      </React.Fragment>
    );
  
}
export default Conoceme;
