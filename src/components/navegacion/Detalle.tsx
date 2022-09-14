import React from 'react';
import {Link, useParams,useNavigate} from "react-router-dom";

function Detalle() {
        let params = useParams();
        let navigate = useNavigate();

        return (
            <div id="Detalle">
                <Link to="/productos">Listado</Link>
                <button onClick={() => { navigate("/productos"); }}>Ir al listado</button>
                <h2>Detalle: {params.id}</h2>
            </div>
        )
}

export default Detalle;
