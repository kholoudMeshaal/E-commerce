"use client"
import { useState } from "react"

export default function ProductImages({ imageCover, images, title }: { imageCover: string, images: string[], title: string }) {
  const [mainImage, setMainImage] = useState(imageCover)
  const allImages = [imageCover, ...images]

  return (
    <div className="flex flex-col gap-3">
    
<div className="rounded-2xl  bg-gray-50 w-full flex items-center justify-center p-4 overflow-hidden" 
     style={{ maxHeight: '450px', minHeight: '300px' }}>
  <img
    src={mainImage}
    alt={title}
    className="w-full h-full object-contain max-h-96 transition-all duration-500"
  />
</div>

      {/* الـ thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {allImages.map((img, i) => (
          <div
            key={i}
            onClick={() => setMainImage(img)}
            className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all
              w-16 h-16 sm:w-20 sm:h-20 bg-white
              ${mainImage === img ? 'border-main-color' : 'border-transparent hover:border-gray-200'}`}
          >
            <img src={img} alt={`${title}-${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}