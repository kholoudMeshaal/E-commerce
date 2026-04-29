import { getAllCategory } from '@/app/categories/category.services'
import Link from 'next/link'
import Image from 'next/image'
import { Package } from 'lucide-react'

export default async function CategoryGrid() {
  const categoryList = await getAllCategory()

  return (
    <section className="container mx-auto mb-5">

            {/* Hero Banner */}
      <div className="w-full bg-linear-to-r from-green-600 to-green-400 text-white px-8 py-10 mb-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/80 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white font-medium">All Category</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-4">
          <div className="bg-white/20 rounded-xl p-3">
            <Package className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">All Category</h1>
            <p className="text-white/80 mt-1">Browse our wide range of product categories</p>
          </div>
        </div>

      </div>


      <div className="grid grid-cols-2 p-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categoryList?.map((cat) => (
          <Link key={cat._id} href={`/categories/${cat._id}`} className="group">
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              
       
              <div className="relative aspect-square w-full bg-[#f8f9fa] flex items-center justify-center overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

        
              <div className="p-4 text-center">
                <h3 className="text-sm md:text-base font-bold text-gray-700 group-hover:text-main-color transition-colors truncate">
                  {cat.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}