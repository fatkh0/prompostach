import React, { useRef } from "react";
import { FaUser } from "react-icons/fa";
import makeNavbar from '../../assets/navbarCreater'
import showControl from "../../assets/showControl/showControl";
import { TNavItem } from '../Navbar/NavbarContainer'

type TProps = {
    loginMenuItems: Array<TNavItem>
    isMenuOpen: boolean 
    setIsMenuOpen: (isMenuOpen: boolean ) => void
}

const LoginMenu: React.FC<TProps> = React.memo(({loginMenuItems, setIsMenuOpen, isMenuOpen}) => {

    const userIcon = useRef(null)
    const loginMenu = useRef(null)

    const onToggleLoginMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="relative ">
            <div ref={userIcon} onClick={onToggleLoginMenu} className='mr-0.5 cursor-pointer'>
                <FaUser className='w-6 h-6 sm:w-8 sm:h-8' />
            </div>
            {showControl(
                <div ref={loginMenu} className='absolute -left-1 top-11 sm:left-auto sm:right-0'>
                    <ul className="capitalize w-screen sm:w-72 bg-white text-black text-lg font-bold">
                        {makeNavbar(loginMenuItems)}
                    </ul>
                </div>
            , isMenuOpen)}
        </div>
        
    )
})

export default LoginMenu

