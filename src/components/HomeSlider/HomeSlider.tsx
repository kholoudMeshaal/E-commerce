import Slider from '@/components/Slider/Slider'
const listOfImages = [
  "/slider-image-1.jpeg",
  "/slider-image-2.jpeg",
  "/slider-image-3.jpeg",
]



export default function HomeSlider() {
  return (
    <div >
      <Slider  spaceBetween={120} imageList={listOfImages} autoPlay={{
         delay: 5000 , 
        disableOnInteraction: false, 
        
      }}/>
       
    </div>
  )
}
