'use client'

import { motion, useScroll, useTransform } from "motion/react"

const ScrollIndicator = () => {
	const {scrollYProgress } = useScroll()
	const lineWidth = useTransform( scrollYProgress, [0, 1], ['0%', '100%'])
	
	return (
	<div className="h-[200vh] p-[20px] text-white">
		<motion.div className="fixed top-0 left-0 h-[5px] bg-red-500" style={{ width: lineWidth, transition: 'width ease 0.1s'}}>
		</motion.div>
		<div className="mt-[50px]">
			Scroll to view Indicator
			{[...Array(100)].map((_, i)=> (
				<p key={i} className="mt-[20px]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iste nisi tempore ipsa quis doloribus soluta amet facere consequatur, at cum asperiores veniam pariatur sapiente itaque maiores dolorem. Blanditiis, consequatur.
				</p>
			))}
		</div>
	</div>
  )
}
export default ScrollIndicator