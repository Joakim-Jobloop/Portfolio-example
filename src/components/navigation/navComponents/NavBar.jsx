import MENU_LIST from "../../../data/menu_list"
import { NavItem } from "./NavItems"

export const NavBar = () => {
    return (
        <nav className="md:flex hidden gap-8">
            {MENU_LIST.map((menu) => 
                <NavItem href={menu.href} text={menu.text} />
            )}
        </nav>
    )
}