'use client'
import { deleteElementFromCart } from '@/components/AddToCart/AddToCart.action'
import AppButton from '@/components/shared/AppButton/AppButton'
import { Trash2 } from 'lucide-react'
import { useTransition } from 'react'

export default function RemoveProductButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()

  function handelRemoveElement() {
    startTransition(async () => {
      await deleteElementFromCart(id)
    })
  }

  return (
    <AppButton
      onClick={handelRemoveElement}
      disabled={isPending}
      variant="ghost"
      size="icon"
      className="text-red-500 bg-red-300 hover:text-red-700 hover:bg-red-50 transition-colors"
    >
      {isPending
        ? <span className="h-4 w-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
        : <Trash2 className="h-5 w-5" />
      }
    </AppButton>
  )
}