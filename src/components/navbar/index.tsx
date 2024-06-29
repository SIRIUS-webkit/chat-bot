"use client";
import React from "react";
import Link from "next/link";
import { NavProps } from "./type";

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
      link: "/about-us",
    },
    {
      id: 2,
      name: "Features",
      link: "/feature",
    },
    {
      id: 3,
      name: "Playground",
      link: "/playground",
    },
  ];
  return (
    <nav className="max-w-[1200px] mx-auto flex justify-between items-center py-8">
      <Link href="#">
        <p className="p2">Logo</p>
      </Link>
      <div className="flex space-x-10 items-center">
        {navLinks.map((item) => (
          <Link href={item.link} key={item.id}>
            <p className="p2">{item.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
