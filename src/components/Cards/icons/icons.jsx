//esta cart contiene un formato cuadrado y animacion de revelacion de titulo 
import React from 'react'
import "./icons.css"
class ComponentIcon extends React.Component {
    render(){
        return(
           


<div className=" icon  ">
    <a href={this.props.link} target="__blank">
<i class={this.props.icon}></i></a>

  
</div>
            
        )
    }
}
export default ComponentIcon;