import Locpoint from '@/cmp/Locpoint'
import MapUI from '@/cmp/MapUI';
import React from 'react'

const Location = () => {
    const loc = [
        {label:"Brondong"},
        {label:"Paciran"},
        {label:"Derajat"},
    ];

  return (
    <section className='bg-[#FFF9EB] px-30 py-30 flex flex-row'>
        {/* Left Content */}
        <div className='text-[#5A5A5A] flex flex-col gap-3'>
            <h1 className='font-outfit text-md font-medium text-4xl text-[#FF6200]'>
                Keliling PANTURA? <br />
                <span className='font-playfair font-bold italic'>Siapa Takut!</span>
            </h1>
            <p>
                <span className='text-[#FF6200]'>—</span> Pelayanan kami tersedia untuk sepanjang daerah Pantai Utara Lamongan dan sekitarnya.
            </p>
            <ul className='flex flex-col gap-2'>
                {loc.map((item)=>(
                    <li key={item.label}>
                        <Locpoint loc={item.label} />
                    </li>
                ))}
            </ul>
        </div>

        {/* Right Content */}
        <div className='flex relative h-100 w-200'>
            <MapUI />
        </div>
    </section>
  )
}

export default Location