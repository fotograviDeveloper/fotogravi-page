import React, { Suspense, lazy } from "react";
//importo pantalla de carga
import CargandoPagina from "./components/Pantalladecarga/PantalallaDeCarga";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Trabajos from "./pages/TrabajosPage";
const HomePage = lazy(() => import("./pages/Home.jsx"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense
          className="suspense"
          fallback={<CargandoPagina></CargandoPagina>}
        >
          <Route exact path="/" component={HomePage} />
          <Route path="/Design" component={Trabajos} />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
