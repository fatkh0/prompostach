import React, { LegacyRef, useRef, useState, RefObject, useEffect } from 'react'
import Hamburger from '../../assets/Hamburger/Hamburger'
import showControl from '../../assets/showControl/showControl'
import NavbarContainer from '../Navbar/NavbarContainer'
import { useOnClickOutside } from "usehooks-ts";




type TProps = {
    isMenuOpen: boolean
    setIsMenuOpen: (isNavbarOpen: boolean) => void
}


const HamburgerMenu: React.FC<TProps> = React.memo(({setIsMenuOpen, isMenuOpen}) => {

    const wrapper = useRef(null)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    useOnClickOutside(wrapper, closeMenu)

    return (
        <div ref={wrapper} className='relative'>
            <div className='h-full -mt-3 sm:-mt-[17px] ml-0.5 mr-16'>
                <Hamburger isMenuOpen={isMenuOpen} callback={setIsMenuOpen}/>
            </div>
            
            {showControl((
                    <div className='absolute z-20 top-7 -left-[8px] sm:-left-3'>
                        <NavbarContainer />
                    </div>
                ), isMenuOpen)}
        </div>     
    )
})

export default HamburgerMenu