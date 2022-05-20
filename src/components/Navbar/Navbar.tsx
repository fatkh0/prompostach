
import React, {useState} from "react";
import { NavLink} from "react-router-dom";
import CatalogNavbarContainer from "../CatalogNavbar/CatalogNavbarContainer";
import makeNavbar from "../../assets/navbarCreater";

import Container from "../Container/Container";
import { TNavItem } from "./NavbarContainer";


type TProps = {
    navbar: Array<TNavItem>
    catalog: Array<TNavItem>
    languages: Array<TNavItem>
}

const Navbar: React.FC<TProps> = React.memo( ({navbar, catalog, languages}) => {



    return (
        <Container>
            <ul className="capitalize w-screen sm:w-72 bg-white text-black text-lg font-bold">
                <li>
                    <CatalogNavbarContainer makeCatalogNavbar={makeNavbar} catalogItems={catalog} />
                </li>
                {makeNavbar(navbar)}
                {makeNavbar(languages)}
            </ul>
        </Container>
        
    )
})

export default Navbar