import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-400 via-amber-300 to-rose-300 bg-clip-text text-transparent tracking-wider">
          VYRAL
        </h1>
      </div>
      
      <div className="flex items-center space-x-3 md:space-x-6">
        {/* Navigation pills */}
        <nav className="hidden md:flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
          <ul className="flex space-x-1">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors hover:bg-white/10 text-white/80 hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Call to action button */}
        <button className="px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-rose-400 to-amber-300 text-white shadow-lg hover:shadow-rose-300/20 transition-all hover:scale-105">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;