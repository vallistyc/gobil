import React from 'react'
import {MapPin} from 'lucide-react'

const Locpoint = ({loc}) => {
  return (
    <div className='flex flex-row gap-1'>
        <MapPin 
        color="#FF3D00" />
        <h2 className='text-[#5A5A5A]'>
            {loc}
        </h2>
    </div>
  )
}

export default Locpoint

