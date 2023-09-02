"use client";

import { useState } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@data";
import logo from "../public/assets/icons/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <header className="absolute min-w-full">
      <nav className="flex justify-between items-center px-5 py-9 tablet:px-8 tablet:py-[25px] desktop:px-[104px] desktop:py-6">
        <a href="/">
          <Image src={logo} width={61} height={33} alt="CarpTravel logo" />
        </a>
        <button
          type="button"
          className="mobile:block hidden text-white text-sm leading-tight font-normal tracking-[1.4px]"
          onClick={handleMenuOpen}
        >
          MENU
        </button>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ul className="mobile:hidden flex gap-x-6 desktop:gap-x-14 text-white text-sm font-normal tracking-[1.4px]">
          {navLinks.map(({ link, label }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
