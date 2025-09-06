import CountUp from 'react-countup'
import Image from 'next/image'
import Globe from '@/assets/globe.png'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
export const CardWealth = () => {
  const { ref, visible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
  })

  return (
    <div
      ref={ref}
      className="gap-20 bg-[#FF6200] rounded-2xl w-2/3 p-10 text-white font-semibold relative"
    >
      <div className="absolute bottom-0 left-0 z-0">
        <Image
          src={Globe}
          width={250}
          height={250}
          alt="globo"
          className="bottom-0"
        ></Image>
      </div>
      <h3 className="text-3xl relative z-10">Wealth</h3>
      {visible && (
        <div className="w-fit text-3xl lg:text-5xl xl:7xl relative z-10">
          <CountUp
            start={1}
            end={30}
            delay={0}
            duration={2.75}
            separator=""
            decimals={0}
            decimal=","
            prefix="R$"
            suffix="m"
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
      )}

      <hr className="mx-auto my-10 relative z-10" />
      <p className="font-normal flex break-normal mx-auto relative z-10">
        Já movimentamos dezenas de milhões de reais em seguros de vida.
      </p>
    </div>
  )
}
