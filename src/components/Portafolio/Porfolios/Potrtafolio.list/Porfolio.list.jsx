//este componente recorre la lista de elementos y crea la una Card por cada uno de ellos.
import React from 'react'
import Card1 from "../../../Cards/Card1/Card1"
import "./masportafolios.css"

function PortafolioList(props){
    return(<div className="masPortafolios"> 
        <div className="Crards" >   
        {props.Portafolios.map((Portafolios) => {
         
        return(
            
            <Card1
            key={Portafolios.id}
            titulo={Portafolios.titulo}
            img={Portafolios.img}
            textoAlterno={Portafolios.textoAlterno}
            description={Portafolios.description}
            link= {Portafolios.link}

            
     />
           
          
        )
        })} </div>
         </div>
    )
}
export default PortafolioList; 