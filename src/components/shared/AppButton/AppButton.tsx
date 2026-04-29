
"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

export default function AppButton({ children, className, ...prop }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...prop}
      className={cn(
        "bg-main-color hover:bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors shadow-sm",
        className
      )}
    >
      {children}
    </Button>
  )
}