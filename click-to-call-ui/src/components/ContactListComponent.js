import React, { Component } from 'react'
import ContactListService from '../service/ContactListService';
import {Link} from 'react-router-dom';

class ContactListComponent extends Component {
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
                console.log(this.state.contactList);
            }
        );
    }

    componentDidMount() {
        this.getAllContactLists();

    }
    deleteContactList(id) {
        // alert("dlete called =" + id);
        let flag = window.confirm("Are you sure?");
        if (flag) {
            ContactListService.deleteContactList(id).then(response => {
                this.setState({ msg: response.data });
                this.getAllContactLists();
            })
        }
    }

    editContactList(id) {
        alert("edit called = " + id)
    }
    createContactList() {
        alert("hi");
        this.props.history.push("/loadDummyComponent")
    }

    render() {
        return (
            <div>
                <h2 className='display-5'>Contact Lists</h2>
                <div>
                    <Link to="/addContactList">Add Contact List</Link>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead className='bg-info text-white'>
                            <tr>
                                <th>ID</th>
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
                                        <td>{list.contactListId}</td>
                                        <td>{list.listName}</td>
                                        <td>{list.listDesc}</td>
                                        <td>{list.createdDate}</td>
                                        <td>{list.updatedDate}</td>
                                        <td>
                                            <button className='btn btn-warning' onClick={() => this.editContactList(list.contactListId)}>Edit</button>
                                            <button className='btn btn-danger' style={{"margin-left":".5rem"}} onClick={() => this.deleteContactList(list.contactListId)}>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {
                    this.state.msg && (
                        <div className='alert alert-success'>{this.state.msg}</div>
                    )
                }
            </div>
        )
    }
}

export default ContactListComponent