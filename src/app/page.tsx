"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x1080")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 text-center text-white h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Vendez votre maison en toute sérénité</h1>
          <p className="text-lg mb-8">Une estimation rapide et une vente sécurisée.</p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Saisissez votre adresse"
              className="px-4 py-3 rounded-l-lg text-gray-800"
              style={{ width: "300px" }}
            />
            <button className="px-6 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-r-lg">
              Estimer
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Estimation</h3>
              <p className="text-gray-600">Obtenez une estimation instantanée et précise de votre maison.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Visites</h3>
              <p className="text-gray-600">Organisez des visites en toute simplicité.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Vente</h3>
              <p className="text-gray-600">Vendez rapidement et au meilleur prix.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ils nous font confiance</h2>
          <p className="text-gray-600 mb-12">Des centaines de clients satisfaits.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic">"Un service rapide et professionnel, j'ai vendu ma maison en 10 jours !"</p>
              <h4 className="text-gray-800 font-semibold mt-4">- Jean Dupont</h4>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic">"L'estimation était juste et l'équipe très réactive."</p>
              <h4 className="text-gray-800 font-semibold mt-4">- Claire Martin</h4>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic">"Je recommande à 100%, un service haut de gamme."</p>
              <h4 className="text-gray-800 font-semibold mt-4">- Alain Petit</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <p>&copy; 2025 VotreAgenceImmobilière. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

