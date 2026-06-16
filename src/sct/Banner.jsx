import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col h-fit bg-gray-900 px-10 py-5 gap-4 justify-center'>
        {/* Title */}
        <p className='font-outfit font-regular text-2xl text-white text-center'>
            Mitra <span className='font-playfair font-bold italic'>Kami</span>
        </p>

        {/* Logo UMKM */}
        <div className='flex flex-row h-20 w-full gap-10'>
            <div className='bg-red-500 w-full h-full rounded-lg'>
            </div>
            <div className='bg-red-500 w-full h-full rounded-lg'>
            </div>
            <div className='bg-red-500 w-full h-full rounded-lg'>
            </div>
            <div className='bg-red-500 w-full h-full rounded-lg'>
            </div>
            <div className='bg-red-500 w-full h-full rounded-lg'>
            </div>
        </div>
    </div>
  )
}

export default Banner