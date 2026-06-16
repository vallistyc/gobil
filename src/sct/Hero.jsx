import DownloadButton from '@/cmp/DownloadButton'
import React from 'react'
import HeroImage from '../assets/heroImg.png'
import Arrow1 from '../assets/Arrow1.svg'
import Arrow2 from '../assets/Arrow2.svg'
import Arrow3 from '../assets/Arrow3.svg'
import Stress1 from '../assets/Stress1.svg'
import Stress2 from '../assets/Stress2.svg'
import Love from '../assets/Love.svg'
import Emp1 from '../assets/EmpPencil.svg'
import Emp2 from '../assets/EmpPlain.svg'

const Hero = () => {
  return (
    <section className='relative bg-[#FFF9EB] pt-5 flex flex-row justify-between items-center px-30'>
        {/* Gradient */}
        <div className='top-30 right-30 absolute w-100 h-64 rounded-full bg-gradient-to-br from-orange-300 to-yellow-200 blur-3xl opacity-50' />
        <div className='-left-5 -top-5 absolute w-64 h-64 rounded-full bg-gradient-to-l from orange-400 to-yellow-200 blur-3xl opacity-70'/>        

        {/* Decorations */}
        <img src={Arrow1} alt="decoration arrow" className='text-[#FF6200] absolute top-50 left-10 w-20 rotate-50' />
        <img src={Emp1} alt="decoration emphasis" className='absolute top-20 w-15 right-35 rotate-100' />

        {/* Left Content */}
        <div className='z-10 flex flex-col gap-5 font-outfit text-2xl font-semibold'>
            <div className='flex flex-col gap-3'>
                <h1 className='max-w-sm md:text-4xl '>
                    Platform <span className='font-playfair italic'>
                        Delivery
                    </span> Praktis <span className='text-[#FF6200]'>
                        Nomor #1 
                    </span> 
                    <span className="-rotate-3 relative border-2 font-medium bg-[#ffbc928f] border-[#FF6200] px-4 py-0.5 inline-block">
                        di Pantura
                        <span className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-[#FF6200] rounded-full" />
                        <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-[#FF6200] rounded-full" />
                        <span className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-[#FF6200] rounded-full" />
                        <span className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-[#FF6200] rounded-full" />
                    </span>
                </h1>
                <p className='font-normal max-w-sm md:text-sm'>
                    Go-Bil adalah aplikasi jasa transportasi yang melayani kawasan Pantura, memudahkan Anda <span>Memesan Transportasi</span>, <span>Membeli Makanan</span>, hingga <span>Mengirim Barang</span> — Semuanya Dalam Satu Aplikasi!
                </p>
            </div>
            <DownloadButton size="lg"/>
        </div>

        {/* Right Content */}
        <div className='z-10'>
            <img src={HeroImage} alt="Hero Image" className='' />
        </div>
    </section>
  )
}

export default Hero