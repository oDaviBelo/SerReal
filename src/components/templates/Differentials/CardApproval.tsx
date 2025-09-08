import CountUp from "react-countup";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const CardApproval = () => {
  const { ref, visible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="gap-20 bg-white rounded-2xl shadow-black shadow-2xl w-2/3 p-10 text-black font-semibold relative"
    >
      <h3 className="text-[16px] md:text-2xl lg:text-3xl">Aprovação</h3>
      {visible && (
        <div className="w-fit text-3xl lg:text-5xl xl:7xl relative z-10">
          <CountUp
            start={1}
            end={100}
            delay={0}
            duration={2.75}
            separator=""
            decimals={0}
            decimal=","
            prefix=""
            suffix="%"
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
      <p className="font-normal   flex break-normal mx-auto">
        Nosso time tem uma taxa 100% de aprovação dos clientes.
      </p>
    </div>
  );
};
