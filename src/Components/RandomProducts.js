import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { apiurl } from '../api';


function Products() {

  const [products, setProducts] = useState([]);
  const apiurl = process.env.REACT_APP_APIURL;

  console.log(apiurl);

  useEffect(() => {
    const randomProducts = async () => {
      try {
        const response = await axios.get(`${apiurl}/random`);
        setProducts(response.data.randomproducts);
      } catch (error) {
        console.error('Error fetching random products:', error);
      }
    };
    randomProducts();
  }, [apiurl]);

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top Picks</h2>


      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

      
        {
          products.map((product) => (


            <div key={product._id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.image}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a className='font-montserrat font-semibold'>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
                <p className="font-poppins capitalize mt-1 text-sm text-gray-500">{product.category}</p>
                <p className="font-benchnine mt-1 text-sm text-gray-500">{product.description}</p>
              </div>
              <p className="text-sm font-medium text-gray-900 whitespace-nowrap">₹ {product.price}</p>
            </div>
          </div>


          ))
        }
         

  
      </div>


    </div>
  </div>
  )
}

export default Products