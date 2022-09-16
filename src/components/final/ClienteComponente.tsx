import React, {Component} from 'react';
import {Cliente} from "./Cliente";
import {ClientesList} from "./ClientesList";
import {AddClienteForm} from "./AddClienteForm";

interface State {
    newCliente: Cliente;
    clientes: Cliente[];
}
class  ClientesComponente extends Component<any, State>{
    state = {
        newCliente: {
            id: 1,
            nombre: "",
            dir: "",
            tlf: ""
        },
        clientes: [
        ]
    };
    render(){
        return (
            <div id="ClientesComponent">
                <h2>Componente de clientess</h2>
                <AddClienteForm cliente={this.state.newCliente} onAdd={this.addCliente} onChange={this.handleClienteChange}/>
                <ClientesList clientes={this.state.clientes}  onDelete={this.deleteCliente}/>
            </div>
        );
    }

    private readonly handleClienteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            newCliente: {
                ...this.state.newCliente,
                nombre: event.target.value
            }
        });
    };

    private readonly addCliente = (cliente: Cliente) => {

        this.setState(previousState => ({
            newCliente: {
                id: previousState.newCliente.id + 1,
                nombre: ""
            },
            clientes: [...previousState.clientes, cliente]
        }));
    };

    private readonly deleteCliente = (clienteABorrar: Cliente) => {
        this.setState(previousState => ({
            clientes: [
                ...previousState.clientes.filter(cliente => cliente.id !== clienteABorrar.id)
            ]
        }));
    };


}
export default ClientesComponente;
