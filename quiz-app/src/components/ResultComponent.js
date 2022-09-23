import React from 'react'
import { useParams } from 'react-router-dom'

export const ResultComponent = () => {
  const { finalResultJson } = useParams();
  return (
    <div className='p-5'>
      <code>{finalResultJson}
        <h1 className='display-5 text-muted'>
          Thank you for participating... <br />We will contact you based on the result.</h1>
      </code>
    </div>
  )
}
