//este componente recorre la lista de elementos y crea la una Card por cada uno de ellos.
import React from 'react'
import CardV2 from "../../../Cards/Card2/CardV2"
import "./CardTrabajos.css"

function PortafolioListDesign(props){

    return(<div className="center"> 
        <div className="CrardTrabajo" >  
        {props.Trabajos.map((Trabajos) => {
        
        return(
            
            <CardV2 
            key={Trabajos.id}
            titulo={Trabajos.proyecto}
            img={Trabajos.imgmin}
            textoAlterno={"imagen min"}
            desc={Trabajos.desc}
            link= {Trabajos.link} />
            
            
          
        )
        })}</div>  
         </div>
    )
}
export default PortafolioListDesign; 