import React from "react";
import "./portada2.css";

class PortadaImg extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="portada2"
          style={{ backgroundImage: `url(${this.props.img})`
      , fontSize:`${this.props.fontSize}` }}
        >
         
          <div className="heder">
            <h3   style={{ fontSize:`${this.props.fontSize}` }}>{this.props.titulo}</h3>
          </div>

               </div>
      </React.Fragment>
    );
  }
}
export default PortadaImg;
