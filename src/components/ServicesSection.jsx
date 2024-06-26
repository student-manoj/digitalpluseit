import { ServicesData } from "@/utils/ServicesData";
import Heading from "./Heading";
import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
  return (
    <>
      <div className="bg-gray9 lg:py-[100px] md:py-[70px]">
        <div className="container mx-auto px-4">
          <Heading
            title="Our Services"
            titleName="Services we’re providing to our customers"
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:pt-[60px] md:pt-[50px] pt-[40px]">
            {ServicesData.slice(0, 9).map((val) => (
              <ServicesCard key={val.id} {...val} />
            ))}
          </div>
          <div className="flex justify-center pt-10">
            <button className="px-6 py-2 bg-primary rounded-lg gap-2 font-medium text-white">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
