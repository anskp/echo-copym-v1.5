import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { copymColoredIcon } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";
import { links } from "../config";
import { navigation } from "../constants";
import Button from "./Button";
import { HambugerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
              className={`fixed top-0 left-0 w-full z-50 border-b border-gray-300 lg:bg-white/90 lg:bg-blur-sm ${
          openNavigation ? "bg-white" : "bg-white/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img
            src={copymColoredIcon}
            width={190}
            height={40}
            alt="COPYM-AI"
            className="pointer-events-none select-none"
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target={item.external ? "_blank" : "_self"}
                rel={item.external && "noreferrer noopener"}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-black transition-colors hover:text-color-1 ${
                  item.onlyMobile && "lg:hidden"
                } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-black"
                    : "lg:text-black/50"
                } lg:leading-5 lg:hover:text-black xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HambugerMenu />
        </nav>

        <Button className="hidden lg:flex" href={links.sourceCode} external>
          Source Code
        </Button>

        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
