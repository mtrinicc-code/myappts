import React, {Component} from 'react';
import {Link} from "react-router-dom";
interface Productos {
    listado: string [];
}
class  ListarProductos extends Component<any, Productos>{
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            listado: ["Producto1", "Producto2"]
        }
    }
    render(): React.ReactElement{
        return (
            <div id="ListarProductos">
                <h2>ListarProductos</h2>
                <ul>

                    {this.state.listado.map(item => (
                        <li key={item}>

                            <Link to={{
                                pathname: "/productos/"+item
                            }}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ListarProductos;