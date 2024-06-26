"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "../../public/logo.png";

const NavBar = () => {
  const links = [
    {
      herf: "/home",
      name: "Home",
    },
    {
      herf: "/about",
      name: "About Us",
    },
    {
      herf: "/services",
      name: "Services",
    },
    {
      herf: "/solutions",
      name: "Solutions",
    },
    {
      herf: "/portfolio",
      name: "Portfolio",
    },
    {
      herf: "/blog",
      name: "Blog",
    },
    {
      herf: "/contact",
      name: "Contact Us",
    },
  ];

  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  return (
    <section className="bg-Secondary text-slate border-b border-slate">
      <div className="container mx-auto px-4 flex justify-between items-center h-[100px]">
        <Link href="/home">
          <Image src={Logo} alt="image" priority />
        </Link>
        <li className="lg:flex hidden xl:gap-12 gap-8 font-medium">
          {links.map((linkData) => {
            const isActive = pathname.startsWith(linkData.herf);
            return (
              <Link
                key={linkData.name}
                className={isActive ? "text-primary" : "text-white"}
                href={linkData.herf}>
                {linkData.name}
              </Link>
            );
          })}
        </li>
        {/* nomile navbar  */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer lg:hidden">
          {nav ? (
            <FaXmark className="w-8 h-7" />
          ) : (
            <FaBars className="w-8 h-7" />
          )}
        </div>
        {nav && (
          <div className="absolute md:top-[153px] top-[103px] left-0 right-0 h-[100vh] bg-black">
            <li className="flex flex-col gap-3 px-6 text-xl font-medium pt-20 items-center">
              {links.map((linkData) => {
                const isActive = pathname.startsWith(linkData.herf);
                return (
                  <Link
                    onClick={() => setNav(!nav)}
                    key={linkData.name}
                    className={isActive ? "text-primary" : "text-white"}
                    href={linkData.herf}>
                    {linkData.name}
                  </Link>
                );
              })}
            </li>
          </div>
        )}
      </div>
    </section>
  );
};
export default NavBar;
