import React from 'react'
import Phone from '../assets/Phone.png'
import '../cta.css'
import DownloadButton from '@/cmp/DownloadButton'

const Cta = () => {
  return (
    <section
    className="testi-bg pt-10 flex flex-row justify-center items-center">
        <img src={Phone} alt="Smartphone" className='w-100 h-auto right-10'/>
        {/* CTA CONTAINER */}
        <div className='flex flex-col gap-5'>
            <div>
                <h1 className='font-outfit font-medium text-shadow-lg text-4xl text-[#FF6200]'>
                    Tinggal <span className='font-playfair italic text-[#FFC811]'>Klak Klik</span>,<br />Pesanan mu diantar ke Rumah
                </h1>
                <p className='font-outfit font-normal text-[#FF6200]'>
                    Download Aplikasinya Sekarang!
                </p>
            </div>
            <DownloadButton size="lg" />
        </div>
                {/* Overlay gelap */}
    </section>
  )
}

export default Cta