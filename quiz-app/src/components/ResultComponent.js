import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const ResultComponent = () => {
  const { finalResultJson } = useParams();
  return (
    <div className='p-5'>
      {
        finalResultJson && finalResultJson > 0 ? <code>{finalResultJson}
          <h1 className='display-5 text-muted'>
            Thank you for participating... <br />We will contact you based on the result.</h1>
        </code>
          :
          <h1 className='display-5 text-muted'>
            No questions attempted... <br />We will not consider it a valid test.
          </h1>
      }
      <div>
        <label>Goto</label>
        <Link className='btn text-primary' to='/'>Home Page</Link>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  )
}
