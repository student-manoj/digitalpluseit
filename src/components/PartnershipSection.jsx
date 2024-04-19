import { PartnershipData } from "@/utils/PartnershipData";
import Heading from "./Heading";
import PartnershipCard from "./PartnershipCard";

const PartnershipSection = () => {
  return (
    <>
      <div className="bg-gray9 lg:py-[100px] md:py-[70px]">
        <div className="container mx-auto px-4">
          <Heading title="Partnership" titleName="Who We Work With" />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:pt-[60px] md:pt-[50px] pt-[40px]">
            {PartnershipData.slice(0, 3).map((val) => (
              <PartnershipCard key={val.id} {...val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipSection;
