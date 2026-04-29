// components/Wishlist/WishlistButton.tsx
"use client"
import { Heart } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { addToWishlist, removeFromWishlist } from "./wishlist.action"

// هنا هنستقبل الحاله 
export default function WishlistButton({ productId,initialFavorite = false }: { productId: string,initialFavorite?: boolean}) {
// لما نكون في البيدج دي نبدا ب الي استقبلناها
  const [isWishlisted, setIsWishlisted] = useState(initialFavorite)
  const [isPending, setIsPending] = useState(false)

  async function handleWishlist() {
    setIsPending(true)
    if (isWishlisted) {
      const res = await removeFromWishlist(productId)
      if (res) {
        setIsWishlisted(false)
        toast.success("Removed from wishlist")
      }
    } else {
      const res = await addToWishlist(productId)
      if (res) {
        setIsWishlisted(true)
        toast.success("Added to wishlist ")
      }
    }
    setIsPending(false)
  }

  return (
    <button
      onClick={handleWishlist}
      disabled={isPending}
      className="bg-white rounded-full p-1.5 shadow-md transition-all hover:scale-110 active:scale-90 disabled:opacity-50"
    >
      <Heart
        className={`h-4 w-4 transition-all duration-300 ${
          isWishlisted 
            ? "fill-red-500 text-red-500" 
            : "text-gray-400 hover:text-red-500" 
        }`}
      />
    </button>
  )
}