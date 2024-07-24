import React from 'react'
import Marquee from 'react-fast-marquee'
import "./Slider.css"
import Image from 'next/image'

const Slider = () => {
    return (
        <>
            <div className='h-[140vh] block'>
                <div className='flex flex-col'>
                    <Marquee pauseOnHover={true} direction='right'
                        className='border-[5px] border-x-0 border-[#F3F7EC] bg-[#006989] py-5'>
                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow mx-5  cursor-pointer">
                            <Image src={"/shoes/shoe1.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>

                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow mx-5  cursor-pointer">
                            <Image src={"/shoes/shoe2.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>
                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow  mx-5 cursor-pointer">
                            <Image src={"/shoes/shoe3.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>
                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow  mx-5 cursor-pointer">
                            <Image src={"/shoes/shoe4.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>
                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow mx-5 cursor-pointer">
                            <Image src={"/shoes/shoe5.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>
                    </Marquee>
                    <div className=' '>
                        <Image src={"/home_page/Shoesummer.jpg"} width={50000} height={10000} className='w-full' alt='banner' />
                    </div>
                    
                    <Marquee pauseOnHover={true} direction='left'
                        className='border-[5px] border-x-0 border-[#F3F7EC] bg-[#006989] py-5 block'>
                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow mx-5  cursor-pointer">
                            <Image src={"/shoes/shoe6.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>

                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow mx-5  cursor-pointer">
                            <Image src={"/shoes/shoe7.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>
                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow  mx-5 cursor-pointer">
                            <Image src={"/shoes/shoe8.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>
                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow  mx-5 cursor-pointer">
                            <Image src={"/shoes/shoe9.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>
                        <div className="w-80 h-52 bg-white rounded-lg transition-transform duration-500 ease-out transform  card-shadow mx-5 cursor-pointer">
                            <Image src={"/shoes/shoe3.jpg"} alt='sheo1' width={1000} height={1000} className='w-full h-52 object-cover rounded-lg ' />
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default Slider