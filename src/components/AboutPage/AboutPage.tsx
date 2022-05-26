import React from "react";
import Container from "../Container/Container";


type TProps = {}

const AboutPage: React.FC<TProps> = React.memo(() => {



    return (
        <section>
            <Container >
                <div>
                    About Us
                </div>
            </Container>
        </section>
    )
})

export default AboutPage