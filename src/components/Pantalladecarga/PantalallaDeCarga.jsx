import React from 'react'
import "./PantallaDeCarga.css"
class CargandoPagina  extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="carga">
                <div className="lds-circle"><div></div></div>
                <h3>Cargando Pagina ...</h3>
               </div>
            </React.Fragment>
        )
    }


}

export default CargandoPagina;