import ProductCart from "@/components/ProductCart/ProductCart"
import { Search } from "lucide-react"
import Link from "next/link"
import { getAllProduct } from "../home.services"

interface Props {
  searchParams: Promise<{ q: string }>
}

export default async function SearchResultsPage({ searchParams }: Props) {
  // 1. فك التشفير عن كلمة البحث من الـ URL
  const { q } = await searchParams
  
  // 2. جلب كل المنتجات من الـ API
  const response = await getAllProduct()
  
  // 3. استخراج مصفوفة المنتجات (تأكد أن الـ API يرجع data)
  const productList = response?.data || [] 

  // 4. الفلترة الصحيحة: نستخدم productList ونبحث في الـ title
  const filteredProducts = productList.filter((prod: any) => 
    prod.title.toLowerCase().includes(q?.toLowerCase() || "")
  )

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="container mx-auto px-4">
        
        {/* رأس الصفحة: عرض الكلمة المبحوث عنها */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Search Results for <span className="text-green-600">"{q}"</span>
          </h1>
          <p className="text-gray-500 mt-2">
            We found {filteredProducts?.length || 0} products for you
          </p>
        </div>

        {/* عرض النتائج أو رسالة "لا يوجد" */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((prod: any) => (
              <ProductCart key={prod._id} prod={prod} />
            ))}
          </div>
        ) : (
     
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm">
            <div className="bg-gray-100 p-6 rounded-full mb-6 text-gray-300">
              <Search className="h-12 w-12 opacity-50" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-800">No Products Found</h3>
            <p className="text-gray-500 mt-2 text-sm text-center max-w-md">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Link 
              href="/" 
              className="mt-8 bg-green-600 text-white px-10 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100"
            >
              Clear Filters
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}