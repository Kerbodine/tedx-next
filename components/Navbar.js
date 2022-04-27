import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import Logo from "../public/logo-light.svg";

import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const pages = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/speakers",
      title: "Speakers",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/team",
      title: "Our team",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  return (
    <>
      <div className="w-full h-20 bg-gray-100 flex items-center px-4 sm:px-8">
        <Link href="/" passHref>
          <Logo className="h-12 cursor-pointer" />
        </Link>
        <div className="ml-auto hidden gap-4 lg:flex">
          {pages.map((page) => (
            <Link href={page.path} aria-label={page.title} key={page.path}>
              <a>
                <NavbarItem title={page.title} path={page.path} />
              </a>
            </Link>
          ))}
        </div>
        <div
          className="flex items-center justify-center ml-auto lg:hidden text-2xl min-w-[32px] min-h-[32px] rounded-md hover:bg-gray-200"
          onClick={toggleNav}
        >
          <BiMenu />
        </div>
      </div>
      {showNav ? (
        <div className="w-full lg:hidden border-t-2 border-gray-300 bg-gray-100 flex flex-wrap gap-x-2 py-2 justify-center z-10 px-2">
          {pages.map((page) => (
            <Link href={page.path} aria-label={page.title} key={page.path}>
              <a>
                <NavbarItem title={page.title} path={page.path} />
              </a>
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
