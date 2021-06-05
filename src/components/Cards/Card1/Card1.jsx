//esta cart contiene un formato cuadrado y animacion de revelacion de titulo 
import React from 'react'
import "./card1.css"
class Card1 extends React.Component {
    render(){
        return(
           


<div className=" cards  ">

    <div className="cardy">
       <a className="links"  href={this.props.link} target="notarget" >
            <img src={this.props.img} alt={this.props.textoAlterno} />
     <h2> {this.props.titulo} </h2>
            </a>  
             
    </div>
</div>
            
        )
    }
}
export default Card1;