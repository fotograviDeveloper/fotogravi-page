import React, { Suspense, lazy } from "react";
//importo pantalla de carga
import CargandoPagina from "./components/Pantalladecarga/PantalallaDeCarga";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Trabajos from "./pages/TrabajosPage";
import Footer from "./components/footer/footerPage";

//import Navbar from "./components/navbar/Navbar";
import Conoceme from "./pages/conoceme";
import Contacto from "./pages/Contacto";
import NavbarHome from "./components/navbar/NavbarHome/NavbarHome";
import Portafolio from "./pages/Portafolio";
import navbar1 from "./components/navbar/navbar1/navbar1";
import enviadoExitosamente from "./components/mensajeExito/EnvioExitoso";

const HomePage = lazy(() => import("./pages/Home.jsx"));
const Masportafolios = lazy(() => import("./pages/MasPortafolios"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense
          className="suspense"
          fallback={<CargandoPagina></CargandoPagina>}
        > 
          {" "}
          <Route exact path="/" component={NavbarHome} />
        
          <Route exact path="/" component={HomePage} />{" "}
        </Suspense>
       
        <Route exact path="/Design" component={Trabajos} />
        <Suspense
          className="suspense"
          fallback={<CargandoPagina></CargandoPagina>}
        >
           <Route path="/Conoceme" component={Conoceme} />
          {" "}
          <Route path="/portafolio/" component={Portafolio} />
            <Route path="/portafolios/:link" component={Masportafolios} />
        </Suspense>

        <Route path="/Contacto" component={Contacto} />
        <Route exact path="/correoEnviado" component={enviadoExitosamente} />
        <Route path="/test" component={navbar1} />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
