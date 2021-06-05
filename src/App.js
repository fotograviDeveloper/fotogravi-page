
import React, { Suspense, lazy} from 'react'
//importo pantalla de carga
import CargandoPagina from "./components/Pantalla de carga/PantalallaDeCarga"
import './App.css';

const HomePage = lazy(() => import ("./pages/Home.jsx"))

function App() {
  return (
   <div className="App">
         <Suspense className="suspense" fallback={<CargandoPagina></CargandoPagina>}>
       <HomePage/>
       </Suspense>
   
    </div>
  );
}

export default App;
