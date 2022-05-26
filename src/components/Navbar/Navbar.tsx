
import React, {MouseEventHandler, useState} from "react";
import { NavLink} from "react-router-dom";
import CatalogNavbarContainer from "../CatalogNavbar/CatalogNavbarContainer";
import makeNavbar from "../../assets/navbarCreater";

import Container from "../Container/Container";
import { TNavItem } from "./NavbarContainer";


type TProps = {
    navbar: Array<TNavItem>
    catalog: Array<TNavItem>
    languages: Array<TNavItem>
    closeMenu: () => void
}

const Navbar: React.FC<TProps> = React.memo( ({navbar, catalog, languages, closeMenu}) => {



    return (
            <ul className="capitalize w-screen sm:w-72 bg-white text-black text-lg font-bold shadow-lg shadow-black">
                <li >
                    <CatalogNavbarContainer catalogItems={catalog} closeMenu={closeMenu} />
                </li>
                {makeNavbar(navbar, closeMenu)}
                {makeNavbar(languages, closeMenu)}
            </ul>
        
    )
})

export default Navbar