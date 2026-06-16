import React from 'react'
import Logo from '../assets/Logo.png'
import { FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'
import '../foot.css'

const Footer = () => {
    const link ={
        wa:"https://api.whatsapp.com/send/?phone=62881027076779&text&type=phone_number&app_absent=0",
        tik:"https://www.tiktok.com/@gagaldiet_mbaknita",
        fb:"https://www.facebook.com/anita.wanda.161"
        }
    return (
    <section 
    className='foot-bg pt-10 pb-20 flex flex-col justify-center items-center px-10 rounded-t-5xl'>
        {/* Footer */}
        <div className='bg-white border-2 rounded-md py-5 px-10 border-[#575757] foot.bg flex flex-row w-full h-fit'>
            {/* Left Content */}
            <div className='flex flex-col'>
                {/* Logo + Label */}
                <img src={Logo} alt="Logo Go-Bil" className='w-30' />
                <p className='text-sm max-w-125'>
                    <span className='font-bold'>Go-Bil</span> adalah aplikasi jasa transportasi yang berbasis di Kawasan Lamongan Pantura. Melalui Aplikasi ini, Anda dapat memesan <span className='font-bold'>Deliv Makanan</span>, <span className='font-bold'>Ojek</span>, & <span className='font-bold'>Antar Barang</span> hanya melalui layar ponsel. <span className='font-bold'>Go-Bil</span> bukan hanya model bisnis semata, melainkan model solusi untuk memberdayakan <span className='font-bold'>UMKM Lokal</span> dan menciptakan lapangan kerja untuk semua kalangan mulai dari <span className='font-bold'>Anak SMA</span>.
                </p>
                <ul className='flex flex-row gap-2 text-[#F29D38] text-3xl pt-5'>
                    <li>
                        <a href={link.wa}>
                            <FaWhatsapp/>
                        </a>
                    </li>
                    <li>
                        <a href={link.fb}>
                            <FaFacebook/>
                        </a>
                    </li>
                    <li>
                        <a href={link.tik}>
                            <FaTiktok/>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Right Content */}
            <div className='flex flex-col'>

            </div>

        </div>

    </section>
    )
}

export default Footer