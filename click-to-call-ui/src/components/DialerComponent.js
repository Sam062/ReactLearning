import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useParams, useNavigate } from 'react-router-dom';
import ImportDataComponent from './ImportDataComponent';


class ImportCSVComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactLists: [],
            file: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9695/contacts/getAllContactLists', []).then(response => {
            this.setState({
                contactLists: response.data
            })
        })
    }


    // const formik = useFormik({
    //     initialValues: {
    //         contactList: '',
    //         file: ''
    //     },
    //     // validationSchema: yup.object({
    //     //     listName: yup.string().trim().required("List name required.").min(4, "Name too short.").max(15, "Name too long."),
    //     //     listDesc: yup.string().trim().required("List description required.").min(4, "Description too short.").max(50, "Description too long.")
    //     // }),
    //     onSubmit: (values) => {
    //         // axios.post(`${URL}/saveOrUpdateContactList`, values)
    //         //     .then((response) => {
    //         //         alert((response.data === 'SUCCESS') ? 'Contact List addedd successfully' : 'Something went wrong');
    //         //         setMsg((response.data === 'SUCCESS') ? 'Contact List addedd successfully' : 'Something went wrong')
    //         //         if(response.data === 'SUCCESS'){
    //         //             formik.values.listName='';
    //         //         formik.values.listDesc='';
    //         //         }

    //         //     });
    //         // navigate('/viewAllContactList');
    //         alert('form submitte')
    //     },
    //     onReset: () => {
    //         setMsg('');
    //     }
    // })

    render() {
        return <>
            <form style={{ "display": "flex" }}>
                <div className="form-control">
                    <span><h1 className="display-6 text-muted">Choose file/files</h1></span>
                    <label >Choose Contact List</label>
                    <select className="form-select" style={{ "width": "max-content" }}>
                        {
                            this.state.contactLists.map(lists => {
                                return <option key={lists.contactListId} value={lists.contactListId}>
                                    {lists.listName}
                                </option>
                            })
                        }
                    </select>
                    {/* <input type="file" className='form-control text-success' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.file} /> */}
                </div>
            </form>
            <br />
        </>
    }
}

export default function DialerComponent() {
    const [dialerList, setDialerList] = useState([]);
    const [msg, setMsg] = useState('');
    const [dialStatus, setDialStatus] = useState('');
    const [isDataImported, setDataImported] = useState(false);
    const [isImportHidden, setImportHidden] = useState(false);

    useEffect(() => {
        getAllDialerData();
    }, [isDataImported]);

    const getAllDialerData = () => {
        axios.get('http://localhost:9695/getDialerData').then(
            response => {
                setDialerList(response.data);
            }
        );
    }

    const dialNumber = (countryCode, mobile) => {
        let flag = window.confirm('Are you sure to dial ' + countryCode + mobile);
        if (flag) {
            axios.get("http://localhost:9695/handledial?countryCode=" + encodeURIComponent(countryCode) + "&number=" + mobile)
                .then((response) => {
                    setDialStatus(response.data)
                });
        } else {
            setDialStatus('')
        }
    }

    return <>
        <div>
            <h1 className='display-6'>
                <button className="btn text-success" style={{ "marginLeft": ".2rem" }} onClick={() => setImportHidden((prevState) => !prevState)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                    <span style={{ "verticalAlign": "middle", "marginLeft": "0.5rem" }}>Import CSV</span>
                </button> <span style={{ "marginLeft": "55rem" }}>Dialer Data</span>
            </h1>
            {
                dialStatus && (
                    <div id='dialStatusBox' className={(dialStatus !== 'Failed to dial') ? 'alert alert-success text-center' : 'alert alert-danger text-center'}>{dialStatus}</div>
                )
            }
            { //Import Data form show/hide
                isImportHidden &&
                <div>
                    <ImportDataComponent setDataImported={setDataImported} />
                </div>
            }
            <table className="table table-hover">
                <thead className='bg-info text-white'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile-1</th>
                        <th>Mobile-2</th>
                        <th>Zip</th>
                        <th>Priority(1-10)</th>
                        <th>Status</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dialerList.length > 0 ?
                            dialerList.map(list => {
                                return <tr key={list.dialerId}>
                                    <td>{list.name}</td>
                                    <td>{list.email}</td>
                                    <td>{list.countryCode}{list.mobile1}</td>
                                    <td>{list.countryCode}{list.mobile2}</td>
                                    <td>{list.zip}</td>
                                    <td>{list.priority}</td>
                                    <td>{list.status}</td>
                                    <td>
                                        <button className='btn btn-primary text-light' onClick={() => this.deleteContactList(list.contactListId)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                            </svg>
                                        </button>
                                        <button className='btn text-light btn-success' style={{ "marginLeft": ".5rem" }} onClick={() => this.dialNumber(`${list.countryCode}`, `${list.mobile1}`)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            })
                            : <tr>
                                <td colSpan={8}>
                                    <h1 className='display-6 text-center text-danger'>No Data to display</h1>
                                </td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    </>

}
