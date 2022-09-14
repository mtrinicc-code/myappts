import React from 'react';
import {Link, useParams,useNavigate} from "react-router-dom";

function ContactoPage() {
        let params = useParams();
        let navigate = useNavigate();

        return (
            <div id="ContactoPage">
                <h2>ContactoPage </h2>
            </div>
        )
}

export default ContactoPage;
