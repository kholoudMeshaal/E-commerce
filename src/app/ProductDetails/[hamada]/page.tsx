
import { getSSpecificProduct } from "@/app/home.services"
import ProductImages from "../ProductImages"
import AddToCart from "@/components/AddToCart/AddToCart"
import Link from "next/link"

export default async function page({ params }: { params: Promise<{ hamada: string }> }) {
  const { hamada } = await params
  const productDetails = await getSSpecificProduct(hamada)
  const { _id, imageCover, images, title, category, brand, price, priceAfterDiscount, description, ratingsAverage, ratingsQuantity, quantity } = productDetails

  const rating = ratingsAverage ?? 0
  const reviewsCount = ratingsQuantity ?? 0
const hasDiscount = (priceAfterDiscount ?? 0) > 0
  const finalPrice = hasDiscount ? priceAfterDiscount : price
const discountPercent = hasDiscount ? Math.round(((price - (priceAfterDiscount ?? 0)) / price) * 100) : 0

  return (
    <div className="container mx-auto px-4 py-6">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-main-color transition-colors">Home</Link>
        <span>›</span>
        <Link href="/categories" className="hover:text-main-color transition-colors">{category?.name}</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium line-clamp-1">{title}</span>
      </nav>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-12">

          {/* صور المنتج */}
          <div className="lg:col-span-5 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
            <ProductImages imageCover={imageCover} images={images} title={title} />
          </div>

          {/* تفاصيل المنتج */}
          <div className="lg:col-span-7 p-4 sm:p-8 flex flex-col gap-5">

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-main-color/10 text-main-color text-xs font-semibold px-3 py-1 rounded-full border border-main-color/20">
                {category?.name}
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                {brand?.name}
              </span>
            </div>

            {/* العنوان */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">{title}</h1>

            {/* التقييم */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className={`w-5 h-5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">{rating}</span>
              <span className="text-sm text-gray-400">({reviewsCount} reviews)</span>
            </div>

            {/* السعر */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-black text-gray-900">
                {finalPrice} <span className="text-lg font-semibold text-gray-400">EGP</span>
              </span>
              {hasDiscount && (
                <>
                  <span className="text-lg text-gray-400 line-through">{price} EGP</span>
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Save {discountPercent}%
                  </span>
                </>
              )}
            </div>

            {/* In Stock */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <span className="text-sm text-green-600 font-medium">In Stock</span>
              {quantity && (
                <span className="text-sm text-gray-400">· {quantity} available</span>
              )}
            </div>

            {/* الوصف */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4">
              {description}
            </p>

            {/* Total Price */}
            <div className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-sm text-gray-400 font-medium">Total Price:</span>
              <span className="text-xl font-black text-main-color">{finalPrice}.00 EGP</span>
            </div>

            {/* أزرار الأكشن */}
            <div className="mt-auto">
              <AddToCart id={_id} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}