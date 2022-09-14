import React, {Component} from 'react';

interface DatosAlumno {
    nombre?: string;
    carrera?: string;
    asignaturas?: string;
}
class FichaAlumno extends Component<DatosAlumno> {

    static defaultProps = {
        nombre: 'Nombre defecto',
        carrera: 'Carrera defecto',
        asignaturas: 'Asignaturas defecto'
    };

    render() {
        return (
            <div>
                <h4>{this.props.nombre}</h4>
                <p>{this.props.carrera}</p>
                <p>{this.props.asignaturas}</p>
            </div>
        );
    }
}
export default FichaAlumno;
