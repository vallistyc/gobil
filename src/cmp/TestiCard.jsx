import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Pholder from '../assets/profile.png'
import {Quote} from 'lucide-react'

const testimonials = [
  {
    txt: "Go-Bil sangat membantu saya pesan makanan tanpa harus keluar rumah. Cepat dan mudah!",
    cust: "Andi Prasetyo",
    img: Pholder,
  },
  {
    txt: "Driver-nya ramah dan tepat waktu. Layanan terbaik di kawasan Pantura!",
    cust: "Siti Rahayu",
    img: Pholder,
  },
  {
    txt: "Kirim barang jadi lebih gampang, harga terjangkau dan aman sampai tujuan.",
    cust: "Budi Santoso",
    img: Pholder,
  },
]

const GlassCard = ({ txt, cust, img }) => {
  return (
    <div
      className="border-orange-200 border-2 min-h-50 w-full flex flex-col items-start justify-between font-outfit font-normal text-white gap-5 px-3 py-3 rounded-md"
    >
      <Quote 
      color="#FF6200"/>
      <p className="text-base leading-snug">{txt}</p>
      <div className="flex flex-row items-center gap-2 text-sm">
        <img src={img} alt={cust} className="w-8 h-8 rounded-full object-cover" />
        <p>{cust}</p>
      </div>
    </div>
  )
}

const TestiCard = () => {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <Carousel setApi={setApi} className="w-full max-w-[min(24rem,calc(100vw-4rem))] mx-auto">
      <CarouselContent>
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <GlassCard txt={item.txt} cust={item.cust} img={item.img} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex cursor-pointer !hover:bg-transparent" />
      <CarouselNext className="hidden md:flex cursor-pointer !hover:bg-transparent" />
      <div className="mt-5 flex items-center justify-center gap-2 md:hidden" aria-label="Testimonial slider pagination">
        {testimonials.map((item, index) => (
          <button
            key={item.cust}
            type="button"
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={current === index ? "true" : undefined}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-[#FF6200]" : "w-2 bg-orange-200 hover:bg-orange-300"
            }`}
          />
        ))}
      </div>
    </Carousel>
  )
}

export default TestiCard
