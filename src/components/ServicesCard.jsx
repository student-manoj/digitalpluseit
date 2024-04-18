import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const ServicesCard = ({ img, title, disciption }) => {
  return (
    <>
      <div className="bg-Secondary">
        <Image src={img} alt="" className="w-full" />
        <div className="p-8 text-center flex flex-col items-center gap-6">
          <h3 className="text-white md:text-[22px] text-[18px] font-semibold">
            {title}
          </h3>
          <p className="text-slate 2xl:text-lg text-base 2xl:w-[370px] text-center">
            {disciption}
          </p>
          <div className="">
            <button className="px-6 py-2 bg-primary rounded-lg flex items-center gap-2 font-medium text-white">
              Read More{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
