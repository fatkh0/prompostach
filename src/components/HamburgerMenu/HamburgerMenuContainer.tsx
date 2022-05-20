import React, { LegacyRef, useRef, useState, RefObject } from 'react'
import Hamburger from '../../assets/Hamburger/Hamburger'
import showControl from '../../assets/showControl/showControl'
import NavbarContainer from '../Navbar/NavbarContainer'
import { useOnClickOutside } from "usehooks-ts";
import HamburgerMenu from './HamburgerMenu';




type TProps = {}


const HamburgerMenuContainer: React.FC<TProps> = React.memo(() => {

    const [isMenuOpen, setIsMenuOpen] = useState(false) 

    return <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
})

export default HamburgerMenuContainer