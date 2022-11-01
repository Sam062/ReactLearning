import React from 'react'
import LoadingGif from '../components/LoadingGif.gif';

export const Loading = () => {
  return (
    <div className='text-light text-center mt-5 mb-5'>
      <h1 className='display-4 text-light'>Loading...</h1>
      <img src={LoadingGif} />
    </div>
  )
}
