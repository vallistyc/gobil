import React from 'react'
import Card from '@/cmp/Card'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

const Service = () => {
  return (
    <section className='bg-[#FFF9EB] flex flex-col'>
        {/* Title */}
        <div className='flex flex-row justify-between items-center px-30 py-5 gap-10'>
            <h1 className='whitespace-nowrap font-outfit font-medium text-4xl text-[#FF6200]'>
                Pelayanan <span className='font-playfair font-bold underline'>Kami</span>
            </h1>
            <p className='text-[#5A5A5A] text-sm'>
                Layanan Delivery Go-Bil memastikan waktu, tenaga, dan profesionalitas dapat bersinergi menjadi kepuasan pelanggan.
            </p>
        </div>

        {/* Cards */}
        <div className='flex flex-row gap-2.5 px-30 pb-10 pt-3'>
            <Card img={card1} txt="Delivery Makanan & Minuman" num="01" />
            <Card img={card2} txt="Antar Barang ke Alamat Tujuan" num="02" />
            <Card img={card3} txt="Ojek di Area Pantura" num="03" />
        </div>
    </section>
  )
}

export default Service