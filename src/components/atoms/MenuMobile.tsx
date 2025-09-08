"use client";
import Link from "next/link";
import { useState } from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import menuIcon from "@/assets/menu-icon.svg";
import Image from "next/image";
interface navDataType {
  href: string;
  label: string;
}

interface menuMobileProps {
  navLinks: navDataType[];
}
export const MenuMobile = ({ navLinks }: menuMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  useBodyScrollLock(isOpen);

  return (
    <>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label="Abrir menu"
          className="p-2"
        >
          <Image src={menuIcon} alt="" height={40} aria-hidden="true" />
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-[90%] max-w-sm bg-[#0A2846] shadow-lg transition-transform duration-300 ease-in-out z-50 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex h-20 items-center justify-between p-6">
          <h2 className="text-2xl text-background font-bold">Navegação</h2>
          <button onClick={toggleMenu} aria-label="Fechar menu" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-6" aria-label="Navegação mobile">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={`mobile-${link.href}`}>
                <Link
                  href={link.href}
                  className="block py-2 text-xl text-background font-light hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuMobile;
