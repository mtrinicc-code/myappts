import React, {Component} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Alert from 'react-bootstrap/Alert';

import 'bootstrap/dist/css/bootstrap.min.css';

class FormularioValidaciones extends Component {

    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({})}
                onSubmit={fields => {
                    console.log('OK ' + JSON.stringify(fields))
                }}>
                {({errors, status, touched}) => (
                    <Form>
                        <div className='form-group'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <Field name='email' type='email'
                                className={'form-control' + (errors.email && touched.email ? ' is-invalid': '')}/>
                            <ErrorMessage name="email" component="div" className='invalid-feedback'/>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor="password" className='form-label'>Password</label>
                            <Field name='password' type='password'
                                className={'form-control' + (errors.password && touched.password ? ' is-invalid': '')}/>
                            <ErrorMessage name="password" component="div" className='invalid-feedback'/>
                        </div>
                        <div className='form-group'>
                            <button type="submit" className='btn btn-primary mr-2'>Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }
}
export default FormularioValidaciones;