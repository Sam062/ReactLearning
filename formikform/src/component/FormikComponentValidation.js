import React from 'react';
import { Formik, Form, Filed, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const FormikComponentValidation = () => {
    return (
        <Formik initialValues={
            {
                Name: "",
                Salary: "",
                Email: ""
            }
        }
            validationSchema={
                yup.object({
                    Name: yup.string().required("Name is required").min(3, "Name too short").max(10, "Name too long"),
                    Salary: yup.number().required("Salary is required").typeError("Invalid salary"),
                    Email: yup.string().email("Invalid Email").required("Email is required")
                })
            }
            onSubmit={
                values => {
                    alert(JSON.stringify(values));
                }
            }
        >
            {
                (props) => (
                    <div className='container'>
                        <h1 className='display-1 text-success'>Register User</h1>
                        <Form className='form-control'>
                            <dl>
                                <dt>Name</dt>
                                <dd><Field type="text" name="Name"></Field></dd>
                                <dd className='text-danger'>
                                    <ErrorMessage name='Name'></ErrorMessage>
                                </dd>
                                <dt>Salary</dt>
                                <dd><Field type="text" name="Salary"></Field></dd>
                                <dd className='text-danger'>
                                    <ErrorMessage name='Salary'></ErrorMessage>
                                </dd>
                                <dt>Email</dt>
                                <dd><Field type="email" name="Email"></Field></dd>
                                <dd className='text-danger'>
                                    <ErrorMessage name='Email'></ErrorMessage>
                                </dd>
                                <dt>City</dt>
                                <dd><Field as="select" name="City">
                                        <option>Delhi</option>
                                        <option>Hyd</option>
                                        <option>BNG</option>
                                    </Field></dd>
                                <dd className='text-danger'>
                                    <ErrorMessage name='Email'></ErrorMessage>
                                </dd>
                            </dl>
                            <div className='d-flex'>
                                <button className='btn btn-success' disabled={props.isValid==false}>Register</button>
                                <button className='btn btn-success' disabled={props.dirty==false}>Save</button>
                            </div>
                        </Form>
                    </div>
                )
            }

        </Formik>
    )
}

export default FormikComponentValidation;