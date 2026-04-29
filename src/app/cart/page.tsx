import { getUserCart } from "@/components/AddToCart/AddToCart.action"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link" 
import { Trash2, Plus, Minus, ShoppingBag, ShoppingCart } from "lucide-react" 
import UpdateProductCount from "./UpdateProductCount"
import RemoveProductButton from "./RemoveProductButton"

export default async function CartPage() {
  const { numOfCartItems, products, totalCartPrice } = await getUserCart()


  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center">
            <ShoppingCart className="h-12 w-12 text-gray-300" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
            <p className="text-gray-500 mt-2 max-w-sm mx-auto">
              Looks like you haven't added anything to your cart yet. Start exploring our products!
            </p>
          </div>
          <Link 
            href="/Shop" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all transform active:scale-95 shadow-lg shadow-green-100"
          >
            Start Shopping →
          </Link>
        </div>
      </div>
    )
  }

  //  لو في منتجات، اعرض الجدول والملخص
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-end border-b pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
            <ShoppingBag className="text-green-600 h-10 w-10" />
            Shopping Cart
          </h1>
          <p className="text-gray-500 mt-2">You have {numOfCartItems} items in your cart</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
          <span className="text-gray-600 mr-2">Total Amount:</span>
          <span className="text-2xl font-bold text-green-600">{totalCartPrice} EGP</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* جدول المنتجات */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-25">Product</TableHead>
                <TableHead>Details</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((e: any) => (
                <TableRow key={e.product._id} className="hover:bg-gray-50/50 transition-colors">
                  <TableCell>
                    <div className="aspect-square relative overflow-hidden rounded-md border bg-gray-100">
                      <img 
                        src={e.product.imageCover} 
                        alt={e.product.title} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-medium text-gray-900 line-clamp-1">{e.product.title}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{e.product.category.name}</p>
                  </TableCell>
                  <TableCell>
                    <UpdateProductCount id={e.product._id} count={e.count} />
                  </TableCell>
                  <TableCell className="text-right font-bold text-gray-700">
                    {e.price} <span className="text-[10px] font-normal">EGP</span>
                  </TableCell>
                  <TableCell className="text-center">
                    <RemoveProductButton id={e.product._id}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* ملخص الطلب */}
        <div className="lg:col-span-1 h-fit">
          <div className="bg-white p-6 rounded-xl shadow-sm border sticky top-4">
            <h3 className="text-xl font-bold mb-4">Summary</h3>
            <div className="space-y-3 pb-4 border-b">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{totalCartPrice} EGP</span>
              </div>
              {/* <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium italic">Free</span>
              </div> */}
            </div>
            <div className="flex justify-between py-4 text-lg font-bold">
              <span>Total</span>
              <span className="text-green-600">{totalCartPrice} EGP</span>
            </div>
            <Link 
              href="/cart/payment" 
              className="w-full py-4 text-lg bg-green-600 text-white rounded-xl mt-4 flex items-center justify-center font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-100"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}