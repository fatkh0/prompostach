import React from "react";


type TContext = {
    isMenuOpen: boolean
    setIsMenuOpen: (isMenuOpen: boolean) => void
}

const HamburgerMenuContext = React.createContext<TContext>({} as TContext)

export default HamburgerMenuContext