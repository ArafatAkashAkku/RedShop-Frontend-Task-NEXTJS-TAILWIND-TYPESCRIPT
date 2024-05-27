import ProductList from "./components/productlist/ProductList";
import Latest from "../public/images/products/latest-1.jpeg"
import Sculpture from "../public/images/products/sculpture-1.jpeg"
import Furniture from "../public/images/products/furniture-1.jpeg"
import Bedroom from "../public/images/products/bedroomkit-1.jpeg"
import Glassware from "../public/images/products/glassware-1.jpeg"
import Marqueee from "./components/marquee/Marqueee";
import Category from "./components/category/Category";
import Testimonial from "./components/testimonial/Testimonial";
import Banner from "./components/banner/Banner";
import Time from "./components/time/time";

export default function Home() {
  return (
    <>
    <Banner/>
    <Category/>
    <ProductList header={"Latest Arrivals"} name={"Marta Small Table"} price={200} image={Latest}/>   
    <Marqueee/> 
    <Time/>
    <ProductList header={"Sculpture Vase"} name={"Broken Tree Flower Vase"} price={200} image={Sculpture}/>    
    <ProductList header={"Bedroom Kit"} name={"Big Linen Cushion"} price={200} image={Bedroom}/>    
    <ProductList header={"Furniture"} name={"Marta Small Table"} price={200} image={Furniture}/>    
    <ProductList header={"Glassware"} name={"Glasses & Carafe"} price={200} image={Glassware}/>    
    <Testimonial/>
    </>
  );
}
