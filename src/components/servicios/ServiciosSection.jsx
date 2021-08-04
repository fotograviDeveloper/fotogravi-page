import React, { Component } from "react";
import "./serviciosSection.css";
import diseño from "../../assets/svg/diseño2.svg";
import diseñoWeb from "../../assets/svg/diseñoweb2.svg";
import branding2 from "../../assets/svg/branding2.svg";
import diseñoPublic from "../../assets/svg/redesSociales2.svg";
import option from "../../assets/svg/option.svg";

class ServiciosSection extends Component {
  render() {
    return (
      <React.Fragment><div className="cad"> 
            <h2>Servicios</h2>
          </div>
        <div className="services" id="Servicios">
          
          <section className="car">
            <article className="card__item">
              <div className="card__content">
                <figure className="card__picture">
                  <img src={branding2} className="card__img" alt="imagen vectorial creacion de logos" />
                </figure>
                <div className="card__text">
                  <h2 className="class__titulo">Branding design</h2>
                  <p className="card__parrafo">
                    Diseñemos juntos la marca que deseas tener. <br></br>
                    Si deseas crear una marca desde 0 o renovar la imagen y
                    persepcion de tu marca actual. <br></br>
                    Contamos con branding y rebranding profecional para atudarte
                    con lo que necesites{" "}
                  </p>
                </div>
              </div>
            </article>
            <article className="card__item">
              <div className="card__content">
                <figure className="card__picture">
                  <img src={diseño} className="card__img" alt="imagen vectorial diseño grafico" />
                </figure>
                <div className="card__text">
                  <h2 className="class__titulo">Diseño e ilustracion</h2>
                  <p className="card__parrafo">
                    + Diseño publicitario <br />
                    + Ilustracion vectorial <br />
                    + Matte painting en Photoshop <br />
                    + Edicion de imagen <br />
                    + Fotomonteajes profecionales <br />
                    + Retoque fotografico <br />
                    + Fotografia de producto <br />+ Banners y material impreso
                  </p>
                </div>
              </div>
            </article>
            <article className="card__item">
              <div className="card__content">
                <figure className="card__picture">
                  <img src={diseñoWeb} className="card__img" alt="imagen vectorial diseño web y programacion"/>
                </figure>
                <div className="card__text">
                  <h2 className="class__titulo">Diseño web</h2>
                  <p className="card__parrafo">
                 + Diseño de interfaces <br />
                 + Diseño web responsivo (adaptado a todo dispositivo) <br />
                 + Maquetacion de tu sitio web <br />
                 + Programacion frontend <br />
                 + Administracion de tu sitio web <br />
                 + Creacion de portafolios <br />
                 + Hosting y sertificado SSH  (sericio de terceros)

                  </p>
                </div>
              </div>
            </article>
            <article className="card__item">
              <div className="card__content">
                <figure className="card__picture">
                  <img src={diseñoPublic} className="card__img" alt="imagen vectorial diseño publicitario"/>
                </figure>
                <div className="card__text">
                  <h2 className="class__titulo">Marketing </h2>
                  <p className="card__parrafo">
                  + Creacion de campañas de Marqueting <br />
                 + Gestión de redes sociales <br />
                 + Asesoria personalizada <br />
                 + Elavoracion de contenido publicitario <br />
                 + CEO de pagina web y redes sociales <br />
                 + Analizis de riesgo <br />
                
                   </p>
                </div>
              </div>
            </article>
            <article className="card__item">
              <div className="card__content">
                <figure className="card__picture">
                  <img src={option} className="card__img" alt="imagen vectorial otros servicios" />
                </figure>
                <div className="card__text">
                  <h2 className="class__titulo">Otros servicios </h2>
                  <p className="card__parrafo">
                     
                   + Programacion backend (servidor) <br />
                   + Creacion de bases de datos <br />
                   + Fotografia <br />
                   + Gravacion de video <br />
                   + Motion grafics / Animacion / Diseño 3d <br />
                   + Edicion y Gravacion de audio<br /> <br />
                   *Algunos de estos servicios son entregados por profecionales externas a la marca*
                  </p>
                </div>
              </div>
            </article>
            <div className="disclaimer" >
            <p style={{ color: "#454545" }}>
              {" "}
             **Cada uno de los servicios puede ser contratado deforma individual o
              formar un paquete acorde a tus necesidades**
            </p>
            <span>
                <a href="/contacto" className="disclamier__redirect"> Pedir cotizacion</a>
            </span>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default ServiciosSection;
