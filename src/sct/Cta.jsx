import React from 'react'
import Phone from '../assets/Phone.png'
import '../cta.css'
import DownloadButton from '@/cmp/DownloadButton'
import Footer from './Footer'

const Cta = () => {
  return (
    <section id="mitra" className='testi-bg pt-10 flex flex-col'>
        <div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-8 pb-0">
            {/* CTA CONTAINER */}
            <div className='flex flex-col items-center sm:items-start gap-5 text-center sm:text-left'>
                <div>
                    <h1 className='font-outfit font-medium text-shadow-lg text-3xl sm:text-4xl text-[#FF6200] leading-tight'>
                        Tinggal <span className='font-playfair italic text-[#FFC811]'>Klak Klik</span>,<br />Pesanan mu diantar ke Rumah
                    </h1>
                    <p className='font-outfit font-normal text-[#FF6200]'>
                        Download Aplikasinya Sekarang!
                    </p>
                </div>
                <DownloadButton size="lg" />
            </div>
            <img src={Phone} alt="Smartphone" className='w-56 sm:w-80 lg:w-100 h-auto'/>
        </div>
        <Footer />
    </section>
  )
}

export default Cta
