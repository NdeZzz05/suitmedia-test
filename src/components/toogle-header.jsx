"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

export const ToogleHeader = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="block sm:hidden ">
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger asChild className="border-none">
          <Button aria-label="Menu" variant="darkmode" className="text-xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="withHamburgerMenu " align="end">
          <DropdownMenuLabel>
            <Link className={`hover:text-primary text-base tracking-tight" ${pathname === "/work" ? "text-primary font-semibold" : "opacity-40"}`} href="/work" onClick={handleLinkClick}>
              Work
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <Link className={`hover:text-primary text-base tracking-tight" ${pathname === "/about" ? "text-primary font-semibold" : "opacity-40"}`} href="/about" onClick={handleLinkClick}>
              About
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <Link className={`hover:text-primary text-base tracking-tight" ${pathname === "/services" ? "text-primary font-semibold" : "opacity-40"}`} href="/services" onClick={handleLinkClick}>
              Services
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <Link className={`hover:text-primary text-base tracking-tight" ${pathname === "/ideas" ? "text-primary font-semibold" : "opacity-40"}`} href="/ideas" onClick={handleLinkClick}>
              Ideas
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <Link className={`hover:text-primary text-base tracking-tight" ${pathname === "/careers" ? "text-primary font-semibold" : "opacity-40"}`} href="/careers" onClick={handleLinkClick}>
              Careers
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <Link className={`hover:text-primary text-base tracking-tight" ${pathname === "/contact" ? "text-primary font-semibold" : "opacity-40"}`} href="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
