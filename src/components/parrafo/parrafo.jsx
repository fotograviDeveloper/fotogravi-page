import React, { Component } from 'react';
import "./parrafo.css"
class Parrafo extends Component {
    render() {
        return (
            <div className="componentParrafo">
                <h2>{this.props.tituloSeccion}</h2>
               <p>{this.props.parrafo}</p> 
            </div>
        );
    }
}

export default Parrafo;