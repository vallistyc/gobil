import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import favorich from "../assets/favorich.jpg"
import kmie from "../assets/kmie.jpg"
import gagaldiet from "../assets/gagaldiet.jpg"
import hota from "../assets/hota.jpg"
import mieeco from "../assets/mieeco.jpg"

const partners = [
    {label:"Favorich",pic:favorich}, 
    {label:"Denah K-Mie",pic:kmie}, 
    {label:"Gagal Diet",pic:gagaldiet}, 
    {label:"Hota",pic:hota}, 
    {label:"Mie Eco",pic:mieeco}]

const PartnerLogo = ({ label,pic }) => (
  <img src={pic} alt={label} className='aspect-square w-full rounded-lg' aria-label={label} />
)

const Banner = () => {
  return (
    <div className='flex flex-col h-fit bg-gray-900 px-4 sm:px-8 lg:px-10 py-5 gap-4 justify-center'>
        {/* Title */}
        <p className='font-outfit font-regular text-2xl lg:text-4xl text-white text-center'>
            Mitra Terbaik <span className='font-playfair font-bold italic'>Kami</span>
        </p>

        {/* Logo UMKM */}
        <Carousel opts={{ align: "start" }} className='sm:hidden w-full'>
            <CarouselContent>
                {partners.map((partner) => (
                    <CarouselItem key={partner.label} className='basis-[42%]'>
                        <PartnerLogo pic={partner.pic} label={partner.label} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>

        <div className='hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 w-full gap-5 lg:gap-10'>
            {partners.map((partner) => (
                <PartnerLogo key={partner.label} label={partner.label} pic={partner.pic} />
            ))}
        </div>
    </div>
  )
}

export default Banner
