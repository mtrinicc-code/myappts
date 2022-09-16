import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/final/Menu';
import Cabecera from './components/Cabecera';
/*import PiePagina from './components/PiePagina';
import ContenidoPaginaPrincipal from './components/ContenidoPaginaPrincipal';
import FichaCliente from './components/FichaCliente';
import Envio from './components/Envio';
import FichaAlumno from './components/FichaAlumno';
import FormularioLogin from './components/FormularioLogin';

import 'bootstrap/dist/css/bootstrap.min.css';
import CosicasBootstrap from './components/CosicasBootstrap';
import FormularioValidaciones from './components/FormularioValidaciones';
import MiContenedor from './components/context/MiContenedor';
import CochesComponente from './components/clientes/ClienteComponente';*/
import AppRoutes from './components/final/AppRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecera></Cabecera>
      </header>
      <Menu></Menu>
      <AppRoutes></AppRoutes>
      {/*
      
      <MiContenedor></MiContenedor>
      <hr/>
      <Menu></Menu>
      <AppRoutes></AppRoutes>

      <CochesComponente></CochesComponente>

      <FormularioValidaciones></FormularioValidaciones>
      <CosicasBootstrap></CosicasBootstrap>

      <ContenidoPaginaPrincipal></ContenidoPaginaPrincipal>

      <FichaCliente nombre='nombre1' direccion="Dir 1" dni='dni1' tlf='tlf 1'></FichaCliente>
      <FichaCliente nombre='nombre2'></FichaCliente>
      <FichaCliente></FichaCliente>

      <Envio direccion_envio='direccion1' fecha_de_envio='fecha1' fecha_llegada_prevista='fechall1'></Envio>
      <Envio direccion_envio='direccion2'></Envio>
      <Envio></Envio>

      <FichaAlumno nombre='Alumno1'></FichaAlumno>
      <PiePagina></PiePagina>*/}

      
    </div>
  );
  // <FormularioLogin></FormularioLogin>
}

export default App;
