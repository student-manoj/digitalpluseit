import { SimpleWorkData } from "@/utils/SimpleWorkData";
import Heading from "./Heading";
import SimpleWorkCard from "./SimpleWorkCard";

const SimpleWorkSection = () => {
  return (
    <>
      <div className="bg-Secondary lg:py-[100px] md:py-[70px]">
        <div className="container mx-auto px-4">
          <Heading
            title="Simple Work Process"
            titleName="Check how we works in3 easy steps"
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:pt-[60px] md:pt-[50px] pt-[40px]">
            {SimpleWorkData.slice(0, 3).map((value) => (
              <div key={value.id} className="flex justify-center">
                <SimpleWorkCard {...value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleWorkSection;
