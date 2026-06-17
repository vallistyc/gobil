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
    <section id="beranda" className='relative overflow-hidden bg-[#FFF9EB] pt-24 md:pt-28 lg:pt-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-8 px-4 sm:px-8 lg:px-30 pb-10 lg:pb-0'>
        {/* Gradient */}
        <div className='top-24 right-0 sm:right-12 lg:right-30 absolute w-64 sm:w-100 h-48 sm:h-64 rounded-full bg-gradient-to-br from-orange-300 to-yellow-200 blur-3xl opacity-50' />
        <div className='-left-20 sm:-left-5 -top-5 absolute w-56 sm:w-64 h-56 sm:h-64 rounded-full bg-gradient-to-l from-orange-400 to-yellow-200 blur-3xl opacity-70'/>        

        {/* Decorations */}
        <img src={Arrow1} alt="decoration arrow" className='hidden sm:block text-[#FF6200] absolute top-50 left-10 w-16 lg:w-20 rotate-50' />
        <img src={Emp1} alt="decoration emphasis" className='hidden sm:block absolute top-20 w-12 lg:w-15 right-12 lg:right-35 rotate-100' />

        {/* Left Content */}
        <div className='z-10 flex flex-col items-center lg:items-start gap-5 font-outfit text-xl sm:text-2xl font-semibold text-center lg:text-left'>
            <div className='flex flex-col gap-3'>
                <h1 className='max-w-sm text-3xl sm:text-4xl leading-tight'>
                    Platform <span className='font-playfair italic'>
                        Delivery
                    </span> Praktis <span className='text-[#FF6200] pr-5'>
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
                <p className='font-normal max-w-sm text-sm sm:text-base lg:text-sm'>
                    Go-Bil adalah aplikasi jasa transportasi yang melayani kawasan Pantura, memudahkan Anda <span>Memesan Transportasi</span>, <span>Membeli Makanan</span>, hingga <span>Mengirim Barang</span> — <span className='font-bold'>Semuanya Dalam Satu Aplikasi</span>
                </p>
            </div>
            <DownloadButton size="lg"/>
        </div>

        {/* Right Content */}
        <div className='z-10 w-full max-w-[320px] sm:max-w-[420px] lg:max-w-none lg:flex-1'>
            <img src={HeroImage} alt="Hero Image" className='w-full h-auto object-contain' />
        </div>
    </section>
  )
}

export default Hero
