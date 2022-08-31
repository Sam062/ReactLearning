import { useFormik } from "formik";
import * as yup from "yup";
import React, { Component } from 'react'
import ContactListService from '../service/ContactListService';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const URL = "http://localhost:9695/contacts";


export const EditContactList = () => {
    const { id } = useParams();
    const { name } = useParams();
    const { desc } = useParams();

    const navigate = useNavigate();

    const [getMsg, setMsg] = React.useState("");

    const formik = useFormik({
        initialValues: {
            listName: name.trim(),
            listDesc: desc.trim(),
            contactListId: id
        },
        validationSchema: yup.object({
            listName: yup.string().trim().required("List name required.").min(4, "Name too short.").max(15, "Name too long."),
            listDesc: yup.string().trim().required("List description required.").min(4, "Description too short.").max(50, "Description too long.")
        }),
        onSubmit: (values) => {
            console.log(values)
            axios.post(`${URL}/saveOrUpdateContactList`, values)
                .then((response) => {
                    alert((response.data === 'SUCCESS') ? 'Contact List updated successfully' : 'Something went wrong');
                    setMsg((response.data === 'SUCCESS') ? 'Contact List updated successfully' : 'Something went wrong');
                });
            navigate("/viewAllContactList");
        },
        onReset: () => {
            setMsg('');
        }
    })

    return <>
        <div className='container-fluid d-grid'>
            <form className='form-control mt-4 bg-light' style={{ "height": "20rem" }} onSubmit={formik.handleSubmit}>
                <h1 className='display-6 text-center'>Edit Contact List</h1>
                <div className='mt-3'>
                    <input type="text" readOnly hidden name="contactListId" className='form-control' placeholder='Input contact list name' onChange={formik.handleChange} value={formik.values.contactListId} />
                    <br />

                    <input type="text" required name="listName" className='form-control' placeholder='Input contact list name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.listName} />
                    <span className='text-danger'>{(formik.touched.listName && formik.errors.listName) ? formik.errors.listName : null}</span>

                    <br />
                    <input type="text" required name="listDesc" className='form-control' placeholder='Input contact list description' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.listDesc} />
                    <span className='text-danger'>{(formik.touched.listDesc && formik.errors.listDesc) ? formik.errors.listDesc : null}</span>

                    <br />
                    <div className='text-center'>
                        <button type='submit' className='btn btn-success m-1' style={{ "width": "49%" }}
                            disabled={formik.errors.listName || formik.errors.listDesc ||
                                (formik.values.listName.trim() === name.trim() && formik.values.listDesc.trim() === desc.trim())
                                || formik.values.listName.trim().length <= 0 || formik.values.listDesc.trim().length <= 0
                            }>
                            Update</button>
                        <button type='reset' className='btn btn-danger m-1' style={{ "width": "49%" }} onClick={formik.handleReset}>reset</button>
                    </div>
                </div>
            </form>
            <div className='text-center mt-2'>
                <h3 className='bg-success text-light' style={{ "fontWeight": "100" }}>{getMsg}</h3>
            </div>
        </div>
    </>
}

export class ContactLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [],
            msg: null
        }
    }

    getAllContactLists() {
        ContactListService.getAllContactLists().then(
            response => {
                this.setState({ contactList: response.data });
            }
        );
    }

    componentDidMount() {
        this.getAllContactLists();
    }
    deleteContactList(id) {
        let flag = window.confirm("Are you sure?");
        if (flag) {
            ContactListService.deleteContactList(id).then(response => {
                this.setState({ msg: (response.data === 'SUCCESS') ? 'Deleted Successfully' : response.msg });
                this.getAllContactLists();
            })
        }
    }

    createContactList() {
        alert(this.form.data);
        ContactListService.createContactList();
    }

    render() {
        return <>
            <div>
                <h1 className='display-6 text-center'>Contact Lists</h1>
                {
                    this.state.msg && (
                        <div className='alert alert-success text-center'>{this.state.msg}</div>
                    )
                }
                <table className="table table-hover">
                    <thead className='bg-info text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Desc</th>
                            <th>Created Date</th>
                            <th>Modified Date</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contactList.map(list => {
                                return <tr key={list.contactListId}>
                                    <td>{list.listName}</td>
                                    <td>{list.listDesc}</td>
                                    <td>{list.createdDate}</td>
                                    <td>{list.updatedDate}</td>
                                    <td>
                                        <Link to={'/editContactList/' + list.contactListId + "/" + list.listName + "/" + list.listDesc}>
                                            <button className='btn btn-warning'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg>
                                            </button>
                                        </Link>
                                        <button className='btn btn-danger' style={{ "marginLeft": ".5rem" }} onClick={() => this.deleteContactList(list.contactListId)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    }

}



export function AddContactList() {
    const [getMsg, setMsg] = React.useState("");
    const history = useNavigate();
    const formik = useFormik({
        initialValues: {
            listName: '',
            listDesc: ''
        },
        validationSchema: yup.object({
            listName: yup.string().trim().required("List name required.").min(4, "Name too short.").max(15, "Name too long."),
            listDesc: yup.string().trim().required("List description required.").min(4, "Description too short.").max(50, "Description too long.")
        }),
        onSubmit: (values) => {
            axios.post(`${URL}/saveOrUpdateContactList`, values)
                .then((response) => {
                    // alert((response.data === 'SUCCESS') ? 'Contact List addedd successfully' : 'Something went wrong');
                    setMsg((response.data === 'SUCCESS') ? 'Contact List addedd successfully' : 'Something went wrong')
                });
            history('/viewAllContactList');
        },
        onReset: () => {
            setMsg('');
        }
    })

    return <>
        <div className='container-fluid d-grid'>
            <form className='form-control mt-4 bg-light' style={{ "height": "18rem" }} onSubmit={formik.handleSubmit}>
                <h1 className='display-6 text-center'>Add Contact List</h1>
                <div className='mt-3'>
                    <input type="text" required name="listName" className='form-control' placeholder='Input contact list name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.listName} />
                    <span className='text-danger'>{(formik.touched.listName && formik.errors.listName) ? formik.errors.listName : null}</span>

                    <br />
                    <input type="text" required name="listDesc" className='form-control' placeholder='Input contact list description' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.listDesc} />
                    <span className='text-danger'>{(formik.touched.listDesc && formik.errors.listDesc) ? formik.errors.listDesc : null}</span>

                    <br />
                    <div className='text-center'>
                        <button type='submit' className='btn btn-success m-1' style={{ "width": "49%" }} disabled={formik.errors.listName || formik.errors.listDesc || formik.values.listName.trim().length <= 0 || formik.values.listDesc.trim().length <= 0}>Add</button>
                        <button type='reset' className='btn btn-danger m-1' style={{ "width": "49%" }} onClick={formik.handleReset}>reset</button>
                    </div>
                </div>
            </form>
            <div className='text-center mt-2'>
                <h3 className='bg-success text-light' style={{ "fontWeight": "100" }}>{getMsg}</h3>
            </div>
        </div>
    </>
}

class ContactListComponent extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     contactList: [],
        //     msg: null
        // }
    }

    render() {
        return (
            <div>
                <h2 className='display-6 text-center'>Contact Lists</h2>

                <Link to='/newContactList' className='btn btn-light'>Add contact list</Link>
                <Link to='/viewAllContactList' className='btn btn-light'>View all</Link>

            </div>
        )
    }
}

export default ContactListComponent