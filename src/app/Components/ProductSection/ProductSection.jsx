"use client"
import React, { useEffect, useState } from 'react';
import { getallproduct } from '@/app/Api/Api';  
import Image from 'next/image';
import "./product.css";
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (pageNumber) => {
    try {
      const response = await getallproduct(pageNumber + 1);
      const updatedProducts = response.content.map(product => ({
        ...product,
        sellingPrice: product.sellingPrice.replace('?', '$ '),
        mrp: product.mrp.replace('?', '$ '),
      }));
      setProducts(prevProducts => [...prevProducts, ...updatedProducts]);
      setHasMore(response.totalPages > pageNumber + 1);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };


  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchMoreData = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <div id='pro' className='Product'>
        <div className='bg-[#194b95] text-center'>
          <h1>40-70% Off Everything + Extra 25% Off $175+ | 15% Off $125+ For Hilfiger</h1>
        </div>
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Image src={"https://img.icons8.com/dusk/64/sneakers.png"} alt='shoe' height={60} width={60} className='mx-auto' />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className='grid lg:grid-cols-3  xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full border-[15px] border-y-0 border-r-[#00285d] border-l-[#e31937] mt-24'
        >
          {products.map((product) => (
            <div key={product.id} className="card glass w-80 mx-auto mb-5 hover:scale-[0.99] shadow-lg">
              <figure>
                <Image src={product.imageURL} alt={product.title} width={500} height={500} className='h-[20rem]' />
              </figure>
              <div className="p-5">
                <p className="text-[16px] ellipsis">{product.title}</p>
                <div className='flex justify-between py-1'>
                  <p>Price: <span className='line-through'>{product.mrp}</span></p>
                  <p>Rating: {product.rating}</p>
                </div>
                <p>Selling Price: {product.sellingPrice}</p>
                <p>Category: {product.category}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
        
      </div>
    </>
  )
}

export default ProductSection;
