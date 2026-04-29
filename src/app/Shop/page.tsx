
import { getAllProduct } from "@/app/home.services"
import ProductCart from "@/components/ProductCart/ProductCart"
import { Package } from "lucide-react"
import Link from "next/link"

export default async function ShopPage() {
  const products = await getAllProduct()

  return (
    <div>
      {/* Hero Banner */}
      <div className="w-full bg-linear-to-r from-green-600 to-green-400 text-white px-8 py-10 mb-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/80 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white font-medium">All Products</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-4">
          <div className="bg-white/20 rounded-xl p-3">
            <Package className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">All Products</h1>
            <p className="text-white/80 mt-1">Explore our complete product collection</p>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Count */}
        <p className="text-sm text-gray-500 mb-6">Showing {products.length} products</p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((prod) => (
            <ProductCart key={prod._id} prod={prod} />
          ))}
        </div>
      </div>
    </div>
  )
}