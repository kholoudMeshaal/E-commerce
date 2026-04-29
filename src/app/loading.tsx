import { Spinner } from '@/components/ui/spinner'
import React from 'react'

export default function loading() {
  return (
    <div className='h-screen bg-main-color flex justify-center items-center'>
      <Spinner className='size-30'/>
    </div>
  )
}
