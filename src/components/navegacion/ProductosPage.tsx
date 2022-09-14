import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ListarProductos from './ListarProductos';
interface MiListado {
    listado: string [];
}
class  ProductosPage extends Component<any, MiListado>{
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            listado: ["Hola", "Adios"]
        }
    }
    render(): React.ReactElement{
        return (
            <div id="ProductosPage">
                <h2>ProductosPage</h2>
                <ListarProductos></ListarProductos>
            </div>
        )
    }
}

export default ProductosPage;
