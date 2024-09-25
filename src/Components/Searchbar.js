import React, { useState } from 'react'

function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); 
    onSearch(searchTerm); 
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        placeholder="Search products by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-button2 transition duration-300"
      >
        Search
      </button>
    </form>
  )
}

export default Searchbar;
