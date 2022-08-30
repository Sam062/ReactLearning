import React, { Component } from 'react'

export class Error404Component extends Component {
  render() {
    return (
      <div>
        <h1 className='display-1 text-danger text-center mt-5'>
            Ugh! 404 Error...
        </h1>
        <h1 className='display-4 text-danger text-center mt-5'>
            Requested page not found 
        </h1>
      </div>
    )
  }
}

export default Error404Component