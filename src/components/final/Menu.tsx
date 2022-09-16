import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import {useContext, useState} from 'react';

function Menu() {
    const { loggedIn, setLoggedIn } = useContext(LoginContext)

    return (
        <div>
            
            {loggedIn && 
                <>
                    <h1>Menú</h1>
                    <nav>
                        <Link to="/">Inicio</Link>|{" "}
                        <Link to="/ayuda">Ayuda</Link> |{" "}
                        <Link to="/clientes">Clientes</Link> |{" "}
                    </nav>
                </>
            }
        </div>
    )
}
export default Menu;
