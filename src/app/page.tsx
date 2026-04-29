
import { getAllProduct } from './home.services'
import ProductCart from '@/components/ProductCart/ProductCart'
import HomeSlider from '@/components/HomeSlider/HomeSlider'
import { lazy, Suspense } from 'react'



const CategorySlider = lazy(function(){
  return import ("@/components/CategorySlider/CategorySlider")
})


export default async function page(){
 
 const productList = await getAllProduct()


  return (

<>
<HomeSlider/>

{/* ببعت الكومبوننت الي هياخد وقت  */}
<Suspense fallback={<h1 className='text-5xl'>Loading..... </h1>}> 
  <CategorySlider />
  </Suspense>

   <div className="container mx-auto my-8 px-4">

      {/* العنوان */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-1 h-7 bg-main-color rounded-full inline-block" />
        Featured <span className="text-main-color">Products</span>
      </h2>

  


      
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {productList.map(e =>
          <ProductCart key={e._id} prod={e} />
        )}
      </div>

    </div>
     </>
)
}
