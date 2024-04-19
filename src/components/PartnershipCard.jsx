import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const PartnershipCard = ({ img, title, disciption }) => {
  return (
    <>
      <div className=" bg-Secondary rounded-[10px]">
        <div className="p-10 flex flex-col items-center gap-4">
          <Image src={img} alt="" className="w-" />
          <h4 className="text-white md:text-[22px] text-[18px] font-semibold">
            {title}
          </h4>
          <p className="text-slate 2xl:w-[424px] text-center">{disciption}</p>

          <button className="px-6 py-2 flex items-center gap-2 font-medium text-primary ">
            Read More{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PartnershipCard;
