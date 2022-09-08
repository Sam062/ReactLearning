import { useFormik } from "formik";
import * as yup from "yup";
import React, { Component, useState, useEffect } from 'react'
import ContactListService from '../service/ContactListService';
import axios from 'axios';
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:9695";
const uri = "/contacts"
const URL = baseUrl + uri;

function EditContactListRow({ editFormData, handleEditFormChange, handleEditFormSubmit, setEditListId }) {

    return (
        <>
            <td hidden>
                <input type="text" onChange={handleEditFormChange}
                    value={editFormData.contactListId} name="contactListId" className="form-control" />
            </td>
            <td colSpan={2}>
                <input type="text" onChange={handleEditFormChange}
                    value={editFormData.listName} name="listName" className="form-control" placeholder="List Name(4-15 Characters)" />
            </td>
            <td colSpan={3}>
                <input type="text" onChange={handleEditFormChange}
                    value={editFormData.listDesc} name="listDesc" className="form-control" placeholder="List Description(4-50 Characters)" />
            </td>
            <td>
                <button className="btn text-success" onClick={handleEditFormSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                </button>
                <button className="btn text-danger" onClick={() => setEditListId(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
            </td>
        </>
    )
}

export function ContactLists() {
    const [contactList, setContactList] = useState([]);
    const [msg, setMsg] = useState('');
    const [isNewListAdded, setNewListAdded] = useState(false);
    const [isAddListHidden, setAddListHidden] = useState(false);
    const [editListId, setEditListId] = useState(null);
    const [editFormData, setEditFormData] = useState({});

    useEffect(() => {
        // Run the fetch posts code
        getAllContactLists();
    }, [isNewListAdded]);


    const getAllContactLists = () => {
        ContactListService.getAllContactLists().then(
            response => {
                // console.log(contactList);
                Array.isArray(response.data) ?
                    setContactList(response.data) : console.log('response not an array');
            }
        );
    }
    const deleteContactList = (event, id) => {
        event.preventDefault();
        let flag = window.confirm("Are you sure?");
        if (flag) {
            ContactListService.deleteContactList(id).then(response => {
                setMsg((response.data === 'SUCCESS') ? 'Deleted Successfully' : response.msg);
                getAllContactLists();
            })
        }
    }

    const handleEditClick = (event, contactList) => {
        // alert(contactList.contactListId)
        event.preventDefault();
        setEditListId(contactList.contactListId);

        const editFormValues = {
            contactListId: contactList.contactListId,
            listName: contactList.listName,
            listDesc: contactList.listDesc
        }
        setEditFormData(editFormValues);

    }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            contactListId: editListId,
            listName: editFormData.listName,
            listDesc: editFormData.listDesc
        };

        axios.post(`${URL}/saveOrUpdateContactList`, editedContact)
            .then(response => {
                console.log(response);
                setNewListAdded((prevState) => !prevState);
            })
        getAllContactLists();

        setEditListId(null);
    }

    return <>
        <div>
            <h1 className='display-6'>
                <button className={isAddListHidden ? "btn text-success btn-light border-dark rounded-pill" : "btn text-success"} style={{ "marginLeft": ".2rem" }} onClick={() => { setAddListHidden((prevState) => !prevState); setEditListId(null) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    <span style={{ "verticalAlign": "middle", "marginLeft": "0.5rem" }}>Add New List</span>
                </button>
                <span style={{ "marginLeft": "55rem" }}>Contact Lists</span>
            </h1>
            {
                msg && (
                    <div className='alert alert-success text-center' onMouseMove={() => setMsg('')}>{msg}</div>
                )
            }
            {
                isAddListHidden &&
                <div>
                    <AddContactList setNewListAdded={setNewListAdded} />
                </div>
            }
            <form>
                <table className="table table-hover">
                    <thead className='bg-info text-white'>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Desc</th>
                            <th>Created Date</th>
                            <th>Modified Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contactList.length > 0 ?
                                contactList.map(list => {
                                    return <>
                                        {editListId === list.contactListId ?
                                            <tr key={list.contactListId} className=''>
                                                <EditContactListRow
                                                    editFormData={editFormData}
                                                    setNewListAdded={setNewListAdded}
                                                    handleEditFormChange={handleEditFormChange}
                                                    handleEditFormSubmit={handleEditFormSubmit}
                                                    setEditListId={setEditListId}
                                                />
                                            </tr>
                                            :
                                            <tr key={list.contactListId} onDoubleClick={(e) => handleEditClick(e, list)}>
                                                <td>{list.contactListId}</td>
                                                <td>
                                                    <Link to={'/contactListData/' + `${list.contactListId}` + "/" + `${list.listName}`} className="" style={{ "textDecoration": "none", "color": "black" }}>
                                                        {list.listName}
                                                    </Link>
                                                </td>
                                                <td>{list.listDesc}</td>
                                                <td>{(list.createdDate.substr(0, 10))}</td>
                                                <td>{list.updatedDate.substr(0, 10)}</td>
                                                <td>
                                                    {/* <Link to={'/editContactList/' + list.contactListId + "/" + list.listName + "/" + list.listDesc}> */}
                                                    <button className='btn text-dark' onClick={(e) => handleEditClick(e, list)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                        </svg>
                                                    </button>
                                                    {/* </Link> */}
                                                    <button className='btn text-danger' style={{ "marginLeft": ".5rem" }} onClick={(e) => deleteContactList(e, list.contactListId)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        }
                                    </>
                                })
                                : <tr key={contactList.length}>
                                    <td colSpan={6}>
                                        <h1 className="display-6 text-danger text-center">No Data to display</h1>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </form>
        </div>
    </>
}


export function AddContactList({ setNewListAdded }) {
    const [msg, setMsg] = React.useState("");
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
                    if (response.data === 'SUCCESS') {
                        formik.values.listName = '';
                        formik.values.listDesc = '';

                        setNewListAdded((prevState) => !prevState);
                    }
                });
        },
        onReset: () => {
            setMsg('');
        }
    })

    return <>
        <div style={{ "padding": "0.5rem" }}>
            <form onSubmit={formik.handleSubmit} style={{ "display": "flex" }}>
                <div className="form-floating ">
                    <input type="text" name="listName" className={(formik.touched.listName && formik.errors.listName) ? "form-control is-invalid" : "form-control is-valid"}
                        id="floatingInput" placeholder="Input list name" style={{ "width": "35rem", "marginLeft": "8px" }}
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.listName}
                    />
                    <label htmlFor="floatingInput">List Name(4-15 characters)</label>
                </div>
                <div className="form-floating">
                    <input type="text" name="listDesc"
                        className={(formik.touched.listDesc && formik.errors.listDesc) ? "form-control is-invalid" : "form-control is-valid"}
                        id="floatingDesc" placeholder="Input list description" style={{ "width": "35rem", "marginLeft": "5px" }}
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.listDesc}
                    />
                    <label htmlFor="floatingDesc">List Description(4-50 characters)</label>
                </div>
                <button
                    className="btn btn-success" style={{ "marginLeft": "0.5rem", "width": "20rem" }} type="submit"
                    disabled={formik.errors.listName || formik.errors.listDesc || formik.values.listName.trim().length <= 0 || formik.values.listDesc.trim().length <= 0}>
                    <span style={{ "verticalAlign": "middle", "marginLeft": "0.5rem" }}>Add</span>
                </button>
            </form>
        </div>
        <hr />
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

                {/* <Link to='/newContactList' className='btn btn-light'>Add contact list</Link>
                <Link to='/viewAllContactList' className='btn btn-light'>View all</Link> */}

            </div>
        )
    }
}

export default ContactListComponent