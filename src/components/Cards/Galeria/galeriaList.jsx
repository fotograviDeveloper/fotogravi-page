//este componente recorre la lista de elementos y crea la una Card por cada uno de ellos.
import React from "react";
import MiGaleria from "./GaleriaImg";


function GaleriaList(props) {
  return (
    <div className="masimagenes">
      <div className=" ImG">
        {props.Imagenes.map((Imagenes) => {
          return (
            <div className="imagenes" key={Imagenes.id}>
            <MiGaleria
             
              img={Imagenes.img}
              textoAlterno={Imagenes.textoALT}
            /></div>
          );
        })}{" "}
      </div>
    </div>
  );
}
export default GaleriaList;
