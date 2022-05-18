import React from 'react'
import Hamburger from '../../assets/Hamburger/Hamburger'


type TProps = {}

const Header: React.FC<TProps> = React.memo(() => {

    const openMenu = (isActive: boolean | null) => {
        const data = isActive ? 'true' : 'false'
        alert(`isActive ${data} `)
    }



    return (
        <header className='bg-[#111] h-14 text-white min-w-screen flex items-center justify-between'>
            <div className='h-full ml-2 mt-5 mr-10'><Hamburger callback={openMenu}/></div>
            <div className='text-base sm:text-3xl font-bold mx-auto tracking-wider uppercase font-sans'>prompostach</div>
            <div className='mr-4 hidden md:block'>
                <span>user </span>
                <span>login </span>
                <span>signin</span>
            </div>
            <div className='mr-4 md:hidden block'>
                icon
            </div>
        </header>
    )
})

export default Header