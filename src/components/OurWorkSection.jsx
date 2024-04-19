import { OurWorkData } from "@/utils/OurWorkData";
import Heading from "./Heading";
import OurWorkCard from "./OurWorkCard";

const OurWorkSection = () => {
  return (
    <>
      <div className="bg-Secondary lg:py-[100px] md:py-[70px]">
        <div className="container mx-auto px-4">
          <Heading
            title="Our Work Showcase"
            titleName="Explore our best recently completed projects"
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:pt-[60px] md:pt-[50px] pt-[40px]">
            {OurWorkData.slice(0, 3).map((val) => (
              <OurWorkCard key={val.id} {...val} />
            ))}
          </div>
          <div className="flex justify-center pt-10">
            <button className="px-6 py-2 bg-primary rounded-lg gap-2 font-medium text-white">
              View All project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorkSection;
