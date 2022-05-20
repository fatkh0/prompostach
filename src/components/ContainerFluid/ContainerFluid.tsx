import React from "react";


type TProps = {
    //bgURL?: string
    children: JSX.Element
}

const ContainerFluid: React.FC<TProps> = React.memo(({children}) => {

    const bgUR = 'https://prompostach.cz/wp-content/uploads/2022/02/med-1900x690-1.jpg'

    return (
        <div
        style={{backgroundImage: `url(${bgUR})`}}
         className='aspect-[4/3] sm:aspect-video lg:aspect-[2.35/1]  bg-center bg-cover bg-no-repeat'>
             {children}
        </div>
    )
})

export default ContainerFluid


/*

<img src="https://prompostach.cz/wp-content/uploads/2022/02/med-1900x690-1.jpg" 
                className="w-screen absolute z-0"
             />
*/