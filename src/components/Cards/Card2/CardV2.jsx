//esta cart contiene un formato cuadrado y animacion de revelacion de titulo
import React from "react";
import "./CardV2.0.css"
class CardV2 extends React.Component {
  render() {
    return (
      
      <div className=" cardsD  ">
        <div className="cardDesign">
          <a className="links" href={this.props.link}>
            <img src={this.props.img} alt={this.props.textoAlterno} />
            <h2> {this.props.titulo} </h2>
            <p>  {this.props.desc} </p>
         
          </a>
        </div>
      </div>
    );
  }
}
export default CardV2;
