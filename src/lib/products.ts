import { Product } from '../types';

export const products: Product[] = [
  {
    id: "1",
    name: "Écouteurs Sans Fil Pro Max",
    description: "Écouteurs bluetooth haute fidélité avec réduction de bruit active et autonomie de 30 heures",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    category: "Audio",
    rating: 4.8,
    stock: 25
  },
  {
    id: "2",
    name: "Montre Connectée SmartLife",
    description: "Montre intelligente avec suivi d'activité, GPS intégré et mesure de la fréquence cardiaque",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1544117519-968d9deae5dd?w=500",
    category: "Wearables",
    rating: 4.6,
    stock: 15
  },
  {
    id: "3",
    name: "Drone Caméra 4K Explorer",
    description: "Drone avec caméra 4K stabilisée, autonomie de 30 minutes et portée de 5km",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500",
    category: "Drones",
    rating: 4.7,
    stock: 8
  },
  {
    id: "4",
    name: "Enceinte Portable UltraSound",
    description: "Enceinte bluetooth waterproof avec son 360° et autonomie de 20 heures",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    category: "Audio",
    rating: 4.3,
    stock: 30
  },
  {
    id: "5",
    name: "Stabilisateur Smartphone Pro",
    description: "Stabilisateur 3 axes pour smartphone avec suivi automatique et modes créatifs",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    category: "Photo & Vidéo",
    rating: 4.5,
    stock: 12
  },
  {
    id: "6",
    name: "Projecteur Portable MiniMax",
    description: "Mini projecteur HD portable avec batterie intégrée et connexion wifi",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1585504198199-20277593b94f?w=500",
    category: "Vidéo",
    rating: 3.9,
    stock: 10
  },
  {
    id: "7",
    name: "Clavier Mécanique GamerPro",
    description: "Clavier gaming mécanique RGB avec switches personnalisables et repose-poignets",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
    category: "Gaming",
    rating: 4.4,
    stock: 45
  },
  {
    id: "8",
    name: "Batterie Externe PowerMax",
    description: "Batterie externe 26800mAh avec charge rapide et affichage LED",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500",
    category: "Accessoires",
    rating: 4.2,
    stock: 50
  }
];

export default products;