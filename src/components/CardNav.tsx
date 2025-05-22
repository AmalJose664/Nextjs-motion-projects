const CardNav = ({ title, desc, imageUrl }: { title: string, desc: string, imageUrl: string, }) => {
  return (
	<div className="flex flex-col m-5 bg-white rounded-lg shadow-lg overflow-hidden">
		  <img src={imageUrl} alt={title} className="w-full h-28 object-cover" />
		<div className="p-4">
			<h3 className="font-bold text-lg">{title}</h3>
        	<p className="text-gray-700 mt-2">{desc}</p>
		</div>
	</div>
  )
}
export default CardNav