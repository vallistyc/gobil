import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const partners = ["Mitra 1", "Mitra 2", "Mitra 3", "Mitra 4", "Mitra 5"]

const PartnerLogo = ({ label }) => (
  <div className='bg-red-500 aspect-square w-full rounded-lg' aria-label={label} />
)

const Banner = () => {
  return (
    <div className='flex flex-col h-fit bg-gray-900 px-4 sm:px-8 lg:px-10 py-5 gap-4 justify-center'>
        {/* Title */}
        <p className='font-outfit font-regular text-2xl text-white text-center'>
            Mitra <span className='font-playfair font-bold italic'>Kami</span>
        </p>

        {/* Logo UMKM */}
        <Carousel opts={{ align: "start" }} className='sm:hidden w-full'>
            <CarouselContent>
                {partners.map((partner) => (
                    <CarouselItem key={partner} className='basis-[42%]'>
                        <PartnerLogo label={partner} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>

        <div className='hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 w-full gap-5 lg:gap-10'>
            {partners.map((partner) => (
                <PartnerLogo key={partner} label={partner} />
            ))}
        </div>
    </div>
  )
}

export default Banner
