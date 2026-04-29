import { getSpecificCategory, getCategoryProducts } from '@/app/categories/category.services'
import ProductCart from '@/components/ProductCart/ProductCart'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Package } from 'lucide-react'

interface Props {
  params: Promise<{ id: string }>
}

export default async function CategoryProductsPage({ params }: Props) {
  const { id } = await params
  
//  bngeb al byanat 3shan al esm w el sora
  const [category, products] = await Promise.all([
    getSpecificCategory(id),
    getCategoryProducts(id)
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      
   
      <div className="bg-[#22c55e] text-white py-12 px-8 relative overflow-hidden mb-8">
        <div className="container mx-auto relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
            <span>/</span>
            <span className="text-white font-medium">{category?.name}</span>
          </nav>

          <div className="flex items-center gap-6">
            {/* الصورة الصغيرة اللي في البانر */}
            {category?.image && (
              <div className="bg-white rounded-2xl p-2 w-20 h-20 flex items-center justify-center shadow-lg">
                <div className="relative w-full h-full">
                  <Image 
                    src={category.image} 
                    alt={category.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
            )}
            
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">{category?.name}</h1>
              <p className="text-white/90 mt-2 text-lg">Choose a subcategory to browse products</p>
            </div>
          </div>
        </div>
        
  
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </div>

      {/* عرض المنتجات */}
      <div className="container mx-auto px-4 pb-16">
        
        <div className="mb-8">
            <Link href="/categories" className="inline-flex items-center text-gray-500 hover:text-green-600 transition-colors font-medium">
                <ChevronLeft className="h-5 w-5" />
                Back to Categories
            </Link>
        </div>

        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((prod: any) => (
              <ProductCart key={prod._id} prod={prod} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <div className="bg-gray-50 p-6 rounded-full mb-4">
               <Package className="h-12 w-12 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">No products found</h3>
            <p className="text-gray-500 mt-2">This category doesn't have any products yet.</p>
            <Link href="/categories" className="mt-6 bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-all">
                View All Categories
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}