import React, { LegacyRef, useRef, useState, RefObject } from 'react'
import Hamburger from '../../assets/Hamburger/Hamburger'
import showControl from '../../assets/showControl/showControl'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
import NavbarContainer from '../Navbar/NavbarContainer'
import user from '../../images/user.png'
import { FaUser, FaShoppingCart } from "react-icons/fa";
import LoginMenuContainer from '../LoginMenu/LoginMenuContainer'
import CartMenuContainer from '../CartMenu.tsx/CartMenuContainer'
import HamburgerMenuContainer from '../HamburgerMenu/HamburgerMenuContainer'
import { rmSync } from 'fs'




type TProps = {
    logoText: string
}



const Header: React.FC<TProps> = React.memo(({logoText}) => {



    return (
        <header className='bg-black  text-white'>
            <Container>
                    <div className='h-14 lg:h-16 flex items-center justify-between '>

                        <HamburgerMenuContainer />

                        <div className='text-base sm:text-3xl font-bold mx-auto tracking-wider uppercase font-sans'>
                            {logoText}
                        </div>

                        <div className='flex w-[70px] sm:w-[100px] justify-between'>
                            <CartMenuContainer />
                            <LoginMenuContainer />
                        </div>
                    </div>

                
            </Container>
        </header>
    )
})

export default Header