import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type Props = {
  name: string;
  image: string | StaticImageData;
};

const CategoryCard = ({ name, image }: Props) => {
  return (
    <div className="relative w-full sm:w-1/5 hover:scale-110">
      <Image
        src={image}
        alt={name}
        className="object-cover rounded-lg w-full"
      />
      <p
        className="absolute bottom-5 w-full text-center z-20 text-lg font-semibold text-white"
      >
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
