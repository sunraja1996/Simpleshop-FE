import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("clothing");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const apiurl = process.env.REACT_APP_APIURL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${apiurl}/category/${selectedCategory}`
        );
        setProducts(response.data.products);
        setFilteredProducts(response.data.products); // Initialize filtered products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [selectedCategory, apiurl]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFilteredProducts([]); // Reset filtered products on category change
  };

  const handleProductClick = (product) => {
    navigate('/product', { state: { product } });
  };

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredProducts(filtered); // Update filtered products
  };

  const resetSearch = () => {
    setFilteredProducts(products); // Reset to original products
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Categories
          </h2>

          <div className="flex justify-center mt-4"> 
            <Searchbar onSearch={handleSearch} />
            <button
              onClick={resetSearch}
              className="ml-2 px-4 py-2 bg-button1 text-white rounded-md hover:bg-button1-hover transition duration-300"
            >
              Reset
            </button>
          </div>

          <div className="mt-10 py-10 gap-10 flex flex-row w-full justify-center capitalize overflow-hidden sm:overflow-x-auto scrollbar-hide">
            {["clothing", "electronics", "home appliances"].map((category) => (
              <div
                key={category}
                className={`cursor-pointer transition duration-300 ease-in-out transform rounded ${
                  selectedCategory === category
                    ? "text-white bg-primary scale-105 shadow-lg"
                    : "text-nav hover:bg-primary hover:text-white transition-colors duration-300"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <h1 className="text-xl px-5 font-montserrat py-2 transition ease-in-out duration-300 ">
                  {category}
                </h1>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.length === 0 ? (
              <p>No products available in this category.</p>
            ) : (
              filteredProducts.map((product) => (
                <div 
                  key={product._id} 
                  className="group relative" 
                  onClick={() => handleProductClick(product)}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a className="font-montserrat font-semibold">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.title}
                        </a>
                      </h3>
                      <p className="font-poppins capitalize mt-1 text-sm text-gray-500">
                        {product.category}
                      </p>
                      <p className="font-benchnine mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
                      ₹ {product.price}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
