"use client"

import Link from "next/link"
import Image from "next/image"
import {
  UserPlus, Heart, ShoppingCart, Truck, Gift,
  Phone, Mail, User, Search, LogOut, Menu, X
} from "lucide-react"
import React from "react"

import { cn } from "@/lib/utils"
import logo from "@images/icon.svg"
import { signOut, useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { CartCreatedContext, useCart } from "@/Context/CartContext/CartContext"
import { getUserCart } from "../AddToCart/AddToCart.action"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/Shop" },
  { label: "Brands", href: "/brands" },
  { label: "Category", href: "/categories" },
]

const categories = [
  { label: "All Categories", href: "/categories" },
  { label: "Laptops", href: "/categories/laptops" },
  { label: "Electronics", href: "/categories/electronics" },
]

export default function Navbar() {
  const { data } = useSession()
  // const { cartCount, setCartCount } = React.useContext(CartCreatedContext)
  const { cartCount, setCartCount } = useCart()
  const router = useRouter()
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  async function handleLogOut() {
    await signOut({ redirect: false })
    router.push("/login")
      setCartCount(0)
  }

  React.useEffect(() => {
    getUserCart().then(({ numOfCartItems }) => setCartCount(numOfCartItems))
  }, [])

const pathname = usePathname()


// // 1. State لتخزين الكلمة اللي اليوزر بيكتبها
// const [searchQuery, setSearchQuery] = React.useState("")

// // 2. دالة التعامل مع البحث
// function handleSearch(e?: React.FormEvent) {
//   e?.preventDefault() // منع تحميل الصفحة
//   if (searchQuery.trim()) {
//     // توجيه اليوزر لصفحة البحث مع تمرير الكلمة في الـ URL
//     router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
//     setDrawerOpen(false) // قفل الدروير لو شغالين موبايل
//   }
// }

// // دالة للبحث عند ضغط Enter
// function handleKeyDown(e: React.KeyboardEvent) {
//   if (e.key === 'Enter') {
//     handleSearch()
//   }
// }

  return (
    <>
<header className="w-full  border-b shadow-sm fixed top-0 left-0 z-50 bg-white">

  {/* ── Top Bar — يظهر فقط في الشاشات الكبيرة (Desktop) ── */}
  <div className="hidden md:flex flex-1 border-b border-gray-100 bg-gray-50/50">
    <div className="container mx-auto px-4 py-2 flex items-center justify-between text-[13px] text-gray-600">
      
      {/* جهة اليسار: العروض والشحن */}
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-green-600" />
          Free Shipping on Orders <span className="font-semibold text-gray-800">500 EGP</span>
        </span>
        <span className="flex items-center gap-2">
          <Gift className="h-4 w-4 text-green-600" />
          New Arrivals Daily
        </span>
      </div>

      {/* جهة اليمين: التواصل وتسجيل الدخول */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-gray-200 pr-4">
          <span className="flex items-center gap-1.5 hover:text-green-600 transition-colors cursor-pointer">
            <Phone className="h-3.5 w-3.5" /> +1 (800) 123-4567
          </span>
          <span className="flex items-center gap-1.5 hover:text-green-600 transition-colors cursor-pointer">
            <Mail className="h-3.5 w-3.5" /> support@freshcart.com
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/login" className="flex items-center gap-1.5 hover:text-green-600 font-medium transition-colors">
            <User className="h-4 w-4" /> Sign In
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/register" className="flex items-center gap-1.5 hover:text-green-600 font-medium transition-colors">
            <UserPlus className="h-4 w-4" /> Sign Up
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* ── Main Bar (Logo, Search, Nav, Icons) ── */}
<div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">

  {/* Logo & Welcome - وضعناهم في flex-col ليظهر الاسم تحت اللوجو */}
  <Link href="/" className="shrink-0 flex flex-col items-start">
    <Image priority src={logo} alt="FreshCart Logo" className="h-9 w-auto" />
    {data?.user?.name && (
      <span className="hidden md:block text-green-600 text-[10px] font-bold capitalize mt-1 leading-none">
        Welcome, {data.user.name.split(' ')[0]}
      </span>
    )}
  </Link>

    {/* Search Input */}
{/* Search Input - Desktop */}
{/* <div className="hidden md:flex flex-1 mx-4">
  <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search for products, brands and more..."
      className="w-full border border-gray-200 rounded-lg py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-gray-50 transition-all"
    />
    <button 
      type="submit" 
      className="absolute right-0 top-0 h-full bg-green-600 hover:bg-green-700 text-white rounded-r-lg px-4 transition-colors"
    >
      <Search className="h-5 w-5" />
    </button>
  </form>
</div> */}

   
{/* Desktop Navigation Menu */}
<nav className="hidden md:flex ml-auto items-center gap-1">
  {navLinks.map(({ label, href }) => {
  
    const isActive = pathname === href;

    return (
      <Link 
        key={label}
        href={href} 
        className={cn(
          "px-3 py-2 text-sm font-semibold transition-colors duration-200",
          isActive 
            ? "text-green-600 "
            : "text-gray-700 hover:text-green-600"         
        )}
      >
        {label}
      </Link>
    )
  })}
</nav>

    {/* Right Section Icons */}
    <div className="ml-auto flex items-center gap-2">
      
      {/* 24/7 Support Badge */}
      <div className="hidden md:flex flex-1 items-center gap-2.5 px-4 border-l border-gray-100">
        <div className="bg-green-100 text-green-700 rounded-full p-2">
          <Phone className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold leading-none">Support</span>
          <span className="text-xs font-bold text-gray-800">24/7 Help</span>
        </div>
      </div>

      {/* Wishlist Icon */}
      <Link href="/wishlist" className="p-2 relative group">
        <Heart className="text-gray-600 group-hover:text-pink-500 transition-colors h-6 w-6" />
      </Link>

      {/* Cart Icon */}
      <Link href="/cart" className="p-2 relative group">
        <ShoppingCart className="text-gray-600 group-hover:text-green-600 transition-colors h-6 w-6" />
        {cartCount > 0 && (
          <span className="absolute top-1 right-1 bg-green-600 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center border-2 border-white">
            {cartCount}
          </span>
        )}
      </Link>

     {/* Mobile Menu Button */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Menu className="h-6 w-6" />
      </button> 

      {/* Profile/Auth Button - Desktop */}
      <div className="hidden md:flex flex-1 ml-2">
        {data ? (
          <button onClick={handleLogOut} className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-semibold transition-all">
            Logout
          </button>
        ) : (
     <Link 
  href="/login" 
  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-5 py-1.5 rounded-xl text-[12px] font-bold transition-all duration-300 flex items-center gap-1.5 group shadow-sm hover:shadow-lg hover:shadow-green-100 whitespace-nowrap"
>
  <User className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
  <span className="leading-none">Sign In</span>
</Link>
        )}
      </div>
    </div>
  </div>
</header>

      {/* ── Mobile Drawer Overlay ── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 lg:hidden",
        drawerOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <Image src={logo} alt="FreshCart Logo" className="h-8 w-auto" />
          <button onClick={() => setDrawerOpen(false)} className="p-1 text-gray-500 hover:text-gray-800">
            <X className="h-5 w-5" />
          </button>
        </div>

     
{/* Search - Mobile */}
{/* <div className="px-5 py-4 border-b">
  <form onSubmit={handleSearch} className="relative">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search products..."
      className="w-full border border-gray-200 rounded-full py-2.5 pl-4 pr-11 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-gray-50"
    />
    <button 
      type="submit" 
      className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full p-2"
    >
      <Search className="h-4 w-4" />
    </button>
  </form>
</div> */}

{/* Nav Links in Mobile Drawer */}
<nav className="flex flex-col px-5 py-4 gap-1 border-b">
  {navLinks.map(({ label, href }) => {
    const isActive = pathname === href;

    return (
      <Link 
        key={label} 
        href={href} 
        onClick={() => setDrawerOpen(false)}
        className={cn(
          "py-2.5 font-medium text-base transition-colors",
          isActive ? "text-green-600 " : "text-gray-700"
        )}
      >
        {label} 
      </Link>
    )
  })}
</nav>
          {/* <div className="py-2.5 border-b border-gray-50">
            <p className="text-gray-700 font-medium text-base mb-2">Categories</p>
            <div className="flex flex-col gap-1 pl-3">
              {categories.map(({ label, href }) => (
                <Link key={label} href={href} onClick={() => setDrawerOpen(false)}
                  className="text-gray-500 hover:text-green-600 py-1 text-sm"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div> */}
      

        {/* Wishlist + Cart */}
        <div className="flex flex-col px-5 py-4 gap-1 border-b">
          <Link href="/wishlist" onClick={() => setDrawerOpen(false)}
            className="flex items-center gap-3 py-2.5 text-gray-700 hover:text-green-600"
          >
            <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center">
              <Heart className="h-5 w-5 text-pink-400" />
            </div>
            <span className="font-medium">Wishlist</span>
          </Link>
          <Link href="/cart" onClick={() => setDrawerOpen(false)}
            className="flex items-center gap-3 py-2.5 text-gray-700 hover:text-green-600"
          >
            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center relative">
              <ShoppingCart className="h-5 w-5 text-green-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="font-medium">Cart</span>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="px-5 py-4 flex flex-col gap-3">
          {data ? (
            <button onClick={() => { handleLogOut(); setDrawerOpen(false) }}
              className="w-full flex items-center justify-center gap-2 border border-red-200 text-red-600 font-semibold py-2.5 rounded-full hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          ) : (
            <>
              <Link href="/login" onClick={() => setDrawerOpen(false)}
                className="w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-full transition-colors"
              >
                Sign In
              </Link>
              <Link href="/register" onClick={() => setDrawerOpen(false)}
                className="w-full text-center border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2.5 rounded-full transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}