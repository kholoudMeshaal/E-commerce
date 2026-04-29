import { AllProductData, AllProductsResponse, ProductDetailsResponse } from "./home.interface"

export async function getAllProduct (): Promise<AllProductData[]> {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`)
  
  const data: AllProductsResponse = await response.json()
  return data.data
  
  }

/*************************************************************/
  export async function getSSpecificProduct ( id :string ): Promise<AllProductData> {
        const response = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/${id}`)
  
  const data: ProductDetailsResponse = await response.json()
  return data.data
  }