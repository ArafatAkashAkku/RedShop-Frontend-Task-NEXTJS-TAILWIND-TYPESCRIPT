"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import Logo from "../../../public/images/logo/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const [progress, setProgress] = useState(10);
  const pathname = usePathname();
  useEffect(() => {
    setProgress(30);
    setProgress(70);
    setProgress(100);
  }, [pathname]);

  const [open, setOpen] = useState(false);

  const toggleBar = () => {
    setOpen(!open);
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <header className="flex items-center justify-between pb-2 border-b-2 sticky top-0 z-50 bg-white">
        <div>
          <nav>
            <ul className="flex items-center gap-5">
              <li onClick={toggleBar}>
                <HiMenuAlt1 className="text-sm font-bold cursor-pointer" />
              </li>
              <li className="mobile-display">
                <Link href={"/"} className="text-sm font-bold ">
                  Home
                </Link>
              </li>
              <li className="mobile-display">
                <Link href={"/"} className="text-sm font-bold">
                  Categories
                </Link>
              </li>
              <li className="mobile-display">
                <Link href={"/"} className="text-sm font-bold">
                  Pages
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <Link href={"/"}>
            <Image src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="mobile-display">
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  href={"/"}
                  className="text-sm font-bold flex items-center gap-1"
                >
                  <FaSearch />
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm font-bold flex items-center gap-1"
                >
                  <IoCartOutline />
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm font-bold flex items-center gap-1"
                >
                  <TbWorld />
                  EN
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`absolute top-20 z-20 transition-all ease-in-out delay-150 bg-white h-auto w-auto py-5 px-2 ${
            open ? "left-0" : "-left-full"
          }`}
        >
          <nav>
            <ul className="flex flex-col items-start gap-5">
              <li onClick={toggleBar}>
                <HiMenuAlt1 className="text-sm font-bold cursor-pointer" />
              </li>
              <li>
                <Link href={"/"} className="text-sm font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-sm font-bold">
                  Categories
                </Link>
              </li>
              <li className="mb-4 pb-10 border-b-2 w-full">
                <Link href={"/"} className="text-sm font-bold">
                  Pages
                </Link>
              </li>

              <li>
                <Link href={"/"} className="text-sm font-bold">
                  Terms and condition
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-sm font-bold">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-sm font-bold">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
