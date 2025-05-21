'use client'

import { motion } from "motion/react"
import { useState } from "react"

const sidebarVariants = {
	open: {x: 0, opacity: 1, scale: 1},
	closed: {x: '-100%', opacity: 0, scale: .7}
}
const backdropVariants = {
	open: { opacity: .6},
	closed: {opacity: 0 }
}
const containerVariants = {
	open: {
		transition: {
			staggerChildren: .2,
			delayChildren: .1
		}
	},
	closed: {
		transition: {
			staggerChildren: .2,
			delayChildren: 0
		}
	}
}
const itemVariants = {
	open: {opacity: 1, scale: 1, y: 0},
	closed: {opacity: 0, scale: .95, y: -20}
}
const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
	<div className="relative">
		<motion.div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg"
		 initial='closed'
		 animate={isOpen ? 'open' : 'closed'}
		 variants={backdropVariants}
		 transition={{duration: .3}}
		 onClick={()=> setIsOpen(false)}
		>

		</motion.div>





		<motion.div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg"
			initial='closed'
			animate={isOpen ? 'open' : 'closed'}
			variants={sidebarVariants}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
		>
			<div className="p-4">
				<button onClick={()=>setIsOpen(false)}
						className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
					>
					<svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 512 512" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"></path></svg>
				</button>
				<h2 className="text-2xl font-bold mb-4">Filters</h2>
				<motion.div className="space-y-4"
            		initial='closed' animate={ isOpen ? 'open' : 'closed'}
					variants={containerVariants}
				>
					<motion.div variants={itemVariants}>
						<h3 className="text-xl font-semibold">Category</h3>
						<ul>
							<li>
								<label className="inline-flex items-center mt-2">
									<input type="checkbox" className="form-checkbox" />
									<span className="ml-2">Option 1</span>
								</label>
							</li>
							<li>
								<label className="inline-flex items-center mt-2">
									<input type="checkbox" className="form-checkbox" />
									<span className="ml-2">Option 2</span>
								</label>
							</li>
							<li>
								<label className="inline-flex items-center mt-2">
									<input type="checkbox" className="form-checkbox" />
									<span className="ml-2">Option 3</span>
								</label>
							</li>
						</ul>
					</motion.div>

					<motion.div variants={itemVariants}>
						<h3 className="text-xl font-semibold">Price Range</h3>
						<input type="range" min={0} max={1000} className="w-full" step={10} />
					</motion.div>


					<motion.div variants={itemVariants}>
						<h3 className="text-xl font-semibold">Ratings</h3>
						<ul>
							<li>
								<label className="inline-flex items-center mt-2">
									<input type="radio" name="rating" value={1} className="form-radio"/>
									<span className="ml-2">1 Star</span>
								</label>
							</li>
							<li>
								<label className="inline-flex items-center mt-2">
									<input type="radio" name="rating" value={1} className="form-radio"/>
									<span className="ml-2">2 Star</span>
								</label>
							</li>
							<li>
								<label className="inline-flex items-center mt-2">
									<input type="radio" name="rating" value={1} className="form-radio"/>
									<span className="ml-2">3 Star</span>
								</label>
							</li>
							<li>
								<label className="inline-flex items-center mt-2">
									<input type="radio" name="rating" value={1} className="form-radio"/>
									<span className="ml-2">4 Star</span>
								</label>
							</li>
							<li>
								<label className="inline-flex items-center mt-2">
									<input type="radio" name="rating" value={1} className="form-radio"/>
									<span className="ml-2">5 Star</span>
								</label>
							</li>
						</ul>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>




		<button className="absolute top-4 left-4 z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none" 
				onClick={()=> setIsOpen(!isOpen)}
			>
			{isOpen ? (
				<svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 512 512" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"></path></svg>
			): (
				<svg stroke="currentColor" fill="white" className="h-6 w-6 rotate-180" strokeWidth="0" viewBox="0 0 512 512" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"></path></svg>
			)}
		</button>
	</div>
  )
}
export default Sidebar