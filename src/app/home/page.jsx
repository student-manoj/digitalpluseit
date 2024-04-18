import { Home1Data } from "@/utils/HomePageData";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <section className="bg-Secondary">
        <div className="container mx-auto px-4 flex flex-col gap-6 items-center justify-center text-white lg:py-52 py-28 text-center">
          <div className="flex gap-3 items-center text-primary md:text-xl text-xs">
            <div className="border-t-2 md:w-12 w-8 border-primary" />
            <p>Technology And Digital Solutions</p>
            <div className="border-t-2 md:w-12 w-8 border-primary" />
          </div>
          <h1 className="lg:w-[816px] md:text-[44px] text-[28px] font-medium">
            Most Loved, Top Rated <br />
            <span className="text-primary">
              Website, Mobile App, Digital Marketing
            </span>
            <br />
            Agency From Halifax, Canada
          </h1>
          <p>
            Securing Top Position in Web & App Development Companies list, We
            help Startups, Entrepreneurs & <br /> Enterprises shaping their
            ideas into Award-Winning Product & Business.
          </p>
          <div className="pt-7">
            <button className="px-7 py-3 rounded-xl bg-primary text-white hover:scale-110 duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray9 lg:py-[100px] py-[70px]">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {Home1Data.map((hData) => {
            return (
              <div
                key={hData.id}
                className="lg:p-[42px] p-[36px] flex flex-col items-center text-center gap-6 bg-black border-b-8 border-primary">
                <Image src={hData.img} alt="image" />
                <h1 className="text-white text-2xl font-semibold pt-3">
                  {hData.name}
                </h1>
                <p className="text-slate xl:w-[340px] 2xl:text-[18px]">
                  {hData.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomePage;
