import React from "react";
import Container from "../Container/Container";


type TProps = {}

const Footer: React.FC<TProps> = React.memo(() => {


    return(
        <section className=" bg-green-400">
            <Container>
                <div className="h-20 flex items-center">
                    footer
                </div>
            </Container>
        </section>
    )
})

export default Footer