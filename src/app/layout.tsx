import type { Metadata } from 'next'
import { Geist, Geist_Mono as GeistMono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ser Real Vida Escolar | A melhor seguradora para você',
  description:
    'Encontramos os melhores seguros de vida para instituições de ensino básico e superior.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  alternates: {
    canonical: 'https://closetsustentavel.com.br',
  },
  robots: {
    index: process.env.NEXT_PUBLIC_ENVIRONMENT !== 'DEV',
  },
  openGraph: {
    url: 'https://serrealvidaescolar.com.br',
    siteName: 'Ser Real Vida Escolar',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
