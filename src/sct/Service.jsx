import React from 'react'
import Card from '@/cmp/Card'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'

const Service = () => {
  return (
    <section className='bg-[#FFF9EB] flex flex-col'>
        {/* Title */}
        <div className='flex flex-col md:flex-row justify-between md:items-center px-4 sm:px-8 lg:px-30 py-6 gap-3 md:gap-10'>
            <h1 className='font-outfit font-medium text-3xl sm:text-4xl text-[#FF6200]'>
                Pelayanan <span className='font-playfair font-bold underline'>Kami</span>
            </h1>
            <p className='text-[#5A5A5A] text-sm'>
                Layanan Delivery Go-Bil memastikan waktu, tenaga, dan profesionalitas dapat bersinergi menjadi kepuasan pelanggan.
            </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-20 sm:px-8 lg:px-30 pb-10 pt-3'>
            <Card img={card1} txt="Delivery Makanan & Minuman" num="01"  />
            <Card img={card2} txt="Antar Barang ke Alamat Tujuan" num="02" />
            <Card img={card3} txt="Ojek di Area Pantura" num="03" />
        </div>
    </section>
  )
}

export default Service
