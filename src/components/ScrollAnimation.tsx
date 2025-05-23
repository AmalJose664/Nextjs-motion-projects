'use client'

import { motion, useScroll, useTransform } from "motion/react"


const ScrollAnimation = () => {
	const {scrollYProgress} = useScroll()

	const y1 = useTransform(scrollYProgress, [0, 0.1], [100, 0]);
	const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
	const scale1 = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

	const y2 = useTransform(scrollYProgress, [0.2, 0.3], [100, 0]);
	const opacity2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
	const scale2 = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);

	const y3 = useTransform(scrollYProgress, [0.6, 0.7], [100, 0]);
	const opacity3 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
	const scale3 = useTransform(scrollYProgress, [0.6, 0.7], [0.8, 1]);

	
	
	
	return (
	<div className="overflow-hidden">

		<motion.div className="h-screen flex items-center justify-center bg-blue-300"
			style={{ y: y1, opacity: opacity1, scale: scale1}}
			>
				<div className="text-center p-8 bg-white rounded-lg shadow-lg">
					<h2 className="text-4xl font-bold text-blue-700">
						Welcome to the Journey
					</h2>
					<p className="mt-4 text-gray-600">
						Scroll down to see more animations.
					</p>
				</div>
		</motion.div>


		<motion.div className="h-screen flex items-center justify-center bg-green-300"
			style={{ y: y2, opacity: opacity2, scale: scale2}}
			>
				<div className="text-center p-8 bg-white rounded-lg shadow-lg">
					<h2 className="text-4xl font-bold text-blue-700">
						Amazing Scrolling Effect
					</h2>
					<p className="mt-4 text-gray-600">
						Feel the scroll based animations.
					</p>
				</div>
		</motion.div>


		<motion.div className="h-screen flex items-center justify-center bg-red-300"
			style={{ y: y3, opacity: opacity3, scale: scale3}}
			>
				<div className="text-center p-8 bg-white rounded-lg shadow-lg">
					<h2 className="text-4xl font-bold text-red-700">
						Enjoy the Scrolling 
					</h2>
					<p className="mt-4 text-gray-600">
						More to discover as you continue scroll.
					</p>
				</div>
		</motion.div>

	</div>
  )
}
export default ScrollAnimation