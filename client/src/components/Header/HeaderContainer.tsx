import React, {useState, useRef, LegacyRef, useEffect, RefObject} from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import Header from './Header'


type TProps = {
}

const HeaderContainer: React.FC<TProps> = React.memo((props) => {

    const logoText = 'prompostach'

    return <Header 
        logoText={logoText} 
        {...props}
        />
})

export default HeaderContainer