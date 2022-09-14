import React from 'react';
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";
function InicioPage () {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();

    function onclick() {
        console.log("navega");
        navigate("/");
    }

    return (
            <div>
                <h2>Inicio</h2>
                <p><button onClick={onclick}>InicioPage</button> </p>
            </div>

    )


}
export default InicioPage;