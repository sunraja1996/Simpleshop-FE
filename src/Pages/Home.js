import React from 'react'
import Hero from '../Components/Hero'
import RandomProducts from '../Components/RandomProducts'
import Footer from '../Components/Footer'
import Products from '../Components/Products'
import Usedtech from '../Components/Usedtech'
import Product from '../Components/Product'
import Searchbar from '../Components/Searchbar'

function Home() {
  return (
    <>
    <Hero/>
    <RandomProducts/>
    <Products/>
    <Usedtech/>
    </>
  )
}

export default Home