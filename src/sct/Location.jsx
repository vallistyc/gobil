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
    <section className='bg-[#FFF9EB] px-4 sm:px-8 lg:px-30 py-12 lg:py-30 flex flex-col lg:flex-row gap-8 lg:gap-10'>
        {/* Left Content */}
        <div className='text-[#5A5A5A] flex flex-col gap-3 lg:w-[40%]'>
            <h1 className='font-outfit font-medium text-3xl sm:text-4xl text-[#FF6200]'>
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
        <div className='flex relative h-[320px] sm:h-[420px] lg:h-100 w-full lg:flex-1 min-w-0'>
            <MapUI />
        </div>
    </section>
  )
}

export default Location
