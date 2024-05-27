import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import CategoryCard from '../categorycard/CategoryCard';
import Sculpture from "../../../public/images/category/sculpture.jpeg"
import Furniture from "../../../public/images/category/furniture.jpeg"
import Bedroom from "../../../public/images/category/bedroom.png"
import Glassware from "../../../public/images/category/glassware.jpeg"

const Category = () => {
  return (
    <section className="my-10">
    <div className="flex items-center justify-between mb-4">
      <h2 className="font-black text-lg">Shop By Category</h2>
      <button className="flex items-center gap-2 border border-black py-1 px-4 font-normal">
        View All
        <FaArrowTrendUp />
      </button>
    </div>
    <div className="flex items-center gap-5 flex-wrap">
        <CategoryCard name={"Sculpture Vase"} image={Sculpture}/>
        <CategoryCard name={"Furniture"} image={Furniture}/>
        <CategoryCard name={"Bedroom Kit"} image={Bedroom}/>
        <CategoryCard name={"Glassware"} image={Glassware}/>

    </div>
  </section>
  )
}

export default Category