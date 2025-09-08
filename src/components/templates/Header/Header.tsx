import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";

import MenuMobile from "@/components/atoms/MenuMobile";
import navLinks from "@/data/nav-link-data";
export const Header = () => {
  return (
    <header className="absolute bg-transparent top-0 left-0 z-[51] w-full">
      <div className="relative flex h-20 items-center justify-between px-6 lg:px-16">
        <Link href="/" aria-label="Voltar para a página inicial">
          <Image src={Logo} alt="Logo da Empresa" height={160} width={160} />
        </Link>

        <nav className="hidden lg:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-10 text-xl">
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
        <MenuMobile navLinks={navLinks} />
      </div>
    </header>
  );
};
