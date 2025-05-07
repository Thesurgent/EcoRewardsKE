import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white py-4 sticky top-0 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight">EcoRewardsKE</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-green-200 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-200 transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-green-200 transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-green-200 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-green-400 to-green-600 py-24 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Rewarding a Greener Kenya</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">EcoRewardsKE uses AI to reward eco-friendly actions like recycling and sustainable transport with exciting perks.</p>
          <a href="#contact" className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-100 hover:scale-105 transition-transform">Join the Movement</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">About EcoRewardsKE</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We’re on a mission to make sustainability rewarding in Kenya. Our AI-powered platform tracks green choices—recycling, public transport, energy saving—and turns them into points for discounts, products, or services from local partners.</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Why EcoRewardsKE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">AI-Powered Tracking</h3>
              <p className="text-gray-600">Our AI accurately monitors and verifies your sustainable actions for seamless rewards.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Exciting Rewards</h3>
              <p className="text-gray-600">Earn points for green choices and redeem them for exclusive offers from Kenyan businesses.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Community Impact</h3>
              <p className="text-gray-600">Join a movement of Kenyans building a greener, more sustainable future together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Get Involved</h2>
          <p className="text-lg text-gray-600 mb-8">Want to join or partner with EcoRewardsKE? Let’s make sustainability happen!</p>
          <a href="mailto:contact@ecorewardske.com" className="text-green-700 hover:underline text-lg font-medium">contact@ecorewardske.com</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 EcoRewardsKE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
