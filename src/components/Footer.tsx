export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Boutique High-Tech et Gadgets Innovants</h3>
            <p className="text-sm">Votre destination pour les meilleurs produits.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Liens</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Accueil</a></li>
              <li><a href="/products" className="hover:text-white transition">Produits</a></li>
              <li><a href="/cart" className="hover:text-white transition">Panier</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-sm">contact@example.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Boutique High-Tech et Gadgets Innovants. Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  )
}