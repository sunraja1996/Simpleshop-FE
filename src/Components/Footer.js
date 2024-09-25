import React from 'react'
import logo from '../Assests/Simple shop-01.svg'

function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
  <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
    
    <div className="flex items-center space-x-3">
      <img src={logo} alt="Logo" className="w-10 h-10" /> 
      <span className="text-white text-lg font-semibold">Simple Shop</span>
    </div>

    <div className="mt-4 sm:mt-0 text-white text-sm">
      &copy; 2024 Simple Shop. All Rights Reserved.
    </div>
  </div>
</footer>

  )
}

export default Footer