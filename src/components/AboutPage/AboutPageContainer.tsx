import React from "react";
import AboutPage from "./AboutPage";


type TProps = {}

const AboutPageContainer: React.FC<TProps> = React.memo((props) => {


    return <AboutPage {...props}/>
})

export default AboutPageContainer