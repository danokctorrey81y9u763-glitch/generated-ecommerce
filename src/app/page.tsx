'use client'

import { useState } from 'react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Casque VR Haut de Gamme',
    description: 'Casque VR avec suivi des mouvements oculaires pour une immersion totale dans vos experiences virtuelles.',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400',
    category: 'VR'
  },
  {
    id: '2',
    name: 'Lunettes AR Pro',
    description: 'Lunettes AR pour formations techniques comme assemblage mecanique ou reparation automobile.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400',
    category: 'AR'
  },
  {
    id: '3',
    name: 'Controleurs VR Sans Fil',
    description: 'Paire de controleurs ergonomiques avec retour haptique pour une interaction naturelle.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=400',
    category: 'Accessoires'
  },
  {
    id: '4',
    name: 'Station de Tracking',
    description: 'Station de suivi de mouvement pour une experience VR room-scale complete.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?w=400',
    category: 'Accessoires'
  }
]

export default function Home() {
  const [cart, setCart] = useState<{id: string, qty: number}[]>([])

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId)
      if (existing) {
        return prev.map(item =>
          item.id === productId ? {...item, qty: item.qty + 1} : item
        )
      }
      return [...prev, {id: productId, qty: 1}]
    })
  }

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">VR/AR E-Commerce</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-purple-300 transition">Accueil</a>
              <a href="#products" className="hover:text-purple-300 transition">Produits</a>
              <a href="#" className="hover:text-purple-300 transition">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-white/10 rounded-full transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Bienvenue dans le Futur</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Decouvrez notre selection de casques VR et lunettes AR de derniere generation.
            Site genere automatiquement par 8 agents IA collaboratifs.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#products" className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition">
              Voir les Produits
            </a>
            <a href="#" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <div className="bg-green-500 text-white py-2 text-center text-sm">
        Ce site est genere et ameliore en temps reel par un systeme multi-agents IA
      </div>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Nos Produits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{product.price.toFixed(2)} EUR</span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-bold text-lg mb-4">VR/AR E-Commerce</h5>
              <p className="text-gray-400">Site genere par un systeme multi-agents IA utilisant OpenRouter/DeepSeek.</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Liens</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Accueil</a></li>
                <li><a href="#products" className="hover:text-white transition">Produits</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Technologie</h5>
              <p className="text-gray-400">Next.js, React, Tailwind CSS</p>
              <p className="text-gray-400 mt-2">Deploye sur Railway</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} VR/AR E-Commerce - Genere par Multi-Agent Builder</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
