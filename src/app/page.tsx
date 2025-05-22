import Link from "next/link"


const Home = () => {
  return (
	<div>
		Home page <br />
		<br />
		<br />
		<div className="border border-amber-300 p-4 m-4 rounded flex flex-col items-center justify-center gap-3">
			View Projects <br />
			<Link className="underline text-blue-400" href={'/scroll-indicator'}>Scroll Indicator</Link>
			<Link className="underline text-blue-400" href={'/loading'}>Loader </Link>
			<Link className="underline text-blue-400" href={'/carousel'}>Carousel</Link>
			<Link className="underline text-blue-400" href={'/drag-card'}>Draggable card</Link>
			<Link className="underline text-blue-400" href={'/sidebar'}>Sidebar</Link>
			<Link className="underline text-blue-400" href={'/scroll-anime'}>Scroll Animation</Link>
			<Link className="underline text-blue-400" href={'/scroll-carosel'}>Scroll Carousell</Link>
			<Link className="underline text-blue-400" href={'/navbar'}>Stciky Navbar</Link>
			<Link className="underline text-blue-400" href={'/progress'}>Progress Steps</Link>
		</div>
	</div>
  )
}
export default Home