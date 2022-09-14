import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert';

import 'bootstrap/dist/css/bootstrap.min.css';

class CosicasBootstrap extends Component {

    render() {
        return (
            <div>
                <h1>CosicasBootstrap</h1>
                <Alert key={'akey'} variant={'avariant'}>
                This is an alert
                </Alert>
            </div>
        );
    }
}
export default CosicasBootstrap;