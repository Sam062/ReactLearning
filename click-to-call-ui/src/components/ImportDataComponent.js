import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

export function ImportData_AddManualComponent() {
  return <>
    <h1 className='display-6 text-dark'>Add Data Manually Form</h1>
    <hr />
  </>
}
export function ImportData_ReadApiComponent() {
  return <>
    <h1 className='display-6 text-dark'>Read Data From API Form</h1>
    <hr />
  </>
}

export default function ImportDataComponent({ setDataImported, activeListId, activeListName }) {

  const [file, setFile] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    setSuccessMsg('');
    setErrorMsg('');
  };

  const uploadFileData = (event) => {
    // event.preventDefault();

    let data = new FormData()
    data.append('file', file);

    let completeFilename = file.name;
    let fileExtention = completeFilename.substr(completeFilename.length - 4);

    // alert(completeFilename); //dilerdata.csv------- need to work pn the extention
    // alert(fileExtention);

    if (fileExtention === '.csv') {
      const URL = 'http://localhost:9695/importcsvdata/' + activeListId;
      console.log("URL=> " + URL);
      axios.post(URL, data)
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            setSuccessMsg('SUCCESS');
            setErrorMsg('');

            setDataImported((prevState) => !prevState);
          } else if (response.status === 400) {
            setSuccessMsg('');
            setErrorMsg('Ugh!... you have selected a non-csv file');
          } else {
            setSuccessMsg('');
            setErrorMsg('FAILURE');
          }
        }).catch(err => {
          setSuccessMsg('');
          setErrorMsg('FAILURE');
        });
    } else {
      alert('Cannot process non csv file');
    }
  }

  return <div>
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
    <h4 className='display-6 text-success' onMouseMove={() => setSuccessMsg('')}>
      {(successMsg && successMsg === 'SUCCESS') ? 'Data imported successfully' : ""}
    </h4>
    <h4 className='display-6 text-danger' onMouseMove={() => setErrorMsg('')}>
      {(errorMsg && errorMsg === 'FAILURE') ? "Something went wrong!" : errorMsg}
    </h4>
    <div className="">
      {/* <span>
            <h1 className="display-6 text-muted">Choose file/files</h1>
          </span> */}
      <div style={{ "display": "flex", "padding": "0.5rem"}}>
        {/* <label>Choose List</label> */}
        <label className="input-group-text">{activeListName} </label>
        <select className="form-select" id="inputGroupSelect01" hidden
          name="contactList" value={activeListId} disabled style={{"marginLeft": "0.2rem"}}>
          <option value={activeListId} defaultValue>{activeListName}</option>
        </select>

        <input onChange={(event) => setFile(event.target.files[0])} type="file" className='form-control text-success' style={{ "marginLeft": "0.5rem" }} />
        <button disabled={!(file)} onClick={() => uploadFileData()} className='form-control btn btn-success' style={{ "marginLeft": "0.5rem", "width": "20rem" }}>
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
}