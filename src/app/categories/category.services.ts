import { AllCategoryData, AllCategoryResponse } from "./category"

export async function getAllCategory(): Promise<AllCategoryData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`)
    const data: AllCategoryResponse = await response.json()
    return data.data;
}


export async function getSpecificCategory(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/${id}`)
  const result = await res.json()
  return result.data
}

//  المنتجات حسب الكاتيجوري
export async function getCategoryProducts(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?category[in]=${id}`)
  const result = await res.json()
  return result.data
}