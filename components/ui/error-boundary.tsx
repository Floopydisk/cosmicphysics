"use client"

import type React from "react"

import { useState } from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Something went wrong!</h1>
        <p className="text-xl text-slate-300">Please try again later.</p>
      </div>
    )
  }

  return <div>{children}</div>
}

