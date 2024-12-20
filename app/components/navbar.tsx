import Link from "next/link";
import React from "react";
import Sprite from "./sprite";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3">
      <Sprite />
      <ul className="flex gap-10 items-center py-5 px-12 glassBg rounded-lg text-[#A480F2] to-transparent text-xl font-thin">
        <li>
          <Link href="/">/</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          {" "}
          <Link href="/experience">experience</Link>
        </li>
        <li>
          <Link href="/work">projects</Link>
        </li>
        <li>
          {" "}
          <Link href="/connect">connect</Link>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Navbar;
