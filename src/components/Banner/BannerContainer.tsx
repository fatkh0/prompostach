import React from "react";
import Banner from './Banner'


type TProps = {}

const BannerContainer: React.FC<TProps> = () => {

    const bgURl = 'https://prompostach.cz/wp-content/uploads/2022/02/med-1900x690-1.jpg'
    const bannerText = 'Цветной металлопрокат'

    return <Banner bannerBg={bgURl} bannerText={bannerText} />
}


export default BannerContainer