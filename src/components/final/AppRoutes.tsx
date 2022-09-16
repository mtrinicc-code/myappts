import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PeticionBackend from "../http-axios/PeticionBackend";
import ClientesComponente from "./ClienteComponente";
import { Login } from "./Login";

function AppRoutes() {

    return (
        <div>
                <Routes>
                    <Route path="/" element={<h1>Inicio</h1>} />
                    <Route path="ayuda" element={<h1>Ayuda...</h1>} />
                    <Route path="clientes" element={ <div><h1>Clientes:</h1> <ClientesComponente></ClientesComponente></div>}/>
                    <Route path="login" element={<Login></Login>} />

                    <Route
                        path="*"
                        element={
                            <h1>Page Not Found</h1>
                        }
                    />
                </Routes>
        </div>
    )
}
export default AppRoutes;