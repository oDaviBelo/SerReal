import Image from 'next/image'
import Graph from '@/assets/graph.png'
import CountUp from 'react-countup'
import { useEffect, useState, useRef } from 'react'

export const CardMarketYears = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])
  return (
    <div
      ref={ref}
      className="gap-20 bg-[#1E5BC6] rounded-2xl w-2/3 p-10 text-white font-semibold relative"
    >
      <h3 className="text-3xl md:text-2xl lg:text-3xl">Anos no mercado</h3>
      <Image
        src={Graph}
        alt="grafico"
        className="h-fit w-fit items-center flex justify-center mx-auto my-20 "
        height={0}
        width={0}
      ></Image>
      {visible && (
        <div className="flex items-end justify-end-safe px-8 md:justify-center lg:justify-end-safe text-7xl md:text-6xl lg:text-7xl 2xl:text-8xl">
          <CountUp
            start={1}
            end={15}
            delay={0}
            duration={2.75}
            separator=" "
            decimals={0}
            decimal=","
            prefix=""
            suffix="+"
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
      )}

      <hr className="mx-auto my-10" />
      <p className="font-normal xl:w-80  break-normal mx-auto">
        Nosso time é extremamente qualificado e experiente. Estamos prontos para
        atender você.
      </p>
    </div>
  )
}
