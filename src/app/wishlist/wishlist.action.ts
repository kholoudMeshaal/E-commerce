// components/Wishlist/Wishlist.action.ts
"use server"
import { getUserToken } from "@/app/myUtil";import { revalidatePath } from "next/cache"

const BASE = process.env.NEXT_PUBLIC_BASE_URL

// Add to wishlist
export async function addToWishlist(productId: string) {
  try {
    const res = await fetch(`${BASE}/api/v1/wishlist`, {
      method: "POST",
      headers: {
        token: (await getUserToken() as string),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    })
    const data = await res.json()
    revalidatePath("/wishlist")
    return data
  } catch {
    return { status: "error", message: "Something went wrong" }
  }
}

// Remove from wishlist
export async function removeFromWishlist(productId: string) {
  try {
    const res = await fetch(`${BASE}/api/v1/wishlist/${productId}`, {
      method: "DELETE",
      headers: {
        token: (await getUserToken() as string),
      },
    })
    const data = await res.json()
    revalidatePath("/wishlist")
    return data
  } catch {
    return { status: "error", message: "Something went wrong" }
  }
}

// Get wishlist
export async function getWishlist() {
  try {
    const res = await fetch(`${BASE}/api/v1/wishlist`, {
      headers: {
        token: (await getUserToken() as string),
      },
    })
    const data = await res.json()
    return data.data ?? []
  } catch {
    return []
  }
}