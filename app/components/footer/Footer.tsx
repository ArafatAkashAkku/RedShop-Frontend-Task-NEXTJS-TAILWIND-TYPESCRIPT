import React from "react";
import Logo from "../../../public/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="mt-5">
        <Link href={"/"}><Image src={Logo} alt="Mock Twilight" width={100} height={100} /></Link>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="mt-5 md:w-1/4">
          <h3 className="pb-2 font-bold text-2xl">Categories</h3>
          <ul>
            <li>
              <Link href={"/"}>Sculpture Vase</Link>
            </li>
            <li>
              <Link href={"/"}>Furniture</Link>
            </li>
            <li>
              <Link href={"/"}>Bedroom Kit</Link>
            </li>
            <li>
              <Link href={"/"}>Glassware</Link>
            </li>
          </ul>
        </div>
    

        <div className="mt-5 md:w-1/4">
          <h3 className="pb-2 font-bold text-2xl">Link</h3>
          <ul>
            <li>
              <Link href={"/"}>Terms and condition</Link>
            </li>
            <li>
              <Link href={"/"}>Refund Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>


        <div className="mt-5 md:w-1/4">
          <h3 className="pb-2 font-bold text-2xl">Follow us on</h3>
          <ul>
            <li>
              <Link href={"/"} className="flex items-center gap-1"><FaFacebookF />Facebook</Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center gap-1"><CiYoutube />Youtube</Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center gap-1"><FaInstagram />Instagram</Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center gap-1"><FaTiktok />Tik tok</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 mb-5">
        <p className="font-light text-sm">
          <Link href={"/"}>We Run On Redshop</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
