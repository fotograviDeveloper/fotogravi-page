//este componente resive las props del componente inicial social icons list 
//Y llama al compnente que las va a pintar. En este caso es un elemento i
import React from 'react'

import ComponentIcon from '../../Cards/icons/icons';

function IconSocial(props){

    return(<div className="Cr"> 
        <div className="iconGrup" >  
        {props.icons.map((icons) => {
        
        return(
     <ComponentIcon
     icon= {icons.Icon}
        link= {icons.link}></ComponentIcon>
        )
        })}</div>  
         </div>
    )
}

export default IconSocial;