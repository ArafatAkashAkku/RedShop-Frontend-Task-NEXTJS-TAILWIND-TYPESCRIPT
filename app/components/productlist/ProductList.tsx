"use client";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import ProductCard from "../productcard/ProductCard";
import { StaticImageData } from 'next/image';

type Props = {
  header : string,
  name : string,
  price : number,
  image : string | StaticImageData,

}

const ProductList = ({header,name,price,image}:Props) => {
  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-black text-lg">{header}</h2>
        <button className="flex items-center gap-2 border border-black py-1 px-4 font-normal">
          View All
          <FaArrowTrendUp />
        </button>
      </div>
      <div className="flex items-center gap-5 flex-wrap">
        <ProductCard name={name} price={price} image={image}/>
        <ProductCard name={name} price={price} image={image}/>
        <ProductCard name={name} price={price} image={image}/>
        <ProductCard name={name} price={price} image={image}/>
      </div>
    </section>
  );
};

export default ProductList;
