//este componente contiene la data que se exportara para ser utulizada en el componente Portafolio.list.jsx que se encarga de pintar
//las targetas correspondientes

import React, { useState, useEffect} from "react";
import host from "../../../control/diminio";
import "./Css/PortafoliosCards.css";
import PortafolioList from "./Potrtafolio.list/Porfolio.list";

const Portafolios = () =>{
const [data, setData] = useState([])
useEffect(() =>{
 const fetchPortafolios = async () => {
    let res = await fetch(`http://${host}/api/Design`);
    let data = await res.json();
   setData(data) 
   console.log(data)
  
  };
fetchPortafolios()
},[])

return(
  <React.Fragment>
  
    <PortafolioList Portafolios={data} />
  </React.Fragment>
);


}
export default Portafolios