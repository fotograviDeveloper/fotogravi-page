import React from 'react'
import {Link} from "react-router-dom"


class BackButton extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                
                  <Link to="../"> <i class="fas fa-hand-point-left"></i></Link>
            </React.Fragment>
        )
    }
}

export default BackButton;