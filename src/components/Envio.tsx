import React, {Component} from 'react';


interface DatosEnvio {
    nombre_cliente?: string;
    direccion_envio?: string;
    fecha_de_envio?: string;
    fecha_llegada_prevista?: string;
}
class Envio extends Component<DatosEnvio> {

    static defaultProps = {
        nombre_cliente: 'nombre_cliente defecto',
        direccion_envio: 'direccion_envio defecto',
        fecha_de_envio: 'fecha_de_envio defecto',
        fecha_llegada_prevista: 'fecha_llegada_prevista defecto'
    };

    render() {
        return (
            <div>
                <h3>{this.props.nombre_cliente}</h3>
                <p>{this.props.direccion_envio}</p>
                <p>{this.props.fecha_de_envio}</p>
                <p>{this.props.fecha_llegada_prevista}</p>
            </div>
        );
    }
}
export default Envio;
