'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from './CartProvider'

export default function Header() {
  const { items } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Boutique High-Tech et Gadgets Innovants</Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-indigo-200 transition">Accueil</Link>
            <Link href="/products" className="hover:text-indigo-200 transition">Produits</Link>
            <Link href="/cart" className="relative hover:text-indigo-200 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block hover:text-indigo-200">Accueil</Link>
            <Link href="/products" className="block hover:text-indigo-200">Produits</Link>
            <Link href="/cart" className="block hover:text-indigo-200">Panier ({itemCount})</Link>
          </nav>
        )}
      </div>
    </header>
  )
}