'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product, CartItem, CartContextType } from '@/types'

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('cart')
    if (saved) {
      try { setItems(JSON.parse(saved)) } catch {}
    }
  }, [])

  useEffect(() => {
    if (mounted) localStorage.setItem('cart', JSON.stringify(items))
  }, [items, mounted])

  const addItem = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id)
      if (existing) {
        return prev.map(i => i.product.id === product.id ? {...i, quantity: i.quantity + 1} : i)
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(i => i.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) { removeItem(productId); return }
    setItems(prev => prev.map(i => i.product.id === productId ? {...i, quantity} : i))
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}