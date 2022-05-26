import React from "react";


const showControl = (component: JSX.Element, isShowing: boolean): JSX.Element | null => {
    return isShowing ? component : null
}

export default showControl