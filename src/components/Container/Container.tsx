import React from "react";


type TProps = {
    children: JSX.Element
}

const Container: React.FC<TProps> = ({children}) => {

    return  (
        <div className="w-screnn max-w-[1280px] mx-auto px-2 xl:px-1.5">
            {children}
        </div>
    )
}

export default Container