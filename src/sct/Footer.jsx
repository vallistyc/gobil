import React from 'react'
import Logo from '../assets/Logo.png'
import { FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'
import '../foot.css'

const Footer = () => {
    const link = {
        wa: "https://api.whatsapp.com/send/?phone=62881027076779&text&type=phone_number&app_absent=0",
        tik: "https://www.tiktok.com/@gagaldiet_mbaknita",
        fb: "https://www.facebook.com/anita.wanda.161"
    }

    return (
        <section className='foot-bg pt-10 pb-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-10 rounded-t-[28px] sm:rounded-t-[40px]'>
            {/* Footer */}
            <div className='flex flex-col bg-white border-2 rounded-lg py-5 px-4 sm:px-8 lg:px-10 border-[#575757] w-full h-fit'>
                <div className='flex flex-col md:flex-row w-full h-fit md:items-center justify-between gap-8'>
                    {/* Left Content */}
                    <div className='flex flex-col'>
                        {/* Logo + Label */}
                        <img src={Logo} alt="Logo Go-Bil" className='w-30' />
                        <p className='text-sm max-w-125'>
                            <span className='font-bold'>Go-Bil</span> adalah aplikasi jasa transportasi yang berbasis di Kawasan Lamongan Pantura. Melalui Aplikasi ini, Anda dapat memesan <span className='font-bold'>Deliv Makanan</span>, <span className='font-bold'>Ojek</span>, & <span className='font-bold'>Antar Barang</span> hanya melalui layar ponsel. <span className='font-bold'>Go-Bil</span> bukan hanya model bisnis semata, melainkan model solusi untuk memberdayakan <span className='font-bold'>UMKM Lokal</span> dan menciptakan lapangan kerja untuk semua kalangan mulai dari <span className='font-bold'>Anak SMA</span>.
                        </p>
                        <ul className='flex flex-row gap-2 text-[#F29D38] text-2xl pt-3'>
                            <li>
                                <a href={link.wa} target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp />
                                </a>
                            </li>
                            <li>
                                <a href={link.fb} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a href={link.tik} target="_blank" rel="noopener noreferrer">
                                    <FaTiktok />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Content */}
                    <div className='flex flex-col gap-3 md:gap-5'>
                        <h2 className='text-[#AEAEAE] font-normal font-outfit text-sm'>
                            Navigasi
                        </h2>
                        <ul className='font-outfit font-light text-md'>
                            <li>
                                <a href="">Beranda</a>
                            </li>
                            <li>
                                <a href="">Mitra Kami</a>
                            </li>
                            <li>
                                <a href="">Pendaftaran Mitra</a>
                            </li>
                            <li>
                                <a href="">Pendaftaran Driver</a>
                            </li>
                            <li className='text-[#FF6200]'>
                                <a href="">Download</a>
                            </li>
                        </ul>
                    </div>
                </div>
                    {/* Copyright */}
                    <hr className="border-t-2 border-orange-500 w-full mt-6" />
                    <p className="text-sm text-gray-500 mt-2">
                        © 2025 Go-Bil. All rights reserved.
                    </p>
            </div>
        </section>
    )
}

export default Footer
