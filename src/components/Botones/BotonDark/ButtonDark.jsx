import React from 'react'
import { NavLink } from 'react-router-dom';
import "./ButonDark.css"
class ButtonDark extends React.Component {
    render(){
        return(
           


<div className="boton  " >

<button type="button" className="btn btn-dark">   <NavLink className="Link" to={this.props.Link}>{this.props.PalabraClave}</NavLink></button>
</div>
            
        )
    }
}
export default ButtonDark;