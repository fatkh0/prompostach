import React, { LegacyRef, useRef, useState, RefObject, useEffect, useContext } from 'react'
import Hamburger from '../../assets/Hamburger/Hamburger'
import showControl from '../../assets/showControl/showControl'
import NavbarContainer from '../Navbar/NavbarContainer'
import { useOnClickOutside } from "usehooks-ts";
import HamburgerMenuContext from './HamburgerMenuContext';




type TProps = {
}


const HamburgerMenu: React.FC<TProps> = React.memo(() => {

    const {setIsMenuOpen, isMenuOpen} = useContext(HamburgerMenuContext)

    const wrapper = useRef(null)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    useOnClickOutside(wrapper, closeMenu)


    return (
        <div className='relative'>
            <div ref={wrapper} className=''>
            <div className='h-full -mt-3 sm:-mt-[17px]  ml-0.5 mr-16'>
                <Hamburger isMenuOpen={isMenuOpen} callback={setIsMenuOpen}/>
            </div>
            
            {showControl((
                    <div className='absolute shadow-lg shadow-black z-30 top-7 lg:top-8 -left-[8px] sm:-left-3'>
                        <NavbarContainer closeMenu={closeMenu} />
                    </div>
                ), isMenuOpen)}
        </div>  
        </div>
           
    )
})

export default HamburgerMenu