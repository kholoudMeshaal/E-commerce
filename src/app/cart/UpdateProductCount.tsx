'use client'
import { updateProductCount } from '@/components/AddToCart/AddToCart.action'
import AppButton from '@/components/shared/AppButton/AppButton'
import { Plus, Minus } from 'lucide-react'
import { useTransition } from 'react'
import { toast } from 'sonner'

export default function UpdateProductCount({ id, count }: { id: string, count: number }) {
  const [isPending, startTransition] = useTransition()

  function handleUpdate(count: number) {
    const data = {count}
    if (count < 1) return
// toast.promise(  updateProductCount(data , id) ,
// {
//     loading: "Handel Quantity Now ...",
//     success: "Product Quantity Updated"
// } )
    startTransition(async () => {
      await updateProductCount(data , id)
    })
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <AppButton
        size="icon"
        variant="outline"
        className="h-8 w-8 rounded-full"
        disabled={isPending || count <= 1}
        onClick={() => handleUpdate(count - 1)}
      >
        <Minus className="h-3 w-3" />
      </AppButton>

      <span className="w-8 text-center font-semibold">
        {isPending ? (
          <span className="inline-block h-4 w-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
        ) : count}
      </span>

      <AppButton
        size="icon"
        variant="outline"
        className="h-8 w-8 rounded-full"
        disabled={isPending}
        onClick={() => handleUpdate(count + 1)}
      >
        <Plus className="h-3 w-3" />
      </AppButton>
    </div>
  )
}