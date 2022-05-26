import React, {MouseEventHandler, useState} from "react";
import classNames from "classnames";
import Arrow from "../../assets/Arrow/Arrow";
import { TNavItem } from "../Navbar/NavbarContainer";
import showControl from "../../assets/showControl/showControl";
import makeNavbar from "../../assets/navbarCreater";
import { NavLink } from "react-router-dom";

type TProps = {
    catalogItems: Array<TNavItem>
    isCatalogShowing: boolean
    setIsCatalogShowing: (isCatalogShowing: boolean) => void
    closeMenu: () => void
}

const CatalogNavbar: React.FC<TProps> = React.memo(({catalogItems, isCatalogShowing, setIsCatalogShowing, closeMenu}) => {


    const arrowClassNames = classNames({
        'absolute pl-5 pr-20': true,
        'top-4': isCatalogShowing,
        'top-2.5': !isCatalogShowing,
        'px-5': true
    })

    const showCatalog = () => {
        setIsCatalogShowing(!isCatalogShowing)
    }

    return (
            <React.Fragment>
                <div  className="relative  cursor-pointer p-3">
                    <NavLink onClick={closeMenu} to='/catalog' className="mr-3">каталог продукции</NavLink>
                    <span onClick={showCatalog} className={arrowClassNames}><Arrow isUp={isCatalogShowing} /></span>
                </div>
                {showControl((
                        <ul className="bg-[#222] text-white "> 
                            {makeNavbar(catalogItems, closeMenu)}
                        </ul>
                    ), isCatalogShowing)
                }
            </React.Fragment>
        
    )
})

export default CatalogNavbar