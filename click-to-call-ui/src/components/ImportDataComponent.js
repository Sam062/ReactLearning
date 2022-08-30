import React, { Component } from 'react'

export class ImportDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      successMsg: '',
      errorMsg: '',
      fileExt: ""
    };
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
      msg: ''
    });
  }



  uploadFileData = (event) => {
    event.preventDefault();
    this.setState({ msg: '' });

    let data = new FormData();
    data.append('file', this.state.file);

    fetch('http://localhost:9695/importcsvdata', {
      method: 'POST',
      body: data
    }).then(response => {
      if (response.status === 200) {
        this.setState(
          {
            successMsg: "SUCCESS",
            errorMsg: ""
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
    });

  }

  render() {
    return (
      <div id="container-fluid">
        <div className="container-fluid">
          <h1 className='display-5 '>Import CSV Data</h1>
          <ul className="list-unstyled">
            <li><p className="text-muted">File extention must be <strong>.csv</strong></p></li>
            <li>
              <p className="text-muted">
                File must contain these columns in the same order: <strong>Name, Email, Country Code, mobile-1, Mobile-2, Zip, Priority, Status</strong>
              </p>
            </li>
            <li><p className="text-muted"></p></li>
          </ul>
        </div>
        <br />
        <div className="form-control">
          <span><h1 className="display-6 text-muted">Choose file/files</h1></span>
          <input onChange={this.onFileChange} type="file" className='form-control text-success'></input>
          <button disabled={!this.state.file} onClick={this.uploadFileData} className='btn btn-success mt-2' style={{ "width": "-webkit-fill-available" }}>
            Import
          </button>
          <br /><br />
        </div>
        <h4 className='display-6 text-success'>
          {(this.state.successMsg && this.state.successMsg === 'SUCCESS') ? 'Data imported successfully' : ""}
        </h4>
        <h4 className='display-6 text-danger'>
          {(this.state.errorMsg && this.state.errorMsg === 'FAILURE') ? "Data import failed" : ""}
        </h4>
      </div>
    )
  }
}

export default ImportDataComponent