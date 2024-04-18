import Image from "next/image";
import logoFooter from "../../public/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterCompanyData } from "@/utils/FooterCompanyData";

const Footer = () => {
  return (
    <>
      <div className="bg-[url('/footerBgImg.png')] bg-center bg-cover">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 py-24">
            <div className="flex flex-col gap-5">
              <Image src={logoFooter} alt="Logo Footer" />
              <p className="text-slate">
                There are many variations of simply free text passages of
                available but the majority have suffered alteration in some
                form.
              </p>
              <div className="text-white text-[28px] font-medium flex gap-4 items-center">
                <h3 className="">Follow Us</h3>
                <div className="border-t-2 w-12 border-primary" />
              </div>
              <div className="flex gap-5 text-white">
                <FaFacebookF className="bg-gray9 p-3 h-10 w-10 rounded-full hover:bg-primary duration-300" />
                <FaTwitter className="bg-gray9 p-3 h-10 w-10 rounded-full hover:bg-primary duration-300" />
                <FaInstagram className="bg-gray9 p-3 h-10 w-10 rounded-full hover:bg-primary duration-300" />
                <FaYoutube className="bg-gray9 p-3 h-10 w-10 rounded-full hover:bg-primary duration-300" />
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="text-white text-[28px] font-semibold">Company</h4>
              <div className="flex flex-col gap-5">
                {FooterCompanyData.map((val) => (
                  <div
                    key={val.id}
                    className="text-slate text-base font-medium">
                    {val.marketing}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
