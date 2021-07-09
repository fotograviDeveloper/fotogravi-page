import { React } from "react"
import "./envioExitoso.css"
import BotonHome from "../Botones/home/homeBoton"
import succesImg from "../../assets/svg/succses.png"
const enviadoExitosamente = () => {
  return (
    <div className="page">
      <div className="imagen">

        <img src={succesImg} alt="imagen de confirmacion" />
      </div>

      <h5>Se ha enviado el correo exitosamente
     
      </h5>
      <BotonHome></BotonHome>
    </div>
  )
}
export default enviadoExitosamente;