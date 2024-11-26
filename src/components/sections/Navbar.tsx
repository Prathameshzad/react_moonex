import { useState } from 'react';
import {Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="container mx-auto px-4 py-6 relative z-50 font-neue-machina">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span><img src="/logo.png" alt="logo" className='w-40'/></span>
          </div>
          <div className="hidden lg:flex items-center space-x-12 text-white">
            <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Roadmap</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">FAQs</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a>
          </div>
          <button className="hidden lg:block bg-gradient-to-tr from-yellow-400 to-yellow-300 text-gray-900 px-6 py-2 rounded-full font-semibold transition-colors">
            Connect Wallet
          </button>
          <button 
            className="lg:hidden text-yellow-400"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-gray-900/50 to-gray-800/20 backdrop-blur-md shadow-lg py-4 px-4 space-y-4 text-white">
            <a href="#" className="block hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="block hover:text-yellow-400 transition-colors">About Us</a>
            <a href="#" className="block hover:text-yellow-400 transition-colors">Roadmap</a>
            <a href="#" className="block hover:text-yellow-400 transition-colors">FAQs</a>
            <a href="#" className="block hover:text-yellow-400 transition-colors">Contact Us</a>
            <button className="w-full bg-gradient-to-tr from-yellow-400 to-yellow-300 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Connect Wallet
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
