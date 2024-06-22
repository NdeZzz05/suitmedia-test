"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CardNavbar } from "./ui/card";
import { ToogleHeader } from "./toogle-header";
import Image from "next/image";

export const Header = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      controlHeader();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [controlHeader]);

  return (
    <header className={`${lastScrollY === 0 ? "bg-orange-600" : "bg-orange-600 bg-opacity-85"} fixed top-0 w-full z-20 transition-transform duration-700 ${show ? "translate-y-0 shadow-2xl" : "-translate-y-full "}`}>
      <CardNavbar className={`${lastScrollY === 0 ? "bg-orange-600" : "bg-orange-600 bg-opacity-0"} flex justify-between transition-transform duration-300 items-center px-4 py-4 sm:px-16 container`}>
        <Link href="/">
          <Image src="/suitmedia.png" width={100} height={100} loading="lazy" alt="Suitmedia" className="h-auto" />
        </Link>
        <div className="hidden sm:block"></div>
        <div className="space-x-2 sm:space-x-6 sm:flex justify-center items-center hidden">
          <Link className={`text-sm tracking-tight" ${pathname === "/work" ? "underline underline-offset-8 decoration-2 text-white" : " text-white"}`} href="/work">
            Work
          </Link>
          <Link className={`text-sm tracking-tight" ${pathname === "/about" ? "underline underline-offset-8 decoration-2 text-white" : "text-white"}`} href="/about">
            About
          </Link>
          <Link className={`text-sm tracking-tight" ${pathname === "/services" ? "underline underline-offset-8 decoration-2 text-white" : "text-white"}`} href="/services">
            Services
          </Link>
          <Link className={`text-sm tracking-tight" ${pathname === "/ideas" ? "underline underline-offset-8 decoration-2 text-white" : "text-white"}`} href="/ideas">
            Ideas
          </Link>
          <Link className={`text-sm tracking-tight" ${pathname === "/careers" ? "underline underline-offset-8 decoration-2 text-white" : "text-white"}`} href="/careers">
            Careers
          </Link>
          <Link className={`text-sm tracking-tight" ${pathname === "/contact" ? "underline underline-offset-8 decoration-2 text-white" : "text-white"}`} href="/contact">
            Contact
          </Link>
        </div>
        <div className="block sm:hidden ">
          <ToogleHeader />
        </div>
      </CardNavbar>
    </header>
  );
};
