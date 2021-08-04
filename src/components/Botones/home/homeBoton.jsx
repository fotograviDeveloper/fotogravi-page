import React from 'react'
import {Link} from "react-router-dom"
import "./homeboton.css"
 class BotonHome extends React.Component{
     render(){
         return(<div className="contaienr">
        <Link to="/" ><i class="fas fa-home icon"style={{
            color:"fff"
        }}></i></Link> </div>
         )
     }
 }
 export default BotonHome;