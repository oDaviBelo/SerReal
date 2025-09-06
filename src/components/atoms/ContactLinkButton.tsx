'use client'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '@/assets/arrom-button.svg'

interface ContactButtonProps {
  link?: string
  text?: string
  className?: string
  classButton?: string

  classButtonIcon?: string
}

export const ContactLinkButton = ({
  link = 'https://wa.me/5571992541919?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ser%20Real.%20Gostaria%20de%20algumas%20informa%C3%A7%C3%B5es.',
  text = 'Fale conosco',
  className = 'bg-background',
  classButton = '',
  classButtonIcon = '',
}: ContactButtonProps) => {
  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className={`relative z-20 group rounded-3xl flex max-w-[200px] lg:min-w-[200px] p-3 pr-0 cursor-pointer hover:bg-black hover:text-white items-center justify-center text-foreground ${classButton} ${className} `}
    >
      <div
        className={`bg-foreground ${classButtonIcon} h-fit p-4 left-1 items-center group-hover:bg-[#080F25] absolute w-fit rounded-full`}
      >
        <Image src={arrow} alt="arrow-button" width={10} height={10}></Image>
      </div>
      <span className="w-full text-center items-center">{text}</span>
    </Link>
  )
}
export default ContactLinkButton
