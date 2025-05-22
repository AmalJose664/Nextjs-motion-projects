'use client'

import { cards } from "@/db/data"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Card from "./Card"

const ScrollCarosel = () => {
	const targetRef = useRef(null)
	const {scrollYProgress } = useScroll({target: targetRef})

	const x = useTransform(scrollYProgress, [0,1], ['1%', '-95%'])


	return (
	<div className="relative h-[300vh] bg-neutral-900" ref={targetRef}>
		<div className="sticky top-0 flex h-screen items-center overflow-hidden">
			<motion.div style={{ x }} className="flex gap-4">

				{cards.map((card, index) => (
					<Card card={card} key={index}/>
				))}
			</motion.div>

		</div>
	</div>
  )
}
export default ScrollCarosel