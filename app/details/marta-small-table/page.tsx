import React from "react";
import Furniture from "../../../public/images/products/furniture-1.jpeg";
import Image from "next/image";
import Link from "next/link";
import ProductList from "@/app/components/productlist/ProductList";

const page = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col gap-5">
        <div>
          <h1>
            <Link href={"/"}>Home</Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;Details&nbsp;&nbsp;/&nbsp;&nbsp;Marta-Small-Table
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/4">
            <Image src={Furniture} alt="Furniture" />
          </div>
          <div className="flex flex-col gap-5 w-full md:w-2/4">
            <h2 className="font-bold text-2xl">Marta Small Table</h2>
            <h3 className="font-extralight text-3xl">৳ 1700</h3>
              <p className="w-2/4 flex items-center justify-between">
                Availability:<span>In Stock</span>
              </p>
              <p className="w-2/4 flex items-center justify-between">
                Qty:<span>87</span>
              </p>
            <div className="flex gap-1">
              <button className="w-2/4 px-3 py-2 bg-white text-black text-md border border-black">Add to cart</button>
              <button className="w-2/4 px-3 py-2 bg-black text-white text-md border border-black">Buy it now</button>
            </div>
            <h4 className="font-bold text-1xl">Description</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              reprehenderit officiis corporis! Repellat nulla minima eius quae
              ex alias, tempore ab debitis natus illo perferendis voluptas earum
              animi ad nihil fugit rem at voluptatum iste soluta quidem
              quisquam? Debitis nam maiores impedit in ad repellat qui provident
              ipsam voluptate iusto. <br /> <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos nostrum numquam nemo fugit eum eveniet veritatis quam
              impedit eius consectetur dolorum culpa odit voluptates, recusandae
              praesentium ab hic repellendus possimus sequi temporibus inventore
              sapiente molestias! Repellat, cumque. Ipsum laboriosam facilis
              debitis adipisci dolore corrupti placeat, rerum consequuntur eaque
              impedit sit! <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              earum dolor voluptate fugit, rem repudiandae ad nam accusamus
              rerum, nulla expedita tempora nisi facilis aperiam quisquam sunt,
              officia inventore tempore.
            </p>
          </div>
        </div>
      </div>
      <ProductList
        header={"Furniture"}
        name={"Marta Small Table"}
        price={200}
        image={Furniture}
      />
    </section>
  );
};

export default page;
