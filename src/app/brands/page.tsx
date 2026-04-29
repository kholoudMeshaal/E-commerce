
import { getAllBrands } from "./brands.sevices";
import Link from "next/link";

export default async function BrandsPage() {
  const brands = await getAllBrands();
  const validBrands = brands.filter((b: any) => b?._id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div
        className="text-white py-16 px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #d8b4fe 100%)" }}
      >
        <div className="container mx-auto relative z-10">
          <nav className="text-sm mb-4 opacity-80">
            <Link href="/" className="hover:underline">Home</Link> / Brands
          </nav>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-2xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Top Brands</h1>
              <p className="opacity-90">Shop from your favorite brands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {validBrands.map((brand: any) => (
            <Link key={brand._id} href={`/brands/${brand._id}`}>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                <div className="w-full aspect-square flex items-center justify-center p-2">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-gray-800 font-semibold text-sm">{brand.name}</h3>
                  <span className="text-purple-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Products →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}