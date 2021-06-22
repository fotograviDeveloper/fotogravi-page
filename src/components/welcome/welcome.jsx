import React, { Component } from "react";

//css
import "./welcome.css";

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bienvenida" id="inicio">
   
          <div className="informacion">
            <div className="container p-3">           <p>
            "El diseño ayuda a trasmitir una idea, una emoción, un mensaje o un pensamiento.<br/>
De forma visual y universal"</p>

</div>
 <h1>Raúl Garcés</h1>
   
          </div>
          <div className="boton">
            <span>
              {" "}
              <a href="#abautme">
                <i className="fas fa-sort-down"></i>
              </a>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
