'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import Link from 'next/link'

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Bienvenue</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Decouvrez notre selection de produits exceptionnels
          </p>
          <Link href="/products" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition">
            Voir les produits
          </Link>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Produits vedettes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products" className="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition">
            Voir tous les produits
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}