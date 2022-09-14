import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContactoPage from "./ContactoPage";
import Detalle from "./Detalle";
import InicioPage from "./InicioPage";
import ProductosPage from "./ProductosPage";

function Menu() {

    return (
        <div>
            
                <h1>Navegación</h1>
                <nav>
                    <Link to="/">Inicio</Link>|{" "}
                    <Link to="/productos">Productos</Link> |{" "}
                    <Link to="/contacto">Contacto</Link> |{" "}
                </nav>
        </div>
    )
}
export default Menu;
