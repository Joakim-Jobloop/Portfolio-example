
import { ClickableLogo } from "../logo/Logo";
import { HamburgerBar } from "./navComponents/HamburgerBar";
import { NavBar } from "./navComponents/NavBar";

export const Header = () => {
  return (
    <header className="h-24 flex justify-between items-center page-padding bg-slate-700" id="top">
      <ClickableLogo/>
      <NavBar />
      <HamburgerBar />
    </header>
  );
};
