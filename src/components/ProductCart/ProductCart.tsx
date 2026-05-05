

import {  Eye, Star } from 'lucide-react'
import { Card, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link';
import AddToCart from '../AddToCart/AddToCart';
import WishlistButton from '@/app/wishlist/WishlistButton';



export default function ProductCart({ prod, isFavPage }: { prod: any, isFavPage?: boolean }) {
  const { category,_id, imageCover, price, ratingsAverage, ratingsQuantity, title , priceAfterDiscount } = prod
  

  return (

   <Card className="group relative bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 pt-0 overflow-hidden">
 
      {priceAfterDiscount && (
        <div className="absolute top-0 left-0 z-20 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-br-2xl rounded-tl-xl shadow-md">
     
          -{Math.round(((price - priceAfterDiscount) / price) * 100)}%
        </div>
      )}


      
  <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
   <WishlistButton productId={prod._id} initialFavorite={isFavPage} />

<Link href={`/ProductDetails/${_id}`}>
    <button className="bg-white rounded-full p-1.5 shadow-md hover:text-main-color transition-colors w-full">
      <Eye className="h-4 w-4" />
    </button>
  </Link>
  </div>

      {/* صورة المنتج */}
      <div className="relative h-100 bg-gray-50 flex items-center justify-center overflow-hidden">
        <Image fill
          src={imageCover}
          alt={title}
          className="rounded-3xl p-3 transition-transform duration-300 "
        />

     
     
      </div>
   
      {/* تفاصيل المنتج */}
      <div className="p-3">

        {/* الكاتيجوري */}
        <p className="text-xs text-gray-400 mb-1">{category?.name}</p>

        {/* اسم المنتج */}
          <CardTitle className="text-lg font-bold text-gray-800 mb-2 ">{title.split(' ' , 2).join('')}</CardTitle>
      
      

        {/* الريتينج */}
        <div className ='flex items-center gap-1.5 mb-3'>
          <div className ="flex items-center gap-0.5" >
          {Array.from({length : Math.floor(ratingsAverage)}).map((e,i)=> <Star key={i} className='fill-yellow-400 text-yellow-400' />)}
           {Array.from({length :5- Math.floor(ratingsAverage)}).map((e,i)=> <Star key={i} className='fill-gray-200 text-gray-200' />)}
         <span className="text-xs text-gray-500">({ratingsQuantity})</span>

         </div>
          </div>

        {/* السعر   */}

        <CardDescription className=' flex items-center justify-between '>
          <h2 className='flex justify-center gap-2'>Price: {priceAfterDiscount ?
            <> 
               <span className="text-gray-400 text-sm line-through decoration-1">{price} EGP</span> 
              <span className="text-main-color">{priceAfterDiscount} EGP</span> 
           </>  
             : price 
        
          }</h2>

         </CardDescription>
      
      </div>

      <AddToCart  id={_id}  />
    </Card>
  )
}
   
