import React from "react";
import { useParams } from "react-router-dom";
import host from "../control/diminio";
import ButtonDark from "../components/Botones/BotonDark/ButtonDark"
import GaleriaList from "../components/Cards/Galeria/galeriaList";
import PortadaImg from "../components/Portadas/Portada1/Portada1";

import "./css/MasPortafoliosPage.css";

const Masportafolios = () => {

  const { link } = useParams();

  const [datos, setDatos] = React.useState([]);
  React.useEffect(() => {
    const fetchPortafolios = async () => {
      let res = await fetch(` http://${host}/api/Design/${link}`);
      let datos = await res.json();
      setDatos(datos);
    };
    fetchPortafolios();
  }, [link]);

  //obtener datos de la api aray imagenes

  const [Imagenes, setImagenes] = React.useState([]);
  React.useEffect(() => {
    const fetchImagenes = async () => {
      let res = await fetch(
        `http://${host}/api/Design/${link}/catalogo`
      );
      let imagenes = await res.json();
      setImagenes(imagenes);

      console.log(imagenes);
    };
    fetchImagenes();
  }, [link]);

  return (

    <React.Fragment>
      <div className="trabajosBody">

        {/*   <h3>{datos.titulo}</h3>
                    <img src={datos.img} alt={datos.description} height="300px"/>
            */}{" "}
        <PortadaImg
          titulo={datos.nombreDProyecto}
          img={datos.imgPortada}
          ico1={datos.icon1}
          ico2={datos.icon2}
        ></PortadaImg>{" "}
      </div>

      <div className="galImagen">
        <GaleriaList Imagenes={Imagenes} /></div>
      <div className="contacto">
        <div className="container">
          <ButtonDark
            PalabraClave="CONTACTAME"
            id="1"
            Link="/Contacto" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Masportafolios;
