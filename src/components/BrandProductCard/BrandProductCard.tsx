"use client"
import { Eye, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardDescription, CardTitle } from '../ui/card'
import AddToCart from '../AddToCart/AddToCart'
import WishlistButton from '@/app/wishlist/WishlistButton'

export default function BrandProductCard({ product }: { product: any }) {


  const { category, _id, imageCover, price, ratingsAverage, ratingsQuantity, title, priceAfterDiscount } = product;

  return (
    <Card className="group relative bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 pt-0 overflow-hidden">
      
      {/* Badge */}

{priceAfterDiscount > 0 && (
  <div className="absolute top-0 left-0 ...">
    -{Math.round(((price - priceAfterDiscount) / price) * 100)}%
  </div>
)}

      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
        <WishlistButton productId={_id} />

  <Link href={`/ProductDetails/${_id}`}>
  <button className="bg-white rounded-full p-1.5 shadow-md hover:text-green-600 transition-colors w-full border border-gray-100">
    <Eye className="h-4 w-4" />
  </button>
</Link>
      </div>
      

      {/* صورة المنتج */}
      <div className="relative h-64 bg-gray-50 flex items-center justify-center overflow-hidden p-4">
        <div className="relative w-full h-full">
          <Image 
            fill
            src={imageCover}
            alt={title}
            className="object-contain p-2 transition-transform duration-500 "
          />
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div className="p-4">
        {/* الكاتيجوري */}
        <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1">
          {category?.name}
        </p>

      
        <CardTitle className="text-sm font-bold text-gray-800 mb-2 h-10 line-clamp-2">
          {title.split(' ').slice(0, 2).join(' ')}
        </CardTitle>

        {/* التقييم والنجوم */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < Math.floor(ratingsAverage) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-medium">
            ({ratingsQuantity})
          </span>
        </div>


{/* السعر */}
{priceAfterDiscount > 0 ? (
  <div className="flex items-center gap-2">
    <span className="text-green-600 font-bold text-base">
      {priceAfterDiscount} <small className="text-[10px]">EGP</small>
    </span>
    <span className="text-gray-400 text-xs line-through">{price}</span>
  </div>
) : (
  <span className="text-gray-900 font-bold text-base">
    {price} <small className="text-[10px]">EGP</small>
  </span>
)}
      </div>

   
      <div className="p-3 pt-0">
        <AddToCart id={_id} />
      </div>
    </Card>
  )
}