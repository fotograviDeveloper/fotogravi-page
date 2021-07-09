import React from 'react'
import {Link} from "react-router-dom"
 class BotonHome extends React.Component{
     render(){
         return(<div className="contaienr">
        <Link to="/"><i class="fas fa-home icon"></i></Link> </div>
         )
     }
 }
 export default BotonHome;