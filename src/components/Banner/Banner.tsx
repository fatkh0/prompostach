import React from "react";


type TProps = {
    bannerBg: string
    bannerText: string
    textColor?: string
}

const Banner: React.FC<TProps> = ({bannerBg, bannerText = '', textColor = 'white'}) => {

    return (
        <div
        style={{backgroundImage: `url(${bannerBg})`}}
         className='aspect-[4/3] sm:aspect-video 
            lg:aspect-[2.35/1]  bg-center bg-cover 
            bg-no-repeat flex justify-center items-center'>
             <div className={`text-${textColor} uppercase text-center font-sans font-bold text-2xl sm:text-3xl md:text-4xl xl:text-6xl`}> 
                {bannerText}
             </div>
        </div>
    )
}


export default Banner



