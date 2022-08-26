import React, { Component } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';


function RegisterComponent() {
    const formik = useFormik({
        initialValues: {
            testName: '',
            clientId: '',
        },
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

                        <dt>client Id</dt>
                        <dd><input className="form-control" type="text" name="clientId" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.clientId} /> </dd>
                    </dl>
                    <div className="d-grid">
                        <input type="submit" className="btn btn-success" value="Register" />
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
                <header><h2 className='display-5 bg-secondary text-white text-center mb-2' >Online Tests</h2></header>
                <div className='row'>
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tests.map(test =>
                                        <tr key={test.testId}>
                                            <td>{test.testId}</td>
                                            <td>{test.testName}</td>
                                            <td>{test.clientId}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
                <footer>Copyright-2022</footer>
            </>
        )
    }
}

export default ConsumeBootApp