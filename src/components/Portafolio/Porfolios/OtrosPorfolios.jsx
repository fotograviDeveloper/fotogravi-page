//este componente contiene la data que se exportara para ser utulizada en el componente Portafolio.list.jsx que se encarga de pintar 
//las targetas correspondientes 

import React from "react";
import PortafolioList from "./Potrtafolio.list/Porfolio.list";
import "./Css/PortafoliosCards.css"




class Portafolios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          link: "https://www.facebook.com/media/set/?vanity=Garces.fotogravi&set=a.220693983112366",
          img: "https://scontent.fntr6-3.fna.fbcdn.net/v/t1.6435-9/143774438_208001921048239_1228140768136067483_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_ohc=HsT3Ost-c6UAX-z9qGW&_nc_ht=scontent.fntr6-3.fna&oh=d203fdf754a3cc3af057d8a76364398b&oe=60DE7245",
          titulo: "Painting",
         description: "este es la descripcion de lo que se en contrara en cada distinto portafolio p1",
         textoAlterno:   "Esta es una imagen de prueba",
        },
        {
          id: 2,
          link: "/art/ilustration",
          img: "https://scontent.fntr6-1.fna.fbcdn.net/v/t1.6435-9/154049807_223183212863443_7642754914503163852_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=D3YGTdLJbIYAX_g2uH6&tn=K93RzNtJHR2Ge4KF&_nc_ht=scontent.fntr6-1.fna&oh=e4980c67e379c205942492e797a98f0b&oe=60DD852B",
          titulo: "ilustracion",
          description:  "este es la descripcion de lo que se en contrara en cada distinto portafoliop2",
          textoAlterno:"Esta es una imagen de prueba2",
        },
        {
          id: 3,
          link: "/Design/web-design",
          img: "https://www.varnitec.com/sites/default/files/2020-06/2.jpg",
          titulo: "Diseño Web",
          description:  "este es la descripcion de lo que se en contrara en cada distinto portafoliop3",
        textoAlterno:  "Esta es una imagen de prueba3",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <h4 className="encavesado">Mis otros Portafolios</h4>
  <PortafolioList Portafolios = {this.state.data}/>
      </React.Fragment>
    );
  }
}

export default Portafolios;
