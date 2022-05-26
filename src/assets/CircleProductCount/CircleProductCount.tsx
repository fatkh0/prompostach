import classNames from "classnames";
import React from "react";


type TProps = {
    count: number
}

const CircleProductCount: React.FC<TProps> = React.memo(({count}) => {

    const classes = classNames({
        'bg-red-600 rounded-full flex items-center justify-center p-0.5': true,
        'sm:w-5 sm:h-5 w-4 h-4': count < 100,
        'sm:w-6 sm:h-6 w-5 h-5': count >= 100
    })

    return (
        <div className={classes}>
            <span className="text-white text-xs">
                {count}
            </span>
        </div>
    )
})

export default CircleProductCount