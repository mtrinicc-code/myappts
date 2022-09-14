import React from 'react';
import {Link, useParams,useNavigate} from "react-router-dom";

function ContactoPage() {
        let params = useParams();
        let navigate = useNavigate();

        return (
            <div id="ContactoPage">
                <Link to="/listado">ProductosPage</Link>
                <button onClick={() => { navigate("/listado"); }}>Ir al listado</button>
                <h2>ContactoPage: {params.id}</h2>
            </div>
        )
}

export default ContactoPage;
