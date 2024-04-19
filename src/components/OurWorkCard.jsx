import Image from "next/image";

const OurWorkCard = ({ img }) => {
  return (
    <>
      <div className="">
        <Image src={img} alt="" className="w-full" />
      </div>
    </>
  );
};

export default OurWorkCard;
