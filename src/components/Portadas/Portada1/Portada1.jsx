import React from "react";
import "./portada.css";

class PortadaImg extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="portada"
          style={{ backgroundImage: `url(${this.props.img})`
      , fontSize:`${this.props.fontSize}` }}
        >
          <div className="ico">
            <i class={this.props.ico1}></i>
          </div>
          <div className="titulo">
            <h3   style={{ fontSize:`${this.props.fontSize}` }}>{this.props.titulo}</h3>
          </div>
        
        <div className="ico">
          <i class={this.props.ico2}></i>
        </div></div>
      </React.Fragment>
    );
  }
}
export default PortadaImg;
