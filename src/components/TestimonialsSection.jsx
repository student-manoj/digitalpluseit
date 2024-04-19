import { TestimonialsData } from "@/utils/TestimonialsData";
import Heading from "./Heading";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialsSection = () => {
  return (
    <>
      <div className="bg-Secondary lg:py-[100px] md:py-[70px]">
        <div className="container mx-auto px-4">
          <Heading
            title="Client Testimonials"
            titleName="A Word From Our Proud Clients"
          />
          <div className="grid md:grid-cols-2 gap-6 lg:pt-[60px] md:pt-[50px] pt-[40px]">
            {TestimonialsData.slice(0, 2).map((value) => (
              <div key={value.id} className="flex justify-center">
                <TestimonialsCard {...value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
