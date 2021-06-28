//esta cart contiene un formato cuadrado y animacion de revelacion de titulo 
import React from 'react'
import { Link } from 'react-router-dom';
import "./card1.css"
class Card1 extends React.Component {
    render(){
        return(
           


<div className=" cards  "  key={this.props.id}>

    <div className="cardy"> 
       <Link className="links"  to={`/portafolios/${this.props.link}`} >
            <img src={this.props.img} alt={this.props.textoAlterno} />
     <h2> {this.props.titulo} </h2>
            </Link>  
             
    </div>
</div>
            
        )
    }
}
export default Card1;