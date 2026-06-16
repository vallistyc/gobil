import TestiCard from '@/cmp/TestiCard'
import React from 'react'
import Ojek from '../assets/ojek.png'

const Testimoni = () => {
  return (
    <section className='relative flex flex-col bg-black py-10 gap-10 pb-30'>
        {/* Decoration */}
        <img src={Ojek} alt="Potret Ojek" className='absolute -left-30 bottom-0 w-100 h-100' />

        {/* Main Content */}
        <div className='flex justify-center'>
            <h1 className='font-normal font-outfit text-4xl text-[#FF6200]'>
                <span className='italic font-playfair font-bold'>Go-Bil</span> Menurut Mereka
            </h1>
        </div>
        <TestiCard />
    </section>
  )
}

export default Testimoni