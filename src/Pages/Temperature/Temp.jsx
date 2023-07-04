import React from 'react'
import ExcelData from '../../Maincomponents/ExcelData/ExcelData'

const Temp = () => {
  return (
    <div className='md:mx-auto container items-center text-center'>
        <h1 className='text-6xl text-white mb-10'>Temperature here</h1>
            <ExcelData />
    </div>
  )
}

export default Temp