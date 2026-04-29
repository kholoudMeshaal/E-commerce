
export async function getAllBrands() {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands`);
  if (!res.ok) throw new Error('Failed to fetch brands');
  const data = await res.json();
  return data.data;
}