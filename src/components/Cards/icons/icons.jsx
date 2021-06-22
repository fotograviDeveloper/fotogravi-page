//esta cart contiene un formato cuadrado y animacion de revelacion de titulo 
import React from 'react'
import "./icons.css"
import {NavLink} from "react-router-dom"
class ComponentIcon extends React.Component {
    render(){
        return(
           


<div className=" icon  " >
    <NavLink to={this.props.link} >
        <i className={this.props.icon}></i></NavLink>

  
</div>
            
        )
    }
}
export default ComponentIcon;