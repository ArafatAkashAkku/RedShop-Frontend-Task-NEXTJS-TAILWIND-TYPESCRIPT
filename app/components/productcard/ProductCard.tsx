import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from 'next/image';

type Props = {
    name : string,
    image: string | StaticImageData,
    price: number,
  }

const ProductCard = ({name, image,price}:Props) => {
  const [visible, setVisible] = useState("hidden");
  const enter = () => {
    setVisible("visible");
  };

  const leave = () => {
    setVisible("hidden");
  };

  return (
    <div className="relative hover:scale-110 md:w-auto w-full">
      <p className="absolute z-10 top-2 left-2 bg-slate-700 px-2 py-1 text-white text-xs">
        Sale
      </p>
      <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
        <Image
          src={image}
          alt={name}
          width={290}
          height={290}
          className="object-cover rounded-lg md:w-auto w-full"
        />
        <Link
          href={"/details/marta-small-table"}
          className={`absolute bottom-5 w-full text-center border border-black py-2 bg-white rounded-md text-sm font-semibold ${visible}`}
        >
          Shop Now
        </Link>
      </div>
      <h3 className="text-sm mt-2 font-medium">{name}</h3>
      <p className="font-bold text-lg">৳ {price}</p>
    </div>
  );
};

export default ProductCard;
