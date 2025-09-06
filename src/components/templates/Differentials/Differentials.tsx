'use client'
import { CardMarketYears } from '@/components/templates/Differentials/CardMarketYears'
import { CardWealth } from '@/components/templates/Differentials/CardWealth'
import { CardSchool } from '@/components/templates/Differentials/CardSchool'
import { CardApproval } from '@/components/templates/Differentials/CardApproval'
import { ContactLinkButton } from '@/components/atoms/ContactLinkButton'
export const Differentials = () => {
  return (
    <section id="diferenciais" className="">
      <div className="flex xl:justify-end mx-auto xl:mx-0 justify-center items-center px-15 xl:mr-20 my-20">
        <h3 className="text-[14px] md:text-[16px] break-normal lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold w-auto">
          Um time com quase duas décadas de experiência e dezenas de milhões de
          reais movimentados.
        </h3>
      </div>

      <div className=" md:grid md:grid-cols-3">
        <div className="flex flex-col items-center mb-10 md:mb-0">
          <CardMarketYears />
        </div>

        <div className="flex flex-col items-center mb-10 md:mb-0">
          <div className="hidden mb-30 md:flex flex-col items-center">
            <CardSchool />
          </div>

          <div className="flex flex-col items-center">
            <CardApproval />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-20 lg:mb-45  flex flex-col items-center">
            <CardWealth />
          </div>
          <div className="">
            <ContactLinkButton
              text="Cote agora"
              className="bg-[#1E5BC6] w-50 lg:w-auto"
              classButton="text-white"
              classButtonIcon=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
