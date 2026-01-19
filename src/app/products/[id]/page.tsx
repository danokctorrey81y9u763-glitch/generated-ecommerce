'use client'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import { useCart } from '@/components/CartProvider'
import { useState } from 'react'

export default function ProductPage() {
  const params = useParams()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === params.id)
  const similar = products.filter(p => p.id !== params.id && p.category === product?.category).slice(0, 4)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Produit non trouve</h1>
          <Link href="/products" className="text-indigo-600 hover:underline mt-4 inline-block">
            Retour aux produits
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <Link href="/products" className="text-indigo-600 hover:underline mb-8 inline-block">
          &larr; Retour aux produits
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>

          <div>
            <span className="text-sm text-indigo-600 font-medium">{product.category}</span>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>

            <div className="flex items-center mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="ml-2 text-gray-600">({product.rating}) - {product.stock} en stock</span>
            </div>

            <p className="text-gray-600 mt-6">{product.description}</p>

            <p className="text-4xl font-bold text-indigo-600 mt-6">{product.price.toFixed(2)} &euro;</p>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-100">-</button>
                <span className="px-4 py-2">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-100">+</button>
              </div>
              <button onClick={handleAddToCart} className="flex-grow bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition font-semibold">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>

        {similar.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Produits similaires</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {similar.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}