import React, {useState} from "react";
import { TNavItem } from "../Navbar/NavbarContainer";
import CatalogNavbar from "./CatalogNavbar";


type TProps = {
    catalogItems: Array<TNavItem>
    closeMenu: () => void
}


const CatalogNavbarContainer: React.FC<TProps> = (props: TProps) => {

    const [isCatalogShowing, setIsCatalogShowing] = useState(false)


    return <CatalogNavbar {...props} closeMenu={props.closeMenu} isCatalogShowing={isCatalogShowing} setIsCatalogShowing={setIsCatalogShowing} />
}

export default CatalogNavbarContainer