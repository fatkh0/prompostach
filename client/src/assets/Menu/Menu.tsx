import React, { EventHandler, MouseEventHandler, RefObject, useEffect, useRef } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useOnClickOutside } from "usehooks-ts";
import makeNavbar from '../../assets/navbarCreater'
import showControl from "../../assets/showControl/showControl";
import { TNavItem } from '../../types/types'

type TProps = {
    menuItems: Array<TNavItem>
    isMenuOpen: boolean 
    setIsMenuOpen: (isMenuOpen: boolean ) => void
    stylesX: string
    Icon: typeof FaUser | typeof FaShoppingCart
}

const Menu: React.FC<TProps> = React.memo(({menuItems, setIsMenuOpen, isMenuOpen, stylesX, Icon}) => {

    const wrapper = useRef(null)
    

    const onToggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = (): void => {
        setIsMenuOpen(false)
    }

    useOnClickOutside(wrapper, closeMenu)

    return (
        <div ref={wrapper} className="relative">
            <div onClick={onToggleMenu} className='cursor-pointer'>
                <Icon className='w-6 h-6 sm:w-8 sm:h-8' />
            </div>
            {showControl(
                <div className={'absolute top-10 z-50 lg:top-12 sm:top-11 sm:left-auto sm:-right-2 ' + stylesX}>
                    <ul className="shadow-lg shadow-black capitalize w-screen sm:w-72 bg-white text-black text-lg font-bold">
                        {makeNavbar(menuItems, closeMenu)}
                    </ul>
                </div>
            , isMenuOpen)}

        </div>
        
    )
})

export default Menu
