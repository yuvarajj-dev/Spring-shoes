import Image from 'next/image'
import React from 'react'
import productdata from './Productdata/Productdata'
import ProductCard from './ProductCard/ProductCard'
import "./product.css"

const Product = () => {
    return (
        <>
            <div>
                {/* product image */}
                <div className=' '>
                    <Image src={"/product/product page.webp"} height={10000} width={10000} alt='product' className='w-full    ' />
                </div>
                {/* Products */}
                <div className='   border-[10px]  border-double border-[#042c65]  w-full bg-[#EEF7FF]'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
                        {
                            productdata.map((val, ind) => {
                                return (
                                    <>
                                        <ProductCard category={val.category} rating={val.rating} title={val.title} mrp={val.mrp} imageURL={val.imageURL} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Product <Video></Video> */}
                <div className="videoContainerpro w-full">
                    <video className="videopro" autoPlay loop muted>
                        <source src="/product/productvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/* produt Footer Image */}
                <div>
                    <Image src={"/footer/Footer.webp"} height={10000} width={10000} alt='product' className='w-full    ' />
                </div>
            </div>
        </>
    )
}

export default Product