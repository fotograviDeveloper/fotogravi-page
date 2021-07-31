import React from "react";
import { useParams } from "react-router-dom";
import ButtonDark from "../components/Botones/BotonDark/ButtonDark";
import host from "../control/diminio";
import PortadaImg from "../components/Portadas/Portada1/Portada1";
import Parrafo from "../components/parrafo/parrafo";
import "./css/PortBranding.css";
import Branding from "../components/Portafolio/Porfolios/PortafoliosBranding";

const PortBranding = () => {
  const { link } = useParams();

  //obtener datos de la api aray imagenes

  const [datos, setDatos] = React.useState([]);
  React.useEffect(() => {
    const fetchPortafolios = async () => {
      let res = await fetch(
        `http://${host}/api/Design/portafolio/${link}/contenido`
      );
      let datos = await res.json();
      setDatos(datos.data[0][0]);
      console.log(datos.data[0][0]);
    };
    fetchPortafolios();
  }, [link]);   

  const [datostecnicos, setDatostech] = React.useState([]);
  React.useEffect(() => {
    const fetchPortafolios = async () => {
      let res = await fetch(
        `http://${host}/api/Design/portafolio/${link}/contenido`
      );
      let datostecnicos = await res.json();
      setDatostech(datostecnicos.data[1][0]);
      console.log(datostecnicos.data[1][0]);
    };
    fetchPortafolios();
  }, [link]);

 
  //obtener datos de la api colores y tipografias

  return (
    <React.Fragment>
    
      <PortadaImg
        titulo={datos.nombreDProyecto}
        img={datos.imgPortada}
        ico1={""}
        fontSize="30px"
        ico2={""}
      ></PortadaImg>{" "} 
      <div className="BrandingPage"
     >
        <div className="contenido">
          <div className="pageContent">
            <div className="brif">
              <img src={datos.imgBrief} alt="" />
              <div className="parr1">
                <Parrafo
                  className="brief"
                  tituloSeccion="Brieffing"
                  parrafo={datos.briefTXT}
                />

                <Parrafo
                  className="brief"
                  tituloSeccion="Analisis del mercado"
                  parrafo={datos.analisisMercado}
                />
              </div>
            </div>
            <div className="parrs">
              <Parrafo
                className="problem"
                tituloSeccion="Problema"
                parrafo={datos.problema}
              />
              <img className="imgProblema" src={datos.imgProblema} alt="" />
            </div>

            <div className="parr">
              <Parrafo
                className="solucion"
                tituloSeccion="Solucion"
                parrafo={datos.propuestaDiseño}
              />
            </div>

            <div>
              {" "}
              <img className="img" src={datos.imgLogo} alt="" />
            </div>
            <div className="container principal">
              <h2>Colores y tipografia usada</h2>

              <div className="colortipografia">
                <div className="colores">
                  <div
                    className="color1"
                    style={{
                        backgroundColor: `${datostecnicos.color1}`
                    }}

                  >
                    {datostecnicos.color1}
                  </div>
                  <div
                    className="color2"
                   style={{
                       backgroundColor: `${datostecnicos.color2}`
                   }}
                  >
                    {datostecnicos.color2}
                  </div>
                </div>

                <div className="tipografia">
                  <div className="tipo1">{datostecnicos.tipografia1}</div>
                  <div className="tipo2">{datostecnicos.tipografia2}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ButtonDark
          className="contacto"
          PalabraClave="CONTACTAME"
          id="1"
          Link="/Contacto"
        /> 
    
      </div>
      <Branding></Branding>
          
    </React.Fragment>
  );
};
export default PortBranding;
