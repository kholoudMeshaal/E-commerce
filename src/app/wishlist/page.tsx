
import ProductCart from "@/components/ProductCart/ProductCart"
import { Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getWishlist } from "./wishlist.action"


export default async function WishlistPage() {
  const wishlistItems = await getWishlist()

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center text-center max-w-sm">
          <div className="bg-gray-100 rounded-2xl p-6 mb-6">
            <Heart className="h-12 w-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-sm text-gray-400 mb-8 leading-relaxed">
            Browse products and save your favorites here.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <Link href="/Shop"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
              Browse Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
<div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">My Wishlist</h1>
   
      <p className="text-sm text-gray-400 mb-6">{wishlistItems.length} items saved</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {wishlistItems.map((prod: any) => (
        // isFavPage عشان نملي القلب 
          <ProductCart key={prod._id} prod={prod} isFavPage={true} />
        ))}
      </div>
    </div>
    
  )
}