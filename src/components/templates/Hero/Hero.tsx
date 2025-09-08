import Image from "next/image";
import shadowBottom from "@/assets/shadow-bottom.svg";
import shadowMobile from "@/assets/shadow-mobile.svg";
import { ContactLinkButton } from "@/components/atoms/ContactLinkButton";
export const Hero = () => {
  return (
    <section className="bg-foreground h-screen rounded-b-3xl relative">
      <div className="hidden h-fit w-fit lg:block">
        <Image
          src={shadowBottom}
          alt="shadow-bottom-hero-effect"
          className="w-screen absolute bottom-0"
        ></Image>
      </div>
      <div className="lg:hidden">
        <Image
          src={shadowMobile}
          alt="shadow-hero-effect"
          className="w-screen h-screen absolute object-cover bottom-0 sm:rounded-b-3xl sm:bottom-10"
        ></Image>
      </div>
      <div className="relative z-10 h-full flex gap-3 flex-col items-center justify-center px-5 lg:px-0 lg:w-2/3 mx-auto">
        <h1 className=" text-background font-bold text-4xl lg:text-7xl md:text-6xl xl:text-8xl text-center">
          Um parceiro: <br /> Além dos seguros
        </h1>
        <p className="text-[#ccc] font-bold text-1xl lg:text-4xl md:text-3xl xl:text-5xl text-center">
          Uma solução completa que cuida dos seus alunos, tranquiliza famílias e
          valoriza sua marca.
        </p>
        <div className="hidden lg:block">
          <ContactLinkButton classButton="mt-10" />
        </div>
      </div>
      <div className="lg:hidden ">
        <ContactLinkButton classButton="bottom-42 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
