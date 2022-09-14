import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
/*import ContactoPage from "./ContactoPage";
import InicioPage from "./InicioPage";
import ProductosPage from "./ProductosPage";*/

function Menu() {

    return (
        <div>
            
            <BrowserRouter>
                <h1>Navegación</h1>
                <nav>
                    <Link to="/">Inicio</Link>|{" "}
                    <Link to="/productos">Productos</Link> |{" "}
                    <Link to="/contacto">Contacto</Link> |{" "}
                </nav>
                <Routes>
                    <Route path="/" element={<h2>Inicio</h2>} />
                    <Route path="productos" element={<h2>Productos</h2>} />
                    <Route path="contacto" element={<h2>Conctacto</h2>} />
                    <Route
                        path="*"
                        element={
                            <h1>Page Not Found</h1>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Menu;
