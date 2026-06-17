import React from 'react'

const Card = ({img, txt, num}) => {
  return (
    <div 
      className='relative min-h-[280px] sm:min-h-[360px] lg:h-100 rounded-[20px] overflow-hidden flex flex-col justify-end shadow-sm'
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
    >
        {/* Nomor */}
        <div className='flex flex-row justify-center items-center px-[9px] py-1 flex-1'>
            <p className='font-outfit font-regular text-md leading-[30px] text-white self-stretch flex-1'>
                {num}
            </p>
        </div>

        {/* Label bawah dengan gradient */}
        <div 
          className='flex flex-col justify-center items-start h-fit pl-5 py-4 backdrop-blur-sm'
          style={{ 
            background: 'linear-gradient(0.31deg, #FFB056 0.27%, rgba(153, 106, 51, 0) 116.9%)',
            boxShadow: '0px 4px 100px 30px rgba(0, 0, 0, 0.25)'
          }}
        >
            <h2 className='font-outfit font-regular text-xl sm:text-2xl leading-[30px] text-white max-w-[205px] pr-3'>
                {txt}
            </h2>
        </div>
    </div>
  )
}

export default Card