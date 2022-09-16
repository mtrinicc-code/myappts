import React, { FunctionComponent } from "react";

import {Cliente} from "./Cliente";

interface Props {
    cliente: Cliente;
    onDelete: (cliente: Cliente) => void;
}

export const ClienteListItem: FunctionComponent<Props> = ({ cliente, onDelete }) => {
    const onClick = () => {
        onDelete(cliente);
        //console.log(cliente);
    };

    return (
        <li>
            {cliente.nombre}, {cliente.email}, {cliente.id}, {cliente.tlf}, {cliente.tlf} <button onClick={onClick}>X</button>
        </li>
    );
};
