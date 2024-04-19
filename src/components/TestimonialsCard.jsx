import Image from "next/image";

const TestimonialsCard = ({ img, icon, title, stitle, disciption }) => {
  return (
    <>
      <div className=" bg-gray9 rounded-[10px]">
        <div className="p-10 flex flex-col gap-4 text-white">
          <Image src={icon} alt="" className="w-" />
          <div className="flex flex-col items-center gap-7">
            <p className="text-center">{disciption}</p>
            <Image src={img} alt="" className="w-" />
            <div className="flex flex-col items-center gap-3">
              <h4 className="text-[40px] font-medium">{title}</h4>
              <p className="text-primary">{stitle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
