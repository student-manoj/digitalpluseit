import ServicesSection from "@/components/ServicesSection";

import HomePage from "./home/page";
import SimpleWorkSection from "@/components/SimpleWorkSection";
import PartnershipSection from "@/components/PartnershipSection";
import OurWorkSection from "@/components/OurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const page = () => {
  return (
    <>
      <HomePage />
      <ServicesSection />
      <SimpleWorkSection />
      <PartnershipSection />
      <OurWorkSection />
      <TestimonialsSection />
    </>
  );
};

export default page;
