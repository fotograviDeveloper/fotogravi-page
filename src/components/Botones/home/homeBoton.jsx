import React from 'react'
import {Link} from "react-router-dom"
 class BotonHome extends React.Component{
     render(){
         return(<div className="contaienr">
        <Link to="/"><h2>inicio</h2></Link> </div>
         )
     }
 }
 export default BotonHome;