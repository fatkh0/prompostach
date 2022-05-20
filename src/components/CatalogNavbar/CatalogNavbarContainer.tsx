import React, {useState} from "react";
import { TNavItem } from "../Navbar/NavbarContainer";
import CatalogNavbar from "./CatalogNavbar";


type TProps = {
    makeCatalogNavbar: (navItems: Array<TNavItem>) => Array<JSX.Element>
    catalogItems: Array<TNavItem>
}


const CatalogNavbarContainer: React.FC<TProps> = (props: TProps) => {

    const [isCatalogShowing, setIsCatalogShowing] = useState(false)


    return <CatalogNavbar {...props} isCatalogShowing={isCatalogShowing} setIsCatalogShowing={setIsCatalogShowing} />
}

export default CatalogNavbarContainer