import React from "react";
import { NavLink } from "react-router-dom";
import { TNavItem } from "../components/Navbar/NavbarContainer";



const makeNavbar = (navItems: Array<TNavItem>): Array<JSX.Element> =>  navItems.map((t) => (
    <li key={t.id}>
            <NavLink className=' block w-full h-full  p-3 cursor-pointer' to={t.path}>
                {t.innerText}
            </NavLink>
    </li>
))



export default makeNavbar