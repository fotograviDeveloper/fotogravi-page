import React from "react";
//esta pagina renderiza solo el componente Portafolio section
import PortadaImg2 from "../components/Portadas/portada2/PortadaImg2";
import AbautMe from "../components/AbautMe/AbautMe";
import "./css/conoceme.css"
import MVO from "../components/MVO/MVO";
import DescDeMarca from "../components/descripcionDeMarca/DescDeMarca";
function Conoceme() {

  return (
    <React.Fragment>
      <PortadaImg2
        img="https://images.pexels.com/photos/4954713/pexels-photo-4954713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        titulo=" Fotogravi Studio Design " />
<DescDeMarca></DescDeMarca>
     <MVO></MVO>

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
