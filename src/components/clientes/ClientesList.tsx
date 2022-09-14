import React, { FunctionComponent } from "react";
import {Cliente} from "./Cliente";
import {ClienteListItem} from "./ClienteListItem";

interface Props {
    clientes: Cliente[];
    onDelete: (cliente: Cliente) => void;
}

export const ClientesList: FunctionComponent<Props> = ({ clientes, onDelete }) => (
    <ul>
        {clientes.map(cliente => (
            <ClienteListItem key={cliente.id} cliente={cliente}  onDelete={onDelete}/>
        ))}
    </ul>
);
