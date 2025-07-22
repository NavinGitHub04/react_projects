import React, { Children } from 'react'

function container({Children}) {
  return 
    <div className='w-full max-w-full mx-auto px-4'>
    {Children}</div>;
  
}

export default container