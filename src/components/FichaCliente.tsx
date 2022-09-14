import React, {Component} from 'react';

interface Cliente {
    nombre?: string;
    direccion?: string;
    dni?: string;
    tlf?: string;
}
class FichaCliente extends Component<Cliente> {

    static defaultProps = {
        nombre: 'Nombre defecto',
        direccion: 'Dirección defecto',
        dni: 'DNI defecto',
        tlf: 'TLF defecto'
    };

    render() {
        return (
            <div>
                <h3>{this.props.nombre}</h3>
                <h4>{this.props.direccion}</h4>
                <h4>{this.props.dni}</h4>
                <h4>{this.props.tlf}</h4>
            </div>
        );
    }
}
export default FichaCliente;
