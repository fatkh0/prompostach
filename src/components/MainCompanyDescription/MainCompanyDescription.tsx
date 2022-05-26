import React from "react";
import Container from "../Container/Container";

type TProps = {
    title: string
    description: string
}

const MainCompanyDescription: React.FC<TProps> = React.memo(({title, description}: TProps) => {
    return (
        <Container>
            <section>
                <div className="text-[#E27434] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-5 sm:mb-10">{title}</div>
                <div className="text-lg text-clip ">{description}</div>
            </section>
        </Container>
        
    )
})

export default MainCompanyDescription