import React from 'react' 
import Main from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slider/Slider'
import Product from '../Components/Product/Product'
import Footer from '../Components/Footer/Footer'

const page = () => {
  return (
     <>
          
          <Navbar />
          <Main />
          <Slider />
          <Product />
          <Footer />
     </>
  )
}

export default page