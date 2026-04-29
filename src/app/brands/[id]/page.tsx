
import Link from "next/link"
import { getBrandProducts, getSpecificBrand } from "./brandProducts.services"
import BrandProductCard from "@/components/BrandProductCard/BrandProductCard"

export default async function BrandPage({ params }: { params: Promise<{ id: string }> }) {

  const resolvedParams = await params;
  const brandId = resolvedParams.id;

// ngeb al id 
  const [products, brand] = await Promise.all([
    getBrandProducts(brandId),
    getSpecificBrand(brandId),
  ]);

//  for sure enha array
  const validProducts = Array.isArray(products) ? products : [];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div
        className="text-white py-12 px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #16a34a 0%, #22c55e 60%, #86efac 100%)" }}
      >
        <div className="container mx-auto relative z-10">
          <nav className="text-sm mb-4 opacity-80">
            <Link href="/" className="hover:underline">Home</Link>
            {" / "}
            <Link href="/brands" className="hover:underline">Brands</Link>
            {" / "}
            <span>{brand?.name}</span>
          </nav>
          <div className="flex items-center gap-4">
            {brand?.image && (
              <div className="bg-white rounded-2xl p-2 w-16 h-16 flex items-center justify-center shadow">
                <img src={brand.image} alt={brand.name} className="max-w-full max-h-full object-contain" />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold">{brand?.name}</h1>
              <p className="opacity-90">Shop {brand?.name} products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
            </svg>
            <span>Active Filters:</span>
          </div>
          <span className="flex items-center gap-1 bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">
            {brand?.name}
            <Link href="/brands" className="ml-1 hover:text-purple-900">✕</Link>
          </span>
          <Link href="/brands" className="text-sm text-gray-400 hover:text-gray-600 underline">
            Clear all
          </Link>
        </div>
        <p className="text-gray-500 text-sm mt-3">
          Showing {validProducts.length} product{validProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto py-6 px-4">
        {validProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-xl font-medium">No products found for this brand</p>
            <Link href="/brands" className="mt-4 inline-block text-purple-600 hover:underline">
              ← Back to Brands
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {validProducts.map((product: any) => (
              <BrandProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}