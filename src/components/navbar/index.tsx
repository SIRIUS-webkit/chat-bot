"use client";
import React from "react";
import Link from "next/link";
import { NavProps } from "./type";
import Image from "next/image";

const Navbar: React.FC = () => {
  const navLinks: NavProps[] = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About Us",
      link: "/",
    },
    {
      id: 2,
      name: "Features",
      link: "/",
    },
    {
      id: 3,
      name: "Playground",
      link: "/playground",
    },
  ];
  return (
    <nav className="max-w-[1200px] mx-auto lgmx:mx-5 flex justify-between items-center py-8">
      <Link href="#">
        <Image src="/logo.png" alt="chat bot" width={48} height={48} />
      </Link>
      <div className="flex space-x-10 items-center">
        {navLinks.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            target="_blank"
            className="block smmx:hidden"
          >
            <p className="p2">{item.name}</p>
          </Link>
        ))}

        <Link href="/playground" target="_blank" className="hidden smmx:block">
          <p className="p2">Playground</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
