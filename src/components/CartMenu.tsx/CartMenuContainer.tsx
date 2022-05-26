import React, {useState} from 'react'
import { TNavItem } from '../../types/types'
import { FaShoppingCart } from "react-icons/fa";
import CartMenu from './CartMenu'


type TProps = {}


const CartMenuContainer: React.FC<TProps> = React.memo( () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const cartMenuItems: Array<TNavItem> = [
        {id: 1, desctiption: 'shoppingCart', path: '/cart', innerText: 'моя корзина'},
        {id: 2, desctiption: 'liked', path: '/liked', innerText: 'мне понравилось'},
        {id: 3, desctiption: 'pay', path: '/pay', innerText: 'оплата'}
    ]

    const productCount = 1

    return <CartMenu 
        productCount={productCount}
        Icon={FaShoppingCart} 
        menuItems={cartMenuItems} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        stylesX=' -right-[54px]' />
})

export default CartMenuContainer