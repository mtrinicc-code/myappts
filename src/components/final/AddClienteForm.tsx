import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { FunctionComponent } from "react";
import {Cliente} from "./Cliente";


interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: Cliente) => void;
    cliente: Cliente;
}

export const AddClienteForm: FunctionComponent<Props> = ({
    onChange,
    onAdd,
    cliente
}) => {
    return (
        
        <Formik
        initialValues={{
            id: 0,
            nombre: '',
            dir: '',
            tlf: ''
        }}
        validationSchema={
        Yup.object().shape({
            nombre: Yup.string()
                .required('Tiene que introducir un nombre, es obligatorio'),
            tlf: Yup.string()
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                'Teléfono no válido')
            
        })}
        onSubmit={fields => {
            console.log('OK ' + JSON.stringify(fields))
            onAdd(Object.assign({},fields as Cliente));
            fields.id = fields.id + 1;
            fields.nombre = '';
            fields.dir = '';
            fields.tlf = '';
        }}>
            
        {({errors, status, touched}) => (
                <Form>
                    <div className='form-group'>
                        <label htmlFor="nombre" className='form-label'>Name</label>
                        <Field name='nombre' type='text'
                            className={'form-control' + (errors.nombre && touched.nombre ? ' is-invalid': '')}/>
                        <ErrorMessage name="nombre" component="div" className='invalid-feedback'/>
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor="dir" className='form-label'>Address</label>
                        <Field name='dir' type='text'
                            className={'form-control' + (errors.dir && touched.dir ? ' is-invalid': '')}/>
                        <ErrorMessage name="dir" component="div" className='invalid-feedback'/>
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor="tlf" className='form-label'>Phone</label>
                        <Field name='tlf' type='text'
                            className={'form-control' + (errors.tlf && touched.tlf ? ' is-invalid': '')}/>
                        <ErrorMessage name="tlf" component="div" className='invalid-feedback'/>
                    </div>

                    <div className='form-group'>
                        <button type="submit" className='btn btn-primary mr-2'>Add</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
};
