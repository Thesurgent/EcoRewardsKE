import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">EcoRewardsKE</h1>
          <nav className="mt-2">
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-green-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Rewarding Sustainability in Kenya</h2>
          <p className="text-lg mb-6">EcoRewardsKE is an AI-powered platform that incentivizes eco-friendly practices with exciting rewards.</p>
          <a href="#contact" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Join Us</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">About EcoRewardsKE</h2>
          <p className="text-lg">Our mission is to promote sustainable living in Kenya by rewarding actions like recycling, using public transport, and reducing energy consumption. Powered by AI, we track your green choices and offer points redeemable for discounts, products, or services.</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">AI-Powered Tracking</h3>
              <p>Our platform uses AI to monitor and verify your sustainable actions accurately.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Exciting Rewards</h3>
              <p>Earn points for green choices and redeem them for exclusive offers from local partners.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p>Join a growing community dedicated to making Kenya greener and more sustainable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">Interested in joining or partnering with EcoRewardsKE? Reach out!</p>
          <a href="mailto:contact@ecorewardske.com" className="text-green-600 hover:underline">contact@ecorewardske.com</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 EcoRewardsKE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
