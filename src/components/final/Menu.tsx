import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import {useState} from 'react';

function Menu() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    return (
        <div>
            <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            
                <h1>Navegación</h1>
                <nav>
                    <Link to="/">Inicio</Link>|{" "}
                    <Link to="/ayuda">Ayuda</Link> |{" "}
                    <Link to="/clientes">Clientes</Link> |{" "}
                    <Link to="/login">Login</Link> {""}
                </nav>
            </LoginContext.Provider>
        </div>
    )
}
export default Menu;
