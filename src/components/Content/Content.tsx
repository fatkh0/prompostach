import React from "react";
import ContainerFluid from "../ContainerFluid/ContainerFluid";
import Container from '../Container/Container'
import BannerContainer from "../Banner/BannerContainer";


type TProps = {}

const Content: React.FC<TProps> = React.memo(() => {




    return (
        <React.Fragment>
            <BannerContainer />
            <Container>
                <React.Fragment>
                    content
                </React.Fragment>
            </Container>
        </React.Fragment>
        
    )
})

export default Content