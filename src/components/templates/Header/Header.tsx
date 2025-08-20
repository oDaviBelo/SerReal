'use client'
import Image from 'next/image'
import Logo from '@/assets/Logo.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import menuIcon from '@/assets/menu-icon.svg'
import { Button } from '@/components/ui/button'
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#missao', label: 'Missão' },
    { href: '#solucoes', label: 'Soluções' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#contato', label: 'Contato' },
    { href: '/blog', label: 'Blog' },
  ]

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  return (
    <header className="absolute bg-foreground lg:bg-background top-0 left-0 z-50 w-full">
      <div className="relative flex h-20 items-center justify-between px-6 lg:px-16">
        <Link href="/" aria-label="Voltar para a página inicial">
          <Image src={Logo} alt="Logo da Empresa" className="h-auto w-40" />
        </Link>

        <nav className="hidden lg:block" aria-label="Navegação principal">
          <ul className="flex gap-10 text-xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.label === 'Blog' ? (
                  <Button className="w-30 rounded-full">
                    <Link
                      href={link.href}
                      className="relative font-light text-background tracking-wider  transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#0A2846] after:transition-transform after:duration-300 hover:text-gray-200 hover:after:scale-x-100"
                    >
                      {link.label}
                    </Link>
                  </Button>
                ) : (
                  <Link
                    href={link.href}
                    className="relative font-light tracking-wider text-foreground transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#0A2846] after:transition-transform after:duration-300 hover:text-gray-200 hover:after:scale-x-100"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

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
      </div>
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-[90%] max-w-sm bg-[#0A2846] shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex h-20 items-center justify-between p-6">
          <h2
            id="mobile-menu-title"
            className="text-2xl text-background font-bold"
          >
            Navegação
          </h2>
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
    </header>
  )
}
