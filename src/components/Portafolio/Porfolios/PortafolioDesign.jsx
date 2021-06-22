//este componente contiene la data que se exportara para ser utilized en el componente Portafolio.list.jsx que se encarga de pintar
//las targetas correspondientes

import React from "react";
import PortafolioListDesign from "./Potrtafolio.list/PortafolioListDesign";
import "./Css/PortafoliosCards.css";


class PortafolioDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          link: "/Design/Fotogravi",
          img: "https://scontent.fntr6-1.fna.fbcdn.net/v/t1.6435-9/147341471_213926780455753_5636160383937999965_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_ohc=MHBo74dHW08AX9mYHvl&_nc_ht=scontent.fntr6-1.fna&oh=a5baceb0416de1d50c42898ae593975f&oe=60DF74A7",
          titulo: "Fotogravi",
          description:
            "Aqui podras encontrar todo el proceso de cracion de mi marca personal.",
          textoAlterno: "Esta es una imagen de prueba2",
        },
        {
          id: 2,
          link: "/Design/siker",
          img: "https://scontent.fntr6-3.fna.fbcdn.net/v/t1.6435-9/100644715_111323717266264_5849992941757530112_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QK2gHgr-GKwAX83_3wQ&_nc_ht=scontent.fntr6-3.fna&oh=deebe61cfe477338115b55bfe4fab4cb&oe=60DF737C",
          titulo: "siker",
          description:
            "Siker fue una marca creada por mi para ofreser servicios de venta de casas.",
          textoAlterno: "Esta es una imagen de prueba",
        },
        {
          id: 3,
          link: "/Design/Espacios",
          img: "https://scontent.fntr6-1.fna.fbcdn.net/v/t1.6435-9/117195763_3146877345409030_4109017589639674676_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CpLtDrQRAoAAX8aq2og&tn=K93RzNtJHR2Ge4KF&_nc_ht=scontent.fntr6-1.fna&oh=a5b73f6d711be66b42e9026df45a16aa&oe=60DEEF6B",
          titulo: "Espacios",
          description:
            "Empresa inmobiliaria. He trabajado creando publicaciones y material impreso. ",
          textoAlterno: "Esta es una imagen de prueba3",
        },
        {
          id: 4,
          link: "/Design/naely-Ro",
          img: "https://scontent.fntr6-1.fna.fbcdn.net/v/t1.15752-9/164808811_759001388060017_9203310102582665695_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=gqCRWX1p0X0AX85B8Eb&_nc_ht=scontent.fntr6-1.fna&oh=35adc59eda9899304a169452d45dfe68&oe=60DE5BEF",
          titulo: "Nerly Ro",
          description:
            "Pasteleria local a la cual le elabore un nuevo logo, ya que no contaba con uno.",
          textoAlterno: "Esta es una imagen de prueba",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
      <div className="c">
        <PortafolioListDesign Trabajos={this.state.data} /></div>
      </React.Fragment>
    );
  }
}

export default PortafolioDesign;
