import React from 'react'

import "./ButonDark.css"
class ButtonDark extends React.Component {
    render(){
        return(
           


<div className="boton  " >
<a className="Link" href={this.props.Link}>
<button type="button" className="btn btn-ligth">   {this.props.PalabraClave}</button></a>
</div>
            
        )
    }
}
export default ButtonDark;