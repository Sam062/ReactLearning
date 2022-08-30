import React, { Component } from 'react'
import ContactListService from '../service/ContactListService';
import { useFormik } from 'formik';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default class DialerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialerList: [],
            msg: null,
            dialStatus: ''
        }
    }

    getAllDialerData() {
        axios.get('http://localhost:9695/getDialerData').then(
            response => {
                this.setState({ dialerList: response.data });
            }
        );
    }

    componentDidMount() {
        this.getAllDialerData();
    }

    // deleteDialerData(id) {
    //     let flag = window.confirm("Are you sure?");
    //     if (flag) {
    //         ContactListService.deleteContactList(id).then(response => {
    //             this.setState({ msg: (response.data == 'SUCCESS') ? 'Deleted Successfully' : response.msg });
    //             this.getAllContactLists();
    //         })
    //     }
    // }

    // editContactList(id) {
    //     alert("edit called = " + id);
    // }
    // createContactList() {
    //     alert(this.form.data);
    //     ContactListService.createContactList();
    // }

    dialNumber(countryCode, mobile) {
        let flag = window.confirm('Are you sure to dial ' + countryCode + mobile);
        if (flag) {
            // let dialStatusBoxElement=document.getElementById('dialStatusBox').style.display='none';
            // alert(dialStatusBoxElement)
            axios.get("http://localhost:9695/handledial?countryCode=" + encodeURIComponent(countryCode) + "&number=" + mobile)
            .then((response)=>{
                // alert(response.data);
                this.setState({
                    dialStatus: response.data
                })
            });
        }else{
            this.setState({
                dialStatus: ''
            })
        }
    }


    render() {
        return <>
            <div className='mt-2 bg-light'>
                <h1 className='display-6 text-center'>Dialer Lists</h1>
                {
                this.state.dialStatus && (
                    <div id='dialStatusBox' className={(this.state.dialStatus!='Failed to dial')?'alert alert-success text-center':'alert alert-danger text-center'}>{this.state.dialStatus}</div>
                )
            }
                <table className="table table-hover">
                    <thead className='bg-info text-white'>
                        <tr>
                            {/* <th>ID</th> */}
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
                            this.state.dialerList.map(list => {
                                return <tr key={list.dialerId}>
                                    {/* <td>{list.dialerId}</td> */}
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
                        }
                    </tbody>
                </table>
            </div>
        </>
    }

}
