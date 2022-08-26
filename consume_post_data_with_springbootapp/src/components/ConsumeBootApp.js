import React, { Component } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';


// const ValidateFormData = (props) => {
//     const errors = {
//         testName: "",
//         clientId: ""
//     }

//     if (!props.testName) {
//         errors.testName = "Test name is required";
//     } else if (props.testName.length < 4) {
//         errors.testName = "Name too short";
//     }
//     if (!props.clientId) {
//         errors.clientId = "ClientId is required";
//     } else if (props.clientId.length < 4) {
//         errors.clientId = "Client id too short";
//     }

//     return errors;
// }

function RegisterComponent() {
    const formik = useFormik({
        initialValues: {
            testName: '',
            clientId: '',
        },
        // validate: ValidateFormData,
        onSubmit: (values) => {
            axios.post('http://localhost:9695/saveOrUpdateTestDetails', values);
            alert("Record saved");
        }
    })
    return (
        <>
            <div className="container-fluid">
                <form onSubmit={formik.handleSubmit} className='form-control'>
                    <h1 className='display-5'>Register Test</h1>
                    <dl>
                        <dt>Test Name</dt>
                        <dd><input className="form-control" type="text" name="testName" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.testName} /> </dd>
                        {/* <dd className="text-danger">
                            {(formik.touched.testName && formik.errors.testName) ? formik.errors.testName : null}
                        </dd> */}

                        <dt>client Id</dt>
                        <dd><input className="form-control" type="text" name="clientId" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.clientId} /> </dd>
                        {/* <dd className="text-danger">
                            {(formik.touched.clientId && formik.errors.clientId) ? formik.errors.clientId : null}
                        </dd> */}
                    </dl>
                    <div className="d-grid">
                        <input type="submit" className="btn btn-success" value="Register"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export class ConsumeBootApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tests: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:9695/getAllTestDetails")
            .then(response => {
                this.setState({
                    tests: response.data
                })
            })
    }


    render() {
        return (
            <>
                <h2 className='display-5 bg-secondary text-white text-center mb-2' >Online Tests</h2>
                <div className='row' style={{"--bs-gutter-x": "-0.5rem"}}>
                    <div className='col-3'>
                        <RegisterComponent />
                    </div>
                    <div className='col-9'>
                        <h2 className='display-5 text-success' >Available Tests Data</h2>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>Test ID</th>
                                    <th>Test Name</th>
                                    <th>Client ID</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tests.map(test =>
                                        <tr key={test.testId}>
                                            <td>{test.testId}</td>
                                            <td>{test.testName}</td>
                                            <td>{test.clientId}</td>
                                            <td><button className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </>
        )
    }
}

export default ConsumeBootApp