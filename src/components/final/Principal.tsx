import React, {useState} from 'react';
import AppRoutes from './AppRoutes';
import { Login } from './Login';

import {LoginContext} from "./LoginContext";
import Menu from './Menu';



function Principal() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            <Login />
            <Menu />
            <AppRoutes />
        </LoginContext.Provider>
    );
}

export default Principal;