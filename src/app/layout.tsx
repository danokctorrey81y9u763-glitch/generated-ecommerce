import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VR/AR E-Commerce - Site genere par IA',
  description: 'Site e-commerce specialise en realite virtuelle et augmentee, genere automatiquement par un systeme multi-agents IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  )
}
