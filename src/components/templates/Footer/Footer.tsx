"use client";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import ShadowFooter from "@/assets/shadow-top.svg";
import ContactLinkButton from "@/components/atoms/ContactLinkButton";
import Link from "next/link";
import React, { useState } from "react";
import navLinks from "@/data/nav-link-data";

export const Footer = () => {
  const [emailToCopy] = useState("comercial@serrealvidaescolar.com.br");
  const [wasCopied, setWasCopied] = useState(false);
  const copyOnClick = () => {
    navigator.clipboard.writeText(emailToCopy);
    setWasCopied(true);
    setTimeout(() => {
      setWasCopied(false);
    }, 2000);
  };
  return (
    <footer
      id="contato"
      className="bg-black text-white relative lg:px-16  px-6 mt-20 overflow-hidden"
    >
      <Image
        src={ShadowFooter}
        alt="shadow-footer"
        width={0}
        height={0}
        className="absolute top-0 w-full"
      ></Image>
      <div>
        <Image src={Logo} width={0} height={0} alt="logo"></Image>
      </div>
      <div className="flex flex-col md:flex-row  justify-between">
        <nav className="" aria-label="Navegação secundária">
          <ul className="flex flex-col md:flex-row items-center gap-10 text-xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative font-light tracking-wider text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#0A2846] after:transition-transform after:duration-300 hover:text-gray-200 hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full flex md:justify-end md:items-end justify-center py-4 text-center">
          <ContactLinkButton
            text="Fale conosco"
            classButtonIcon=""
            classButton="w-full h-fit p-2 mt-3 md:mt-0 flex justify-center text-center items-center"
          />
        </div>
      </div>
      <hr className="" />
      <div className="flex justify-between flex-col my-5 md:flex-row gap-10">
        <div className="">
          <div className="flex flex-col relative">
            <span>E-mail Comercial</span>
            <address>
              <button
                aria-label="clique para copiar e-mail"
                className="cursor-pointer z-10"
                onClick={copyOnClick}
                title="Copiar"
              >
                {emailToCopy}
              </button>
            </address>
            {wasCopied && (
              <div className="shadow-black bg-white text-black opacity-1 animate-out transition-opacity animate-fade-out duration-1000 w-fit p-2 ease-in rounded-2xl  shadow-2xl">
                <span className="">E-mail copiado</span>
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            <small>Copyright © Ser Real Vida Escolar</small>
          </div>
          <span className="flex justify-center mt-5 lg:mt-2 p-5">
            Desenvolvido por Davi Belo
          </span>
        </div>
      </div>
    </footer>
  );
};
