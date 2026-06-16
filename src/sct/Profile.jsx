import React from 'react'
import GD from '../assets/gagaldiet.jpg'
import OP from '../assets/operasional.jpg'
import StatisticCard from '@/cmp/StatisticCard'

const Profile = () => {
    const stats = [
        {h1:"1st", h2:"di Pantura"},
        {h1:"10+", h2:"Mitra"},
        {h1:"30+", h2:"Driver"},
    ]

  return (
    <section className='flex flex-col px-30 pb-10 pt-3 bg-[#FFF9EB]'>
        {/* Header */}
        <div className='flex flex-row justify-between items-center'>
            <h1 className='font-medium font-outfit text-4xl text-[#FF6200]'>
                Apa itu <span className='font-playfair font-bold italic'>Go-Bil</span>?
            </h1>
            {/* Label */}
            <div className='flex flex-col items-end'>
                <p className='text-sm text-[#5A5A5A] font-regular'>
                    Dari <span className='font-medium text-[#146500]'>Gagal Diet</span> ke <span className='font-medium text-[#FF6200]'>Go-Bil</span>
                </p>
                <img src={GD} alt="Logo Gagal Diet" className='h-fit w-10 rounded-full'/>
            </div>
        </div>
        {/* Main Content */}
        <div className='flex flex-row gap-5 items-start pt-3'>

            {/* Right Content */}
            <div>
                <img src={OP} alt="Apa itu Go-Bil" className='rounded-md h-full w-100 overflow-hidden' />
            </div>

            {/* Left Content */}
            <div className='flex flex-col justify-start items-center gap-3'>
                <p className='text-justify text-[#5A5A5A] font-normal max-w-sm md:text-sm'>
                    <span className='font-bold'>Go-Bil</span> adalah aplikasi jasa transportasi yang berbasis di Kawasan Lamongan Pantura. Melalui Aplikasi ini, Anda dapat memesan <span className='font-bold'>Deliv Makanan</span>, <span className='font-bold'>Ojek</span>, & <span className='font-bold'>Antar Barang</span> hanya melalui layar ponsel. <span className='font-bold'>Go-Bil</span> bukan hanya model bisnis semata, melainkan model solusi untuk memberdayakan <span className='font-bold'>UMKM Lokal</span> dan menciptakan lapangan kerja untuk semua kalangan mulai dari <span className='font-bold'>Anak SMA</span>.
                </p>
                <ul className='flex flex-row gap-3 items-start w-full'>
                    {stats.map((item)=>(
                        <li key={item.h1} className='flex w-full'>
                            <StatisticCard h1={item.h1} h2={item.h2} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Profile
