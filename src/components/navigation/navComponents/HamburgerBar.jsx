import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { NavItem } from "./NavItems";
import { useState } from "react";
import MENU_LIST from "../../../data/menu_list";
import { ClickableLogo } from "../../logo/Logo";

export const HamburgerBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className="flex md:hidden items-center justify-center">
      <button
        className="block text-white z-50 ml-8 transform-scale hover:scale-110 "
        onClick={handleMenuToggle}
      >
        {isOpen ? <IoCloseSharp className="w-10 h-10" />  : <GiHamburgerMenu className={` h-10 w-10 `} /> } 
      </button>
      <div
        className={`top-0 left-0 fixed h-screen w-full transition-transform ${
          isOpen ? "translate-y-0" : "-translate-y-[calc(100%+96px)]"
        }`}
      >
        <div className="h-24 bg-slate-800 w-full flex justify-end">
          {/* <button onClick={handleMenuToggle}>
            <IoCloseSharp className="w-10 h-10" />
          </button> */}
        </div>
        <nav className="h-screen flex justify-center items-center flex-col bg-slate-600 gap-8 w-full">
          {MENU_LIST.map((menu) => 
            <NavItem href={menu.href} text={menu.text} />
          )}
        </nav>
      </div>
    </div>
  );
};
