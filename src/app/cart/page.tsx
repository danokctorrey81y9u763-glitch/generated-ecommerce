'use client'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCart } from '@/components/CartProvider'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">Votre panier est vide</p>
            <Link href="/products" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Decouvrir nos produits
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-4 bg-white p-4 rounded-lg shadow">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded overflow-hidden">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-indigo-600 font-bold">{item.product.price.toFixed(2)} &euro;</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 border rounded hover:bg-gray-100">-</button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 border rounded hover:bg-gray-100">+</button>
                      <button onClick={() => removeItem(item.product.id)} className="ml-4 text-red-500 hover:text-red-700 text-sm">
                        Supprimer
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{(item.product.price * item.quantity).toFixed(2)} &euro;</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow h-fit">
              <h2 className="text-xl font-bold mb-4">Resume</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{total.toFixed(2)} &euro;</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>Gratuite</span>
                </div>
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>{total.toFixed(2)} &euro;</span>
                </div>
              </div>
              <Link href="/checkout" className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
                Passer commande
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}