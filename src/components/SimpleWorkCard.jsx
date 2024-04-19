import Image from "next/image";

const SimpleWorkCard = ({ img, title, disciption }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <Image src={img} alt="" className="w-" />
        <h4 className="text-white md:text-[22px] text-[18px] font-semibold">
          {title}
        </h4>
        <p className="text-slate 2xl:w-[424px] text-center">{disciption}</p>
      </div>
    </>
  );
};

export default SimpleWorkCard;
