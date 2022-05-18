import classNames from "classnames";
import React, { useState, useRef } from "react";
import styles from './Hamburger.module.css'

type TProps = {
    callback: (isActive: boolean | null ) => void 
}

const Hamburger: React.FC<TProps> = React.memo(({callback}) => {


    const Checkbox = useRef<null | HTMLInputElement>(null);

    const onClick = (): void => {
            callback(Checkbox.current?.checked === true)
    }

    return (
        <div onClick={onClick}>
            <input type="checkbox" ref={Checkbox} className={styles.menu_checkbox} id='menu_checkbox' />
            <label htmlFor="menu_checkbox">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </div>
)
})

export default Hamburger