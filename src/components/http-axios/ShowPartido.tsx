import React, {Component} from 'react';
import Partido from "./Partido";

interface IPartido {
    partido: Partido
}
class  ShowPartido extends Component<IPartido>{
    render(): React.ReactElement{
        const imgurl= "https://cursosdedesarrollo.com/pactometro/img/"+this.props.partido.imagen;
        const alt="Logotipo del "+ this.props.partido.nombre;
        return (
            <tr key={this.props.partido.nombre}>
                <td  scope="row">{this.props.partido.nombre}</td>
                <td>{this.props.partido.dipu} escaños</td>
                <td><img src={imgurl} alt={alt} style={{height: '50px'}}/></td>
            </tr>

        )
    }
}

export default ShowPartido;
