import React from "react";
import Navbar from "./Navbar";


type TProps = {
    closeMenu: () => void
}

export type TNavItem = {
    id: number
    innerText: string
    desctiption: string
    path: string
}


const NavbarContainer: React.FC<TProps> = ({closeMenu}) => {

    const  navbar: Array<TNavItem> = [
        {id: 1, desctiption: 'mainPage', path: '/', innerText: 'главная'},
        {id: 2, desctiption: 'aboutUs', path: '/about', innerText: 'о нас'},
        {id: 3, desctiption: 'contacts', path: '/contacts', innerText: 'контакты'},
    ]

    const catalog: Array<TNavItem> =[
        {id: 1, desctiption: 'wire', path: '/catalog/wire', innerText: 'Провод'},
        {id: 2, desctiption: 'sheets', path: '/catalog/sheets', innerText: 'Листы'},
        {id: 3, desctiption: 'bars', path: '/catalog/bars', innerText: 'Прутки'},
        {id: 4, desctiption: 'pipers', path: '/catalog/pipers', innerText: 'Трубы'},
        {id: 5, desctiption: 'tires', path: '/catalog/tires', innerText: 'Шины'},
    ]

    const languages: Array<TNavItem> = [
        {id: 1, desctiption: 'cz', path: '/cz', innerText: 'cz'},
        {id: 2, desctiption: 'ru', path: '/ru', innerText: 'ru'},
    ]




    return <Navbar navbar={navbar} closeMenu={closeMenu} catalog={catalog} languages={languages} />
}

export default NavbarContainer