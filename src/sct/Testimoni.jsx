import TestiCard from '@/cmp/TestiCard'
import React from 'react'
import Ojek from '../assets/ojek.png'

const Testimoni = () => {
  return (
    <section className='relative overflow-hidden flex flex-col bg-black py-10 gap-8 sm:gap-10 pb-20 sm:pb-30 px-4'>
        {/* Decoration */}
        <img src={Ojek} alt="Potret Ojek" className='absolute -left-24 sm:-left-30 bottom-0 w-64 h-64 sm:w-100 sm:h-100 opacity-40 sm:opacity-100 object-contain' />

        {/* Main Content */}
        <div className='flex justify-center'>
            <h1 className='font-normal font-outfit text-3xl sm:text-4xl text-[#FF6200] text-center'>
                <span className='italic font-playfair font-bold'>Go-Bil</span> Menurut Mereka
            </h1>
        </div>
        <TestiCard />
    </section>
  )
}

export default Testimoni
