import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-4 sticky top-0 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight">EcoRewardsKE</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-green-200 transition-colors">Home</a></li>
              <li><a href="#contact" className="hover:text-green-200 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Submit Sustainable Practice */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-green-700">Submit Your Sustainable Practice</h2>
            <p className="text-gray-600 mb-4">Share your eco-friendly actions to earn digital credits. For example: Solar Panels, Tree Planting, Composting.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Upload Photo</label>
                <input type="file" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="e.g., 'Planted 10 trees in my community garden'"
                  rows="3"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                Submit for Credits
              </button>
            </div>
          </div>

          {/* Right Column: Digital Credits and History */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-green-700">Your Digital Credits</h2>
              <div className="bg-green-50 p-4 rounded flex items-center justify-between">
                <span className="text-2xl font-bold text-green-700">0</span>
                <span className="text-green-600">Credits</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-green-700">Submission History</h2>
              <p className="text-gray-600">No submissions yet. Upload your first practice!</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 EcoRewardsKE. Empowering a sustainable Kenya.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
