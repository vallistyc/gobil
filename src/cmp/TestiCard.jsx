import React from 'react'
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
      className="border-orange-200 border-2 h-50 w-fit flex flex-col items-start justify-between font-outfit font-normal text-white gap-5 px-3 py-3 rounded-md"
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
  return (
    <Carousel className="w-full max-w-sm mx-auto">
      <CarouselContent>
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <GlassCard txt={item.txt} cust={item.cust} img={item.img} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer !hover:bg-transparent" />
      <CarouselNext className="cursor-pointer !hover:bg-transparent" />
    </Carousel>
  )
}

export default TestiCard