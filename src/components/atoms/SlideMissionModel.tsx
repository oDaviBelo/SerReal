"use client";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 10000, easing: (t: number) => t };
export type SlideProps = {
  isRtl: boolean;
  slide1: string;
  slide2: string;
  slide3: string;
  slide4: string;
};

export const SlideMissionModel = ({
  isRtl,
  slide1,
  slide2,
  slide3,
  slide4,
}: SlideProps) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: isRtl,

    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(4, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
    breakpoints: {
      "(min-width:0px)": {
        slides: { perView: "auto", spacing: 50 },
      },
    },
  });
  return (
    <section
      ref={sliderRef}
      className="keen-slider justify-center items-center mt-5 lg:mt-10"
    >
      <div className="keen-slider__slide number-slide1">
        <h3 className="text-[10px] min-[374px]:text-[12px] sm:text-[16px] md:text-2xl lg:text-3xl xl:text-5xl text-[#949494] font-bold">
          {slide1}
        </h3>
      </div>
      <div className="keen-slider__slide number-slide2">
        <h3 className="text-[10px] min-[374px]:text-[12px] sm:text-[16px] md:text-2xl lg:text-3xl xl:text-5xl text-[#949494] font-bold">
          {slide2}
        </h3>
      </div>
      <div className="keen-slider__slide number-slide3">
        <h3 className="text-[10px] min-[374px]:text-[12px] sm:text-[16px] md:text-2xl lg:text-3xl xl:text-5xl text-[#949494] font-bold">
          {slide3}
        </h3>
      </div>
      <div className="keen-slider__slide number-slide4">
        <h3 className="text-[10px] min-[374px]:text-[12px] sm:text-[16px] md:text-2xl lg:text-3xl xl:text-5xl text-[#949494] font-bold">
          {slide4}
        </h3>
      </div>
    </section>
  );
};

export default SlideMissionModel;
