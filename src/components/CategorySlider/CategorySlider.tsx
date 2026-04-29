
import { getAllCategory } from '@/app/categories/category.services'
import Link from 'next/link'
import Image from 'next/image'

export default async function CategorySlider() {
  const categoryList = await getAllCategory()

  return (
    <section className="container mx-auto px-4 py-8 mt-5">
  
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span className="w-1 h-7 bg-main-color rounded-full inline-block" />
          Shop By <span className="text-main-color">Category</span>
        </h2>
        <Link 
          href="/categories" 
          className="text-main-color font-bold flex items-center gap-1 hover:underline text-xs md:text-sm"
        >
          View All <span className="hidden sm:inline">Categories</span> →
        </Link>
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {categoryList?.map((cat) => (
          <Link key={cat._id} href={`/categories/${cat._id}`} className="group">
            <div className="flex flex-col items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-main-color/50 transition-all duration-300 h-full">
              
          
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-50 mb-3 border border-gray-50 group-hover:border-main-color/20 transition-colors">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100px, 150px"
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* اسم الفئة */}
              <h3 className="text-sm md:text-base font-bold text-gray-700 group-hover:text-main-color transition-colors text-center line-clamp-1 w-full px-1">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}