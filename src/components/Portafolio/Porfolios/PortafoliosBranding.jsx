//este componente contiene la data que se exportara para ser utilized en el componente Portafolio.list.jsx que se encarga de pintar
//las targetas correspondientes

import React,{ useState, useEffect}  from "react";
import host from "../../../control/diminio";
import PortafoliosBrandingList from "../Porfolios/Potrtafolio.list/PortafolioBrandingList";;



const Branding = () => {
  const [data, setData] = useState([])
  useEffect(() =>{
   const fetchPortafolios = async () => {
      let res = await fetch(`http://${host}/api/Design/branding`);
      let data = await res.json();
     setData(data) 
     console.log(data)
    
    };
  fetchPortafolios()
  },[])

    return (
      <React.Fragment>
      <div className="branding">
       <PortafoliosBrandingList Trabajos={
    data
       } />
       </div>
      </React.Fragment>
    );
  }


export default Branding;
