import DraggableCard from "@/components/DraggableCard"

const DrgCrd = () => {
  return (
	  <section><DraggableCard style={{ 
		background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		
	  	}}> Card 1 ! 
	  	</DraggableCard>
		  <DraggableCard style={{
			  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",

		  }}> Card 2 !
		  </DraggableCard>
		  <DraggableCard style={{
			  background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",

		  }}> Card 3 !
		  </DraggableCard>
	  </section>
  )
}
export default DrgCrd