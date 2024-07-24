import React from 'react'
import "./Card.css";
import Image from 'next/image';
const ProductCard = ({
    category,
    rating,
    title,
    mrp,
    imageURL
}) => {
    return (
        <>
            <div className="card_box m-5 mx-auto shadow-xl rounded-2xl">
                <span></span>
                <div className='w-full h-[350px] object-cover  shadow-2xl'>
                    <Image src={imageURL} alt={title} height={50000} width={50000} className='w-full   object-fill h-full shadow-2xl' />
                </div>
            </div>
        </>
    )
}

export default ProductCard