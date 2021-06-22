//esta cart contiene un formato cuadrado y animacion de revelacion de titulo
import React from "react";
import {Link} from "react-router-dom"
import "./CardV2.0.css"
class CardV2 extends React.Component {
  render() {
    return (
      
      <div className=" cardsD  " key={this.props.id}>
        <div className="cardDesign">
          <Link className="links" to={this.props.link}>
            <img src={this.props.img} alt={this.props.textoAlterno} />
            <h2> {this.props.titulo} </h2>
            <p>  {this.props.desc} </p>
         
          </Link>
        </div>
      </div>
    );
  }
}
export default CardV2;
