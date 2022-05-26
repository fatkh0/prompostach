import classNames from "classnames";
import React, { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import styles from './Hamburger.module.css'

type TProps = {
    callback: (isActive: boolean) => void 
    isMenuOpen: boolean
}

const Hamburger: React.FC<TProps> = React.memo(({callback, isMenuOpen}) => {


    const Checkbox = useRef<null | HTMLInputElement>(null);

    useEffect(() => {
        if (!isMenuOpen && Checkbox.current) {
            Checkbox.current.checked = false
        }
    }, [isMenuOpen])

    const onHamburgerClick = () => {
        callback(Checkbox.current?.checked === true)
    }

    return (
        <div onClick={onHamburgerClick}>
            <input ref={Checkbox} type="checkbox" className={styles.menu_checkbox} id='menu_checkbox' />
            <label htmlFor="menu_checkbox">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </div>
)
})

export default Hamburger