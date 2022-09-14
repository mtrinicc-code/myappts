import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContactoPage from "./ContactoPage";
import Detalle from "./Detalle";
import InicioPage from "./InicioPage";
import ProductosPage from "./ProductosPage";

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
                    <Route path="/" element={<InicioPage></InicioPage>} />
                    <Route path="productos" element={<ProductosPage></ProductosPage>} />
                    <Route path="contacto" element={<ContactoPage></ContactoPage>} />
                    <Route path="productos/:id" element={<Detalle></Detalle>} />
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
