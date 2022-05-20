import React, {useState} from "react";
import classNames from "classnames";
import Arrow from "../../assets/Arrow/Arrow";
import { TNavItem } from "../Navbar/NavbarContainer";
import showControl from "../../assets/showControl/showControl";

type TProps = {
    makeCatalogNavbar: (navItems: Array<TNavItem>) => Array<JSX.Element>
    catalogItems: Array<TNavItem>
    isCatalogShowing: boolean
    setIsCatalogShowing: (isCatalogShowing: boolean) => void
}

const CatalogNavbar: React.FC<TProps> = React.memo(({makeCatalogNavbar, catalogItems, isCatalogShowing, setIsCatalogShowing}) => {


    const arrowClassNames = classNames({
        'absolute': true,
        'top-4': isCatalogShowing,
        'top-2.5': !isCatalogShowing
    })

    const showCatalog = () => {
        setIsCatalogShowing(!isCatalogShowing)
    }

    return (
        <React.Fragment>
            <div onClick={showCatalog} className="relative  cursor-pointer p-3">
                <span className="mr-3">каталог продукции</span>
                <span className={arrowClassNames}><Arrow isUp={isCatalogShowing} /></span>
            </div>
            {showControl((
                    <ul className="bg-[#222] text-white "> 
                        {makeCatalogNavbar(catalogItems)}
                    </ul>
                ), isCatalogShowing)
            }
        </React.Fragment>
        
    )
})

export default CatalogNavbar