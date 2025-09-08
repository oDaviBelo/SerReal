import Image from "next/image";
import SolutionsGirl from "@/assets/solutions-girl.svg";
import SolutionsData from "@/data/solutions-data";
export const Solutions = () => {
  return (
    <section id="solucoes">
      <div className="flex flex-col md:flex-row lg:justify-between">
        <div>
          <Image
            src={SolutionsGirl}
            alt="Imagem representativa de uma estudante"
            height={0}
            width={0}
            className="md:h-fit h-full w-100 md:w-200 lg:px-16 justify-center flex items-center lg:justify-start"
          ></Image>
        </div>
        <div>
          <div className="h-full md:pr-16 md:items-center flex flex-col items-center">
            <h3 className="w-70 lg:w-100 py-5 text-2xl">
              Encontramos os melhores seguros de vida para instituições de
              ensino básico e superior.
            </h3>
            <div
              className="
            bg-[#f8f8f8] p-5 items-start rounded-2xl w-70 lg:w-100"
            >
              {SolutionsData.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <div className="flex flex-row  items-center gap-3 py-5">
                      <Image src={item.icon} alt="icon"></Image>
                      <h2 className="font-bold text-2xl flex justify-center items-center">
                        {item.title}
                      </h2>
                    </div>
                    <p className="pb-10">{item.body}</p>
                    {index !== 2 && <hr />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
