import React, { Component } from 'react';
import axios from 'axios';

export class ImportDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      successMsg: '',
      errorMsg: '',
      fileExt: "",
      contactLists: [],
      listName: '',
      contactList: ''
    };
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
      msg: ''
    });
  }


  componentDidMount() {
    axios.get('http://localhost:9695/contacts/getAllContactLists')
      .then(response => {
        if (response.status === 200) {
          // console.log(response.data);
          this.setState(
            {
              successMsg: "",
              errorMsg: "",
              contactLists: response.data
            }
          );
        }
        // console.log("contactLists : " + this.state.contactLists);
      }).catch(err => {
        this.setState({ error: err });
      });
  }

  uploadFileData = (event) => {
    event.preventDefault();
    this.setState({ msg: '' });

    let data = new FormData()
    data.append('file', this.state.file);

    const URL = 'http://localhost:9695/importcsvdata/' + this.state.contactList;
    console.log("URL=> " + URL);
    axios.post(URL, data)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.setState(
            {
              successMsg: "SUCCESS",
              errorMsg: ""
            }
          );
        } else if (response.status === 400) {
          this.setState(
            {
              successMsg: "",
              errorMsg: "Ugh!... you have selected a non-csv file"
            }
          );
        } else {
          this.setState(
            {
              successMsg: "",
              errorMsg: "FAILURE"
            }
          );
        }
      }).catch(err => {
        this.setState({ error: err });
        this.setState(
          {
            successMsg: "",
            errorMsg: "FAILURE"
          }
        );
      });

  }

  render() {
    return (
      <div>
        <div>
          {/* <h1 className='display-5 '>Import CSV Data</h1>
          <ul className="list-unstyled">
            <li><p className="text-muted">File extention must be <strong>.csv</strong></p></li>
            <li>
              <p className="text-muted">
                File must contain these columns in the same order: <strong>Name, Email, Country Code, mobile-1, Mobile-2, Zip, Priority, Status</strong>
              </p>
            </li>
            <li><p className="text-muted"></p></li>
          </ul> */}
        </div>
        <h4 className='display-6 text-success' onMouseMove={() => this.setState({ successMsg: '' })}>
          {(this.state.successMsg && this.state.successMsg === 'SUCCESS') ? 'Data imported successfully' : ""}
        </h4>
        <h4 className='display-6 text-danger' onMouseMove={() => this.setState({ errorMsg: '' })}>
          {(this.state.errorMsg && this.state.errorMsg === 'FAILURE') ? "Something went wrong!" : this.state.errorMsg}
        </h4>
        <div className="">
          {/* <span>
            <h1 className="display-6 text-muted">Choose file/files</h1>
          </span> */}
          <div style={{ "display": "flex", "padding": "0.5rem" }}>
            {/* <label>Choose List</label> */}
            <label class="input-group-text" for="inputGroupSelect01">Select contact list</label>
            <select class="form-select" id="inputGroupSelect01"
              name="contactList" onChange={(e) => this.setState({ contactList: e.target.value })} value={this.state.contactList}>
              {/* <option selected>Choose...</option> */}
              {
                this.state.contactLists.length > 0 ?
                  this.state.contactLists.map(list => {
                    return <option key={list.contactListId} value={list.contactListId}>
                      {list.listName}
                    </option>
                  })
                  : <option>Choose</option>
              }
            </select>
            <input onChange={this.onFileChange} type="file" className='form-control text-success' style={{ "marginLeft": "0.5rem" }} />
            <button disabled={!this.state.file} onClick={this.uploadFileData} className='form-control btn btn-success' style={{ "marginLeft": "0.5rem", "width": "20rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              <span style={{ "verticalAlign": "middle", "marginLeft": "0.5rem" }}>Import</span>
            </button>
          </div>
          <hr />
        </div>
      </div>
    )
  }
}

export default ImportDataComponent