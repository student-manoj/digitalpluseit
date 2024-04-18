import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";

const HeaderBar = () => {
  return (
    <>
      <div className="bg-gray9">
        <div className="container mx-auto px-4 flex justify-between py-3 text-white">
          <div className="flex flex-row items-center gap-10">
            <ul className="">
              <li className="flex items-center gap-3">
                <FaPhoneVolume className="text-primary h-4 w-4" />
                <span className="text-base">+1234567890</span>
              </li>
            </ul>
            <ul className="border-l pl-4">
              <li className="flex items-center gap-3">
                <HiOutlineMailOpen className="text-primary h-5 w-5" />
                <span className="text-base">+info@digitalpluseit.com</span>
              </li>
            </ul>
          </div>
          <div className="flex gap-5">
            <FaFacebookF className="bg-black p-2 h-7 w-7 rounded-full hover:bg-primary duration-300" />
            <FaTwitter className="bg-black p-2 h-7 w-7 rounded-full hover:bg-primary duration-300" />
            <FaInstagram className="bg-black p-2 h-7 w-7 rounded-full hover:bg-primary duration-300" />
            <FaYoutube className="bg-black p-2 h-7 w-7 rounded-full hover:bg-primary duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
