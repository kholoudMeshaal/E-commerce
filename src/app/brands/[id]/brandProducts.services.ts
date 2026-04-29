// app/brands/[id]/brandProducts.services.ts

export async function getBrandProducts(brandId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?brand=${brandId}`)
  if (!res.ok) return []
  const data = await res.json()
  return data.data ?? []
}

export async function getSpecificBrand(brandId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands/${brandId}`)
  if (!res.ok) return null
  const data = await res.json()
  return data.data ?? null
}