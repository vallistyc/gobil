import React from 'react'

const StatisticCard = ({h1,h2}) => {
  return (
    <div className='flex flex-col h-fit w-full gap-3 pl-3 bg-[#FFCB82] font-outfit font-medium text-[#FF6200]'>
        <h1 className='text-3xl'>
            {h1}
        </h1>
        <h2 className='text-lg'>
            {h2}
        </h2>
    </div>
  )
}

export default StatisticCard