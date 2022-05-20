import React, { useState } from 'react'
import Menu from '../../assets/Menu/Menu'
import { TNavItem } from '../../types/types'
import { FaUser } from "react-icons/fa";

type TProps = {}

const LoginMenuContainer: React.FC<TProps> = React.memo(() => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)



    const loginMenuItems: Array<TNavItem> = [
        {id: 1, desctiption: 'login', path: '/login', innerText: 'войти'},
        {id: 2, desctiption: 'registration', path: '/registration', innerText: 'регистрация'},
    ]

    return <Menu Icon={FaUser} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} menuItems={loginMenuItems} stylesX=' -right-[4px]' />
})

export default LoginMenuContainer