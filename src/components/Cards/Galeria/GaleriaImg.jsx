
import React  from 'react'
import "./galeria2.css"

class MiGaleria extends React.Component {
  render() {
    return(
        <div className="imagen">
            <img src={this.props.img} alt={this.props.alt}  />
        </div>
    );
  }
}
export default MiGaleria