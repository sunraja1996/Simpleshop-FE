import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Product() {

    const location = useLocation(); 
    const navigate = useNavigate();
  const { product } = location.state || {}; 

  if (!product) {
    return <p>No product data available.</p>; 
  }
  
  return (
    <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
      <div className="sm:hidden lg:block lg:max-w-xl">
        <img src={product.image} className="rounded-lg" alt={product.title} /> 
      </div>
      <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
        <div className="max-w-2xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            {product.title} 
          </h3>
          <p className="mt-3 max-w-xl">
            {product.description} 
          </p>
        </div>
        <div className="flex-none mt-6 md:mt-0 lg:mt-6">
          <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
            <li className="">
              <h4 className="text-4xl text-indigo-600 font-semibold">₹ {product.price}</h4>
              <p className="mt-3 font-medium">Price</p> 
            </li>
            <li className="">
              <h4 className="text-4xl text-indigo-600 capitalize font-semibold">{product.category}</h4>
              <p className="mt-3 font-medium">Category</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-6 flex justify-center">
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 text-white bg-primary rounded hover:bg-secondary transition duration-300"
        >
          Back to Home
        </button>
      </div>

  </section>
  )
}

export default Product