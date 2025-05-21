'use client'

import { images } from "@/db/data"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isHover, setIsHover] = useState(false)
	const [showThumbnails, setShowThumbnails] = useState(false)
	let timer :any
	const selectSlide = (index: number) => {
		setCurrentIndex(index)
		setShowThumbnails(true)

		timer= setTimeout(() => {
			setShowThumbnails(false)
		}, 5000);
	}
	const nextSlide = () => setCurrentIndex(prev => (prev + 1) % images.length)
	const prevSlide = () => setCurrentIndex(prev => ((prev - 1) + images.length) % images.length)
	useEffect(()=> {
		return () => {
			if (timer) clearTimeout(timer)
		}
	},[])
  return (
	<div className="relative w-[50%] rounded-lg overflow-hidden">
		<motion.div className={`flex mb-[2rem] transition-opacity duration-300 ${showThumbnails || isHover ? "opacity-100" : "opacity-0"
			  }`}>
			{images.map((img, indx) => (
				<div key={indx} onClick={()=>selectSlide(indx)} 
					className={`w-[10rem] h-[5rem] mt-[2rem]
               cursor-pointer rounded-lg overflow-hidden border-2 ${currentIndex === indx
							? "border-blue-500"
							: "border-transparent"
						}`}
				>
					<img src={img} alt={img} className="w-full h-full object-cover" />
				</div>
			))}
		</motion.div>
		<div className="flex"
		onMouseEnter={()=>setIsHover(true)}
		onMouseLeave={()=> setIsHover(false)}
		>
			<motion.div initial={{ x: '-100%'}} animate={{x: `${-currentIndex * 100}%`}}
			transition={{ duration:1, }} className="flex"
			> 
				{images.map((img, index)=>(
					<div key={index} className="min-w-full">
						<img
							src={img}
							alt={`Slide ${index + 1}`}
							className="w-full"
						/>
					</div>
				))}
			</motion.div>
		</div>
		<button onClick={prevSlide}
			  className={`absolute left-4 transform
             -translate-y-1/2 p-2 shadow transition-opacity duration-300 ${isHover ? "opacity-100" : "opacity-0"
				  }`}
		>&#10094;</button>
		<button onClick={nextSlide}
			  className={`absolute right-4 transform 
            -translate-y-1/2 p-2 shadow transition-opacity duration-300 ${isHover ? "opacity-100" : "opacity-0"
				  }`}
		>&#10095;</button>
		
	</div>
  )
}
export default Carousel