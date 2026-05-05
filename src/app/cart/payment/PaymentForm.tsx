
'use client'
import AppButton from '@/components/shared/AppButton/AppButton'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { ShippingAddressType, UserShippingAddress } from './payment.interface'
import { handelCashOrder, handelOnlineOrder } from './payment.action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import { useCart } from '@/Context/CartContext/CartContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const paymentSchema = z.object({
  details: z.string().min(5, 'Address must be at least 5 characters'),
  phone: z.string().min(1, 'Phone is required').regex(/^01[0125][0-9]{8}$/, 'Enter a valid Egyptian phone number'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  postalCode: z.string().min(1, 'Postal code is required').regex(/^[0-9]{5}$/, 'Postal code must be 5 digits'),
})

export default function PaymentForm({ cartId }: { cartId: string }) {

  // const { setCartCount } = React.useContext(CartCreatedContext)
  const { setCartCount } = useCart()
  const router = useRouter()

  const { handleSubmit, control, formState: { isSubmitting } } = useForm({
    defaultValues: { details: '', phone: '', city: '', postalCode: '' },
    resolver: zodResolver(paymentSchema)
  })

  function createCashOrder(data: UserShippingAddress) {
    const shippingAddress: ShippingAddressType = { shippingAddress: data }
    toast.promise(handelCashOrder(shippingAddress, cartId), {
      loading: 'Creating Cash Order Please Wait...',
      success: function () {
        router.push('/')
        setCartCount(0)
        return 'Order Created'
      },
      error: 'Something went wrong, please try again'
    })
  }

  async function createOnlineOrder(data: UserShippingAddress) {
    const shippingAddress: ShippingAddressType = { shippingAddress: data }
    const url = await handelOnlineOrder(shippingAddress, cartId)
    window.open(url, '_self')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* Top Wave Header */}
        <div className="relative bg-linear-to-br from-green-500 via-green-600 to-emerald-700 pt-10 pb-16 px-6 text-white">
          <h1 className="text-3xl font-bold mb-1">Checkout</h1>
          <p className="text-green-100 text-sm">Complete your order</p>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
              <path d="M0,20 C100,60 200,0 300,40 C360,60 390,15 400,30 L400,60 L0,60 Z" fill="white" />
              <path d="M0,40 C80,10 180,55 280,25 C340,10 380,45 400,35 L400,60 L0,60 Z" fill="rgba(255,255,255,0.25)" />
            </svg>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 pt-4 pb-4">
          <form className="space-y-4">

            {/* Address */}
            <Controller name="details" control={control} render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Address <span className="text-red-500">*</span>
                </FieldLabel>
                <Input {...field} id={field.name} placeholder="Write Your Address" autoComplete="off" type="text"
                  className={`rounded-xl bg-gray-50 border-0 focus-visible:ring-2 text-sm ${fieldState.invalid ? 'ring-2 ring-red-300 focus-visible:ring-red-400' : 'focus-visible:ring-green-500'}`}
                />
                {fieldState.invalid && <p className="text-red-500 text-xs mt-1">{fieldState.error?.message}</p>}
              </Field>
            )} />

            {/* Phone */}
            <Controller name="phone" control={control} render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Phone <span className="text-red-500">*</span>
                </FieldLabel>
                <Input {...field} id={field.name} placeholder="01XXXXXXXXX" type="tel"
                  className={`rounded-xl bg-gray-50 border-0 focus-visible:ring-2 text-sm ${fieldState.invalid ? 'ring-2 ring-red-300 focus-visible:ring-red-400' : 'focus-visible:ring-green-500'}`}
                />
                {fieldState.invalid && <p className="text-red-500 text-xs mt-1">{fieldState.error?.message}</p>}
              </Field>
            )} />

            {/* City */}
            <Controller name="city" control={control} render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  City <span className="text-red-500">*</span>
                </FieldLabel>
                <Input {...field} id={field.name} placeholder="Write Your City" type="text"
                  className={`rounded-xl bg-gray-50 border-0 focus-visible:ring-2 text-sm ${fieldState.invalid ? 'ring-2 ring-red-300 focus-visible:ring-red-400' : 'focus-visible:ring-green-500'}`}
                />
                {fieldState.invalid && <p className="text-red-500 text-xs mt-1">{fieldState.error?.message}</p>}
              </Field>
            )} />

            {/* Postal Code */}
            <Controller name="postalCode" control={control} render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Postal Code <span className="text-red-500">*</span>
                </FieldLabel>
                <Input {...field} id={field.name} placeholder="12345" type="text" maxLength={5}
                  className={`rounded-xl bg-gray-50 border-0 focus-visible:ring-2 text-sm ${fieldState.invalid ? 'ring-2 ring-red-300 focus-visible:ring-red-400' : 'focus-visible:ring-green-500'}`}
                />
                {fieldState.invalid && <p className="text-red-500 text-xs mt-1">{fieldState.error?.message}</p>}
              </Field>
            )} />

            {/* Buttons */}
            <div className="flex gap-3 pt-1">
              <AppButton onClick={handleSubmit(createCashOrder)} disabled={isSubmitting} type="button"
                className="flex-1 bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl py-2.5 font-semibold text-sm shadow-md shadow-green-200 transition-all active:scale-[0.98] border-0 disabled:opacity-60 disabled:cursor-not-allowed">
                Cash on Delivery
              </AppButton>
              <AppButton onClick={handleSubmit(createOnlineOrder)} disabled={isSubmitting} type="button"
                className="flex-1 bg-linear-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white rounded-xl py-2.5 font-semibold text-sm shadow-md shadow-yellow-200 transition-all active:scale-[0.98] border-0 disabled:opacity-60 disabled:cursor-not-allowed">
                Pay Online
              </AppButton>
            </div>

          </form>
        </div>

        {/* Bottom Wave */}
        <div className="relative bg-linear-to-br from-green-500 via-green-600 to-emerald-700 pt-10 pb-6 px-6">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
              <path d="M0,20 C100,60 200,0 300,40 C360,60 390,15 400,30 L400,60 L0,60 Z" fill="white" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-6 mt-2">
            {[
              { label: 'Fast Delivery', icon: <><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></> },
              { label: 'Secure Pay', icon: <><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></> },
              
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <span className="text-green-100 text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}