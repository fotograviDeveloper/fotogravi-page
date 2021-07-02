import React from "react";
import { useParams } from "react-router-dom";
import host from "../control/diminio";
import PortadaImg from "../components/Portadas/Portada1/Portada1";
import Parrafo from "../components/parrafo/parrafo"
import "./css/PortBranding.css"
const PortBranding = () => {
    const { link } = useParams();

    //obtener datos de la api aray imagenes

    const [datos, setDatos] = React.useState([]);
    React.useEffect(() => {
        const fetchPortafolios = async () => {
            let res = await fetch(`http://${host}/api/Design/portafolio/${link}/contenido`);
            let datos = await res.json();
            setDatos(datos[0]);
            console.log(datos[0]['imgLogo'])
        };
        fetchPortafolios();
    }, [link]);

    return (
        <React.Fragment>
            <PortadaImg
                titulo={datos.nombreDProyecto}
                img={datos.imgPortada}
                ico1={""}
                fontSize="30px"
                ico2={""}
            ></PortadaImg>{" "}
            <div className="BrandingPage">

                <div className="container ">

                    <div className="contenido">
                        <div className="pageContent">
                            <div className="brif">
                                <img src={datos.imgBrief} alt="" />
                                <div className="parr1">   <Parrafo className="brief"
                                    tituloSeccion="Brieffing"
                                    parrafo={datos.briefTXT} />
                                    <br></br>
                                    <Parrafo className="brief"
                                        tituloSeccion="Analisis del mercado"
                                        parrafo={datos.analisisMercado} />
                                </div>
                            </div>
                            <div className="parrs">
                                <Parrafo className="problem"
                                    tituloSeccion="Problema"
                                    parrafo={datos.problema} />
                                     
                            </div>
<img src={datos.imgProblema} alt="" />
                            <div className="parr">
                                <Parrafo className="solucion"
                                    tituloSeccion="Solucion"
                                    parrafo={datos.propuestaDiseño} />
                            </div>

                            <div> <img className="img" src={datos.imgLogo} alt="" /></div>
                            <div className="container principal" >
                                <h2>Colores y tipografia usada</h2>

                                <div className="colortipografia">
                                    <div className="colores">
                                        <div className="color1" style={{backgroundColor:"#5B1DA8"}}>#5B1DA8</div>
                                        <div className="color2" style={{backgroundColor:"#FFD81B"}}> #FFD81B</div>
                                    </div>
                                    <div className="tipografia">
                                        <div className="tipo1">Montserrat</div>
                                        <div className="tipo2">Bebas new</div>
                                    </div>
                                </div></div>
                        </div></div>


                </div>
            </div>
        </React.Fragment>
    )
}
export default PortBranding;