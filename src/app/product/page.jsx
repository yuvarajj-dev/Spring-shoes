import React from 'react'
import ProductSection from '../Components/ProductSection/ProductSection'
import Navbar from '../Components/Navbar/Navbar'

const page = () => {
   return (
      <>
         <div className=' relative top-3'>
            <Navbar />
         </div>
         <ProductSection />
      </>
   )
}

export default page