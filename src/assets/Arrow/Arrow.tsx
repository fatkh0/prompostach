import classNames from "classnames";
import React, { useState } from "react";
import { TNavItem } from "../../components/Navbar/NavbarContainer";
import styles from './Arrow.module.css'



type TProps = {
    isUp: boolean
}

const Arrow: React.FC<TProps> = React.memo(({isUp = false}) => {


    const arrowClasses = classNames({
        [styles.arrow]: true,
        [styles.up]: isUp,
        [styles.down]: !isUp
    })

    return <div className={arrowClasses}></div>
})

export default Arrow