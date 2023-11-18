import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Your Logo</div>
          <div className="space-x-4">
            <a href="/" className="text-white">Home</a>
            <a href="/about" className="text-white">About</a>
            <a href="/contact" className="text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;